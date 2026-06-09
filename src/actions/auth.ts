"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import {
  verifyPassword,
  createSession,
  destroySession,
  type Role,
} from "@/lib/auth";

export type LoginState = { error?: string };

export async function login(
  _prev: LoginState,
  form: FormData,
): Promise<LoginState> {
  const email = ((form.get("email") as string) ?? "").trim().toLowerCase();
  const password = (form.get("password") as string) ?? "";

  if (!email || !password) {
    return { error: "Inserisci email e password." };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return { error: "Email o password non corretti." };
  }

  await createSession({
    id: user.id,
    email: user.email,
    name: `${user.firstName} ${user.lastName}`,
    role: user.role as Role,
  });

  redirect(user.role === "ADMIN" ? "/admin" : "/area-riservata");
}

export async function logout() {
  await destroySession();
  redirect("/login");
}
