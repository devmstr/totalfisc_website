import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Img,
  Link,
} from "@react-email/components";

interface ContactConfirmationEmailProps {
  fullName: string;
}

export default function ContactConfirmationEmail({
  fullName,
}: ContactConfirmationEmailProps) {
  const logoUrl =
    process.env.NEXT_PUBLIC_LOGO_URL ||
    "https://totalpaie.com/images/logo/logo-black.png";

  return (
    <Html>
      <Head />
      <Preview>Votre message a bien été reçu par TotalPaie</Preview>
      <Body
        style={{
          backgroundColor: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Container
          style={{
            margin: "40px auto",
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "12px",
            maxWidth: "600px",
          }}
        >
          {/* Logo */}
          <Section style={{ marginBottom: "24px", textAlign: "center" }}>
            <Link href={"https://totalpaie.com"}>
              <Img src={logoUrl} alt="TotalPaie" width="155" height="30" />
            </Link>
          </Section>

          <Heading style={{ fontSize: "20px", marginBottom: "12px" }}>
            Merci pour votre message, {fullName} !
          </Heading>
          <Section>
            <Text style={{ fontSize: "14px", color: "#4b5563" }}>
              Nous avons bien reçu votre demande de contact. Un membre de
              l&apos;équipe TotalPaie vous répondra dans les plus brefs délais.
            </Text>
            <Text style={{ fontSize: "14px", color: "#4b5563" }}>
              Si votre demande est urgente, vous pouvez également nous joindre
              par téléphone au +213 797 87 40 30.
            </Text>
          </Section>
          <Text
            style={{ fontSize: "12px", color: "#9ca3af", marginTop: "24px" }}
          >
            TotalPaie – Plateforme de paie, pointage et RH pour les entreprises
            en Algérie.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
