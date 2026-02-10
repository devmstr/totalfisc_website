import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  company: z.string().min(2),
  employees: z.string().optional(),
  message: z.string().min(5),
  date: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const { fullName, email, phone, company, employees, message, date } =
      parsed;

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

    return NextResponse.json(
      { ok: true, message: "Demande de démo enregistrée." },
      { status: 200 },
    );
  } catch (err: any) {
    if (err?.name === "ZodError") {
      return NextResponse.json(
        { ok: false, message: "Validation échouée", issues: err.issues },
        { status: 400 },
      );
    }
    console.error(err);
    return NextResponse.json(
      { ok: false, message: "Erreur serveur" },
      { status: 500 },
    );
  }
}
