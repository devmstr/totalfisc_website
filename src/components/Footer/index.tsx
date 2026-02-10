import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Brand + intro */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="TotalPaie logo"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-6 max-w-[270px] text-base text-gray-7">
                TotalPaie centralise la paie, le pointage et les dossiers RH
                pour les entreprises et groupes multi‑sites en Algérie.
              </p>
              <p className="mb-2 text-sm text-gray-7">Contact</p>
              <p className="text-sm text-gray-7">
                contact@totalpaie.com
                <br />
                +213 797 87 40 30
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Navigation
              </h4>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#features"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Fonctionnalités
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Tarifs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Ressources */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Ressources
              </h4>
              <ul>
                <li>
                  <Link
                    href="/demo"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Demander une démo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    À propos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Légal */}
          <div className="w-full px-4 md:w-2/3 lg:w-3/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">Légal</h4>
              <ul>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Conditions d’utilisation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-start">
                <p className="text-base text-gray-7">
                  © {new Date().getFullYear()} TotalPaie. Tous droits réservés.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-gray-7">
                  Conçu pour les équipes RH et paie en Algérie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes (unchanged) */}
      <div>
        <span className="absolute left-0 top-0 z-[-1] aspect-[95/82] w-full max-w-[570px]">
          <Image src="/images/footer/shape-1.svg" alt="shape" fill />
        </span>
        <span className="absolute bottom-0 right-0 z-[-1] aspect-[31/22] w-full max-w-[372px]">
          <Image src="/images/footer/shape-3.svg" alt="shape" fill />
        </span>
        {/* dots svg kept as is */}
      </div>
    </footer>
  );
};

export default Footer;
