"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Loader2, PartyPopper } from "lucide-react";
import { Label, Input, Textarea, Select, FieldError, FieldGroup } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { submitEnrollment, type EnrollmentState } from "@/actions/enrollment";
import { COURSES } from "@/data/courses";

const initial: EnrollmentState = { ok: false };

export function EnrollmentForm({ defaultCourse }: { defaultCourse?: string }) {
  const [state, formAction, pending] = useActionState(submitEnrollment, initial);

  if (state.ok) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="on-dark panel-solid relative overflow-hidden p-10 text-center"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold-light">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h2 className="mt-6 font-display text-3xl text-ivory">
          Richiesta inviata!
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ivory-dim/90">
          {state.message}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/corsi" variant="outline">
            Esplora i corsi
          </Button>
          <Button href="/" variant="ghost">
            Torna alla home
          </Button>
        </div>
        <p className="mt-8 inline-flex items-center gap-2 text-sm text-gold-light">
          <PartyPopper className="h-4 w-4" /> Benvenuta/o nella famiglia Khaybullova
        </p>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="on-dark panel-solid p-6 sm:p-9">
      {state.message && !state.ok && (
        <div className="mb-6 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-terracotta-light">
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldGroup>
          <Label htmlFor="firstName" required>
            Nome
          </Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" placeholder="Sofia" />
          <FieldError>{state.errors?.firstName}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="lastName" required>
            Cognome
          </Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" placeholder="Russo" />
          <FieldError>{state.errors?.lastName}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="sofia@email.it" />
          <FieldError>{state.errors?.email}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="phone" required>
            Telefono
          </Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="333 1234567" />
          <FieldError>{state.errors?.phone}</FieldError>
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="birthDate">Data di nascita</Label>
          <Input id="birthDate" name="birthDate" type="date" />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="courseName">Corso di interesse</Label>
          <Select id="courseName" name="courseName" defaultValue={defaultCourse ?? ""}>
            <option value="">Scegli un corso…</option>
            {COURSES.map((c) => (
              <option key={c.slug} value={c.title}>
                {c.title}
              </option>
            ))}
            <option value="Non so ancora">Non so ancora / consigliatemi voi</option>
          </Select>
        </FieldGroup>

        <FieldGroup className="sm:col-span-2">
          <Label htmlFor="message">Messaggio / note</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Raccontaci qualcosa: età dell'allievo, esperienza, disponibilità oraria…"
          />
        </FieldGroup>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm text-ivory-dim/85">
        <input
          type="checkbox"
          name="privacy"
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-white/20 bg-scene-700 accent-gold"
        />
        <span>
          Ho letto e accetto l&apos;
          <a href="/privacy" className="text-gold-light underline-offset-2 hover:underline">
            informativa sulla privacy
          </a>{" "}
          e autorizzo il trattamento dei dati per essere ricontattato.
        </span>
      </label>
      <FieldError>{state.errors?.privacy}</FieldError>

      <Button type="submit" variant="gold" size="lg" disabled={pending} className="mt-7 w-full">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Invio in corso…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Invia richiesta di iscrizione
          </>
        )}
      </Button>
    </form>
  );
}
