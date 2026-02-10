import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Text column */}
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                Comptabilité SCF et fiscalité algérienne automatisée sur une
                seule plateforme
              </h1>

              <p className="mx-auto mb-9 max-w-[700px] text-base font-medium text-white/90 sm:text-lg sm:leading-[1.7]">
                TOTALFisc est la solution SaaS de référence pour les cabinets
                comptables et PME algériennes : comptabilité conforme SCF,
                facturation avec Timbre Fiscal, déclarations G50 et TVA
                automatisées, avec modules RH & paie intégrés.
              </p>

              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-200"
                  >
                    Demander une démo
                  </Link>
                </li>

                <li>
                  <Link
                    href="#features"
                    className="flex items-center gap-3 rounded-md border border-white/30 px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                  >
                    <span>Découvrir les modules</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>

              <div
                className="wow fadeInUp flex flex-wrap items-center justify-center gap-4 text-center text-sm text-white/60"
                data-wow-delay=".3s"
              >
                <span>Comptabilité conforme SCF</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>Déclarations fiscales automatisées (G50, TVA)</span>
                <span className="h-1 w-1 rounded-full bg-white/40" />
                <span>Facturation intelligente avec OCR</span>
              </div>
            </div>
          </div>

          {/* Illustration column */}
          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative z-10 mx-auto mt-10 max-w-[845px]"
              data-wow-delay=".25s"
            >
              <div>
                <Image
                  src="/images/hero/totalfisc-dashboard.png"
                  alt="TOTALFisc – tableau de bord comptabilité et fiscalité"
                  className="mx-auto -mb-1 max-w-full rounded-t-xl rounded-tr-xl"
                  width={1600}
                  height={1200}
                  priority
                />
              </div>

              {/* Left decorative dots (keep from template or adjust) */}
              <div className="absolute -left-9 bottom-0 -z-[1]">
                {/* existing SVG dots from template */}
              </div>

              {/* Right decorative dots (keep from template or adjust) */}
              <div className="absolute -right-6 -top-6 -z-[1]">
                {/* existing SVG dots from template */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
