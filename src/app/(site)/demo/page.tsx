"use client";

import { useActionState } from "react";
import { z } from "zod";
import { bookDemoAction } from "./actions";
import { Loader2 } from "lucide-react";
import Breadcrumb from "@/components/Common/Breadcrumb";

const schema = z.object({
  fullName: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(6, "Téléphone invalide"),
  company: z.string().min(2, "Entreprise requise"),
  employees: z.string().optional(), // e.g. "10-50"
  message: z.string().min(5, "Message requis"),
  date: z.string().optional(), // ISO date string from date input
});

type FormState =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> }
  | null;

export default function DemoPage() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(
    async (prev, formData) => {
      const data = {
        fullName: formData.get("fullName")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        phone: formData.get("phone")?.toString() || "",
        company: formData.get("company")?.toString() || "",
        employees: formData.get("employees")?.toString(),
        message: formData.get("message")?.toString() || "",
        date: formData.get("date")?.toString(),
      };

      const parsed = schema.safeParse(data);
      if (!parsed.success) {
        const fieldErrors: Record<string, string> = {};
        parsed.error.issues.forEach((i) => {
          const key = i.path.join(".");
          fieldErrors[key] = i.message;
        });
        return {
          ok: false,
          message: "Veuillez corriger les erreurs.",
          fieldErrors,
        };
      }

      const res = await bookDemoAction(parsed.data);
      return res;
    },
    null,
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <Breadcrumb pageName="Demander une démo" />

      <h1 className="mb-2 mt-16 text-3xl font-bold">Demander une démo de TOTALFisc</h1>
      <p className="mb-8 text-body-color">
        Laissez vos coordonnées et un expert TOTALFisc vous contactera pour une démonstration personnalisée de la plateforme.
      </p>

      <form
        action={formAction}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div>
          <label className="mb-2 block text-sm">Nom et prénom*</label>
          <input
            name="fullName"
            className="w-full rounded-md border px-3 py-2"
          />
          {state && !state.ok && state.fieldErrors?.fullName && (
            <p className="mt-1 text-sm text-red-600">
              {state.fieldErrors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm">Email professionnel*</label>
          <input
            name="email"
            type="email"
            className="w-full rounded-md border px-3 py-2"
          />
          {state && !state.ok && state.fieldErrors?.email && (
            <p className="mt-1 text-sm text-red-600">
              {state.fieldErrors.email}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm">Téléphone*</label>
          <input name="phone" className="w-full rounded-md border px-3 py-2" />
          {state && !state.ok && state.fieldErrors?.phone && (
            <p className="mt-1 text-sm text-red-600">
              {state.fieldErrors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm">Entreprise*</label>
          <input
            name="company"
            className="w-full rounded-md border px-3 py-2"
          />
          {state && !state.ok && state.fieldErrors?.company && (
            <p className="mt-1 text-sm text-red-600">
              {state.fieldErrors.company}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm">Effectif (optionnel)</label>
          <select
            name="employees"
            className="w-full rounded-md border bg-transparent px-3 py-2 pr-5"
          >
            <option value="">Sélectionner</option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-300">51–300</option>
            <option value="300+">300+</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm">
            Date de Création (optionnel)
          </label>
          <input
            name="date"
            type="date"
            className="w-full rounded-md border px-3 py-2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm">Message*</label>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-md border px-3 py-2"
          />
          {state && !state.ok && state.fieldErrors?.message && (
            <p className="mt-1 text-sm text-red-600">
              {state.fieldErrors.message}
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-primary/90 disabled:opacity-60"
          >
            {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Envoyer la demande de démo
          </button>
        </div>

        {state && (
          <p
            className={`md:col-span-2 ${state.ok ? "text-green-600" : "text-red-600"} text-sm`}
          >
            {state.message}
          </p>
        )}
      </form>
    </section>
  );
}
