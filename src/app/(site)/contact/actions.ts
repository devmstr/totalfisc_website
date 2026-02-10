"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendContactEmails } from "@/lib/email";

const contactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(5),
});

export type ContactFormResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

export async function submitContactAction(
  _prevState: ContactFormResult | null,
  formData: FormData,
): Promise<ContactFormResult> {
  const data = {
    fullName: formData.get("fullName")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    phone: formData.get("phone")?.toString() || "",
    company: formData.get("company")?.toString() || "",
    message: formData.get("message")?.toString() || "",
  };

  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach((issue) => {
      const key = issue.path.join(".");
      fieldErrors[key] = issue.message;
    });

    return {
      ok: false,
      message: "Veuillez corriger les erreurs du formulaire.",
      fieldErrors,
    };
  }

  const { fullName, email, phone, company, message } = parsed.data;

  await prisma.contactMessage.create({
    data: {
      fullName,
      email,
      phone: phone || null,
      company: company || null,
      message,
    },
  });

  // Send emails
  await sendContactEmails({ fullName, email, phone, company, message });

  return {
    ok: true,
    message:
      "Votre message a été envoyé et enregistré. Nous vous répondrons dans les plus brefs délais.",
  };
}
