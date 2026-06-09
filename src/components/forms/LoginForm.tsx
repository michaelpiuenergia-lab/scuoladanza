"use client";

import { useActionState } from "react";
import { LogIn, Loader2, AlertCircle } from "lucide-react";
import { Label, Input, FieldGroup } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { login, type LoginState } from "@/actions/auth";

const initial: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initial);

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <div className="flex items-center gap-2 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-terracotta-light">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.error}
        </div>
      )}

      <FieldGroup>
        <Label htmlFor="email" required>
          Email o nome utente
        </Label>
        <Input
          id="email"
          name="email"
          type="text"
          autoComplete="username"
          placeholder="admin oppure nome@email.it"
          required
        />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="password" required>
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••"
          required
        />
      </FieldGroup>

      <Button type="submit" variant="gold" size="lg" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Accesso…
          </>
        ) : (
          <>
            <LogIn className="h-4 w-4" /> Accedi
          </>
        )}
      </Button>
    </form>
  );
}
