import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { LoginForm } from "@/components/forms/LoginForm";
import { MajolicaPattern, GoldDivider } from "@/components/ui/Ornament";
import { getSession } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Area riservata — Accedi",
  description: "Accedi all'area riservata della scuola di danza Khaybullova.",
};

export default async function LoginPage() {
  const session = await getSession();
  if (session) redirect(session.role === "ADMIN" ? "/admin" : "/area-riservata");

  return (
    <main className="on-dark relative grid min-h-screen place-items-center overflow-hidden bg-scene px-5 py-16">
      <MajolicaPattern className="text-gold" opacity={0.05} />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-gold/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-terracotta/15 blur-[130px]" />

      <Link
        href="/"
        className="absolute left-6 top-6 inline-flex items-center gap-2 text-sm text-ivory-dim transition-colors hover:text-gold-light"
      >
        <ArrowLeft className="h-4 w-4" /> Torna al sito
      </Link>

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <div className="panel p-8 sm:p-10">
          <div className="text-center">
            <h1 className="font-display text-3xl text-ivory">Area riservata</h1>
            <p className="mt-2 text-sm text-ivory-dim">
              Accedi per consultare il tuo abbonamento e le comunicazioni.
            </p>
          </div>

          <GoldDivider className="my-7" />

          <LoginForm />
        </div>

        {/* Credenziali demo */}
        <div className="mt-6 rounded-xl2 border border-gold/20 bg-gold/[0.06] p-5 text-sm text-ivory-dim">
          <p className="flex items-center gap-2 font-medium text-gold-light">
            <ShieldCheck className="h-4 w-4" /> Accessi dimostrativi
          </p>
          <ul className="mt-3 space-y-1.5">
            <li>
              <span className="text-ivory-mute">Cliente:</span>{" "}
              <code className="text-ivory">mario.rossi@email.it</code> /{" "}
              <code className="text-ivory">demo123</code>
            </li>
            <li>
              <span className="text-ivory-mute">Admin:</span>{" "}
              <code className="text-ivory">admin@khaybullova.it</code> /{" "}
              <code className="text-ivory">admin123</code>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
