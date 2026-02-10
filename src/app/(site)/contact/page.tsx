import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | TotalPaie – Solution de paie et RH",
  description:
    "Contactez l’équipe TotalPaie pour une démo, des informations sur les tarifs ou des questions techniques concernant la paie, le pointage et la gestion RH.",
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
