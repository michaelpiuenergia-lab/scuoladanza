"use client";

import { useActionState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Label, Input, Textarea, FieldGroup } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { addCommunication, type AdminState } from "@/actions/admin";

const initial: AdminState = {};

export function CommunicationForm({
  userId,
  allowBroadcast = false,
}: {
  userId?: string;
  allowBroadcast?: boolean;
}) {
  const [state, action, pending] = useActionState(addCommunication, initial);

  return (
    <form action={action} className="space-y-4" key={state.ok ? "sent" : "draft"}>
      <input type="hidden" name="userId" value={allowBroadcast ? "ALL" : userId ?? ""} />

      {state.message && state.ok && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-600/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          {state.message}
        </div>
      )}
      {state.error && (
        <div className="flex items-center gap-2 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-terracotta-deep">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.error}
        </div>
      )}

      <FieldGroup>
        <Label htmlFor="title" required>
          Titolo
        </Label>
        <Input id="title" name="title" placeholder="Es. Promemoria saggio" required />
      </FieldGroup>
      <FieldGroup>
        <Label htmlFor="body" required>
          Messaggio
        </Label>
        <Textarea id="body" name="body" placeholder="Scrivi qui la comunicazione…" required />
      </FieldGroup>

      <Button type="submit" variant="outline" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Invio…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Invia comunicazione
          </>
        )}
      </Button>
    </form>
  );
}
