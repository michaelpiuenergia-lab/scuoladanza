"use server";

import { prisma } from "@/lib/db";

export type EnrollmentState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(form: FormData, key: string): string {
  return (form.get(key) as string | null)?.trim() ?? "";
}

export async function submitEnrollment(
  _prev: EnrollmentState,
  form: FormData,
): Promise<EnrollmentState> {
  const firstName = str(form, "firstName");
  const lastName = str(form, "lastName");
  const email = str(form, "email");
  const phone = str(form, "phone");
  const birthDate = str(form, "birthDate");
  const courseName = str(form, "courseName");
  const message = str(form, "message");
  const privacy = form.get("privacy") === "on";

  const errors: Record<string, string> = {};
  if (firstName.length < 2) errors.firstName = "Inserisci il nome.";
  if (lastName.length < 2) errors.lastName = "Inserisci il cognome.";
  if (!EMAIL_RE.test(email)) errors.email = "Inserisci un'email valida.";
  if (phone.replace(/\D/g, "").length < 6)
    errors.phone = "Inserisci un numero di telefono valido.";
  if (!privacy)
    errors.privacy = "È necessario accettare l'informativa sulla privacy.";

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, message: "Controlla i campi evidenziati." };
  }

  try {
    await prisma.enrollmentRequest.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        birthDate: birthDate || null,
        courseName: courseName || null,
        message: message || null,
        privacy,
      },
    });
  } catch {
    return {
      ok: false,
      message:
        "Si è verificato un errore durante l'invio. Riprova o contattaci telefonicamente.",
    };
  }

  return {
    ok: true,
    message:
      "La tua richiesta di iscrizione è stata inviata correttamente. Sarai ricontattato dalla scuola.",
  };
}
