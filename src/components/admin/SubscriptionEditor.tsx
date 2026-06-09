"use client";

import { useActionState } from "react";
import { Save, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { Label, Input, Select, FieldGroup } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { updateSubscription, type AdminState } from "@/actions/admin";

const initial: AdminState = {};

export function SubscriptionEditor({
  userId,
  plan,
  startDate,
  endDate,
}: {
  userId: string;
  plan?: string;
  startDate?: string;
  endDate?: string;
}) {
  const [state, action, pending] = useActionState(updateSubscription, initial);

  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="userId" value={userId} />

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
        <Label htmlFor="plan">Piano</Label>
        <Select id="plan" name="plan" defaultValue={plan ?? "Mensile"}>
          <option value="Mensile">Mensile</option>
          <option value="Trimestrale">Trimestrale</option>
          <option value="Annuale">Annuale</option>
        </Select>
      </FieldGroup>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldGroup>
          <Label htmlFor="startDate">Inizio</Label>
          <Input id="startDate" name="startDate" type="date" defaultValue={startDate} />
        </FieldGroup>
        <FieldGroup>
          <Label htmlFor="endDate" required>
            Scadenza
          </Label>
          <Input id="endDate" name="endDate" type="date" defaultValue={endDate} required />
        </FieldGroup>
      </div>

      <Button type="submit" variant="gold" disabled={pending} className="w-full">
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Salvataggio…
          </>
        ) : (
          <>
            <Save className="h-4 w-4" /> Salva abbonamento
          </>
        )}
      </Button>
    </form>
  );
}
