"use client";

import {
  submitContactAction,
  type ContactFormResult,
} from "@/app/(site)/contact/actions";
import { Mail, Phone } from "lucide-react";
import { useActionState } from "react";

const Contact = () => {
  const [state, formAction, pending] = useActionState<
    ContactFormResult | null,
    FormData
  >(submitContactAction, null);

  return (
    <section id="contact" className="relative py-20 md:py-[120px]">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark" />
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2" />

      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Left side: contact info */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title mb-12 lg:mb-[80px]">
                <span className="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT
                </span>
                <h2 className="max-w-[360px] text-[32px] font-semibold leading-[1.14] text-dark dark:text-white md:text-[35px]">
                  Parlons de votre comptabilité et fiscalité.
                </h2>
              </div>

              <div className="mb-12 flex flex-wrap gap-8 lg:mb-0">
                {/* Email */}
                <div className="flex w-[330px] max-w-full">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                      Email
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      contact@totalfisc.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex w-[330px] max-w-full">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-dark dark:text-white">
                      Téléphone
                    </h3>
                    <p className="text-base text-body-color dark:text-dark-6">
                      +213 797 87 40 30
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: contact form */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Envoyez‑nous un message
              </h3>

              <form action={formAction}>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Nom et prénom*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Nom complet"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                  {state && !state.ok && state.fieldErrors?.fullName && (
                    <p className="mt-1 text-xs text-red-500">
                      {state.fieldErrors.fullName}
                    </p>
                  )}
                </div>

                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Email professionnel*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="prenom.nom@entreprise.dz"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                  {state && !state.ok && state.fieldErrors?.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {state.fieldErrors.email}
                    </p>
                  )}
                </div>

                <div className="mb-[22px]">
                  <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Téléphone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+213 ..."
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                  {state && !state.ok && state.fieldErrors?.phone && (
                    <p className="mt-1 text-xs text-red-500">
                      {state.fieldErrors.phone}
                    </p>
                  )}
                </div>

                <div className="mb-[22px]">
                  <label
                    htmlFor="company"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nom de votre entreprise"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                  {state && !state.ok && state.fieldErrors?.company && (
                    <p className="mt-1 text-xs text-red-500">
                      {state.fieldErrors.company}
                    </p>
                  )}
                </div>

                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    placeholder="Décrivez votre besoin en comptabilité, facturation ou conformité fiscale"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                  {state && !state.ok && state.fieldErrors?.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {state.fieldErrors.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90 disabled:opacity-60"
                  >
                    {pending ? "Envoi en cours..." : "Envoyer la demande"}
                  </button>
                </div>

                {state && (
                  <p
                    className={`text-sm ${state.ok ? "text-green-500" : "text-red-500"
                      }`}
                  >
                    {state.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
