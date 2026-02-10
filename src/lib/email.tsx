"use server";

import { Resend } from "resend";
import { render } from "@react-email/components";
import ContactConfirmationEmail from "@/emails/ContactConfirmationEmail";
import DemoConfirmationEmail from "@/emails/DemoConfirmationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.EMAIL_FROM || "TotalPaie <no-reply@totalpaie.com>";
const ADMIN = process.env.EMAIL_TO_ADMIN || "contact@totalpaie.com";

export async function sendContactEmails(params: {
  fullName: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
}) {
  const { fullName, email, message, phone, company } = params;

  // 1) Confirmation to client
  const emailHtml = await render(
    <ContactConfirmationEmail fullName={fullName} />,
  );

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Votre message a bien été reçu – TotalPaie",
    html: emailHtml,
  });

  // 2) Notification to admin
  await resend.emails.send({
    from: FROM,
    to: ADMIN,
    subject: "Nouveau message de contact – TotalPaie",
    text: `
Nouveau message de contact :

Nom : ${fullName}
Email : ${email}
Téléphone : ${phone || "-"}
Entreprise : ${company || "-"}

Message :
${message}
    `.trim(),
  });
}

export async function sendDemoEmails(params: {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  employees?: string;
  message: string;
  date?: string;
}) {
  const { fullName, email, company, phone, employees, message, date } = params;

  // 1) Confirmation to client
  const emailHtml = await render(
    <DemoConfirmationEmail fullName={fullName} company={company} date={date} />,
  );

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Votre demande de démo – TotalPaie",
    html: emailHtml,
  });

  // 2) Notification to admin
  await resend.emails.send({
    from: FROM,
    to: ADMIN,
    subject: "Nouvelle demande de démo – TotalPaie",
    text: `
Nouvelle demande de démo :

Nom : ${fullName}
Email : ${email}
Téléphone : ${phone}
Entreprise : ${company}
Effectif : ${employees || "-"}

Préférence de date : ${date || "-"}

Message :
${message}
    `.trim(),
  });
}
