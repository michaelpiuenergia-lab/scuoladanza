"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth";

export type AdminState = { ok?: boolean; error?: string; message?: string };

async function ensureAdmin() {
  const session = await getSession();
  if (!session || session.role !== "ADMIN") redirect("/login");
}

function s(form: FormData, key: string) {
  return ((form.get(key) as string | null) ?? "").trim();
}

// — Modifica/crea l'abbonamento di un cliente (scadenza + piano) —
export async function updateSubscription(
  _prev: AdminState,
  form: FormData,
): Promise<AdminState> {
  await ensureAdmin();

  const userId = s(form, "userId");
  const plan = s(form, "plan") || "Mensile";
  const endStr = s(form, "endDate");
  const startStr = s(form, "startDate");

  if (!userId || !endStr) return { error: "Indica almeno la data di scadenza." };

  const endDate = new Date(`${endStr}T12:00:00`);
  if (Number.isNaN(endDate.getTime())) return { error: "Data di scadenza non valida." };

  const existing = await prisma.subscription.findFirst({
    where: { userId },
    orderBy: { endDate: "desc" },
  });

  if (existing) {
    await prisma.subscription.update({
      where: { id: existing.id },
      data: {
        endDate,
        plan,
        ...(startStr ? { startDate: new Date(`${startStr}T12:00:00`) } : {}),
      },
    });
  } else {
    await prisma.subscription.create({
      data: {
        userId,
        plan,
        startDate: startStr ? new Date(`${startStr}T12:00:00`) : new Date(),
        endDate,
      },
    });
  }

  revalidatePath(`/admin/clienti/${userId}`);
  revalidatePath("/admin/clienti");
  revalidatePath("/admin");
  return { ok: true, message: "Abbonamento aggiornato correttamente." };
}

// — Cambia stato di una richiesta di iscrizione —
export async function updateRequestStatus(form: FormData) {
  await ensureAdmin();
  const id = s(form, "id");
  const status = s(form, "status");
  if (!id || !status) return;
  await prisma.enrollmentRequest.update({ where: { id }, data: { status } });
  revalidatePath("/admin/richieste");
  revalidatePath("/admin");
}

// — Invia una comunicazione (a un cliente o a tutti) —
export async function addCommunication(
  _prev: AdminState,
  form: FormData,
): Promise<AdminState> {
  await ensureAdmin();
  const target = s(form, "userId"); // "" o "ALL" = avviso generale
  const title = s(form, "title");
  const body = s(form, "body");
  if (!title || !body) return { error: "Titolo e testo sono obbligatori." };

  await prisma.communication.create({
    data: {
      userId: target && target !== "ALL" ? target : null,
      title,
      body,
    },
  });

  if (target && target !== "ALL") revalidatePath(`/admin/clienti/${target}`);
  revalidatePath("/admin");
  return { ok: true, message: "Comunicazione inviata." };
}
