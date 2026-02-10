"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendDemoEmails } from "@/lib/email";

const demoSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  company: z.string(),
  employees: z.string().optional(),
  message: z.string(),
  date: z.string().optional(), // ISO date string
});

export async function bookDemoAction(input: z.infer<typeof demoSchema>) {
  const parsed = demoSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false as const, message: "Données invalides." };
  }

  const { fullName, email, phone, company, employees, message, date } =
    parsed.data;

  await prisma.demoRequest.create({
    data: {
      fullName,
      email,
      phone,
      company,
      employees: employees || null,
      message,
      date: date ? new Date(date) : null,
    },
  });

  await sendDemoEmails({
    fullName,
    email,
    company,
    phone,
    employees,
    message,
    date,
  });

  return {
    ok: true as const,
    message:
      "Votre demande de démo a été enregistrée. Un membre de notre équipe vous contactera très prochainement.",
  };
}
