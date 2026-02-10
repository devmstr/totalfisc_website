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

interface DemoConfirmationEmailProps {
  fullName: string;
  company?: string;
  date?: string;
}

export default function DemoConfirmationEmail({
  fullName,
  company,
  date,
}: DemoConfirmationEmailProps) {
  const logoUrl =
    process.env.NEXT_PUBLIC_LOGO_URL ||
    "https://totalfisc.com/images/logo/logo-black.png";

  return (
    <Html>
      <Head />
      <Preview>Votre demande de démo TOTALFisc</Preview>
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
            <Link href={"https://totalfisc.com"}>
              <Img src={logoUrl} alt="TOTALFisc" width="155" height="30" />
            </Link>
          </Section>

          <Heading style={{ fontSize: "20px", marginBottom: "12px" }}>
            Merci pour votre demande de démo, {fullName} !
          </Heading>
          <Section>
            <Text style={{ fontSize: "14px", color: "#4b5563" }}>
              Nous avons bien enregistré votre demande de démonstration de
              TOTALFisc{company ? ` pour ${company}` : ""}.
            </Text>
            {date && (
              <Text style={{ fontSize: "14px", color: "#4b5563" }}>
                Vous avez indiqué une préférence de date : {date}.
              </Text>
            )}
            <Text style={{ fontSize: "14px", color: "#4b5563" }}>
              Notre équipe vous contactera par email ou téléphone pour confirmer
              un créneau et vous présenter la plateforme.
            </Text>
          </Section>
          <Text
            style={{ fontSize: "12px", color: "#9ca3af", marginTop: "24px" }}
          >
            TOTALFisc – Solution de comptabilité, facturation et fiscalité conforme SCF.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
