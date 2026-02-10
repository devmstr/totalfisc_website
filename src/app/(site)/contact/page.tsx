import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TOTALFisc – Solution de comptabilité et fiscalité",
  description:
    "Contactez l’équipe TOTALFisc pour une démo, des informations sur les tarifs ou des questions sur la conformité SCF en Algérie.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact" />
      <Contact />
    </>
  );
};

export default ContactPage;
