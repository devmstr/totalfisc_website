"use client";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex h-16 w-full items-center ${sticky
          ? "shadow-nav fixed z-[999] border-b border-stroke bg-white/80 backdrop-blur-[5px] dark:border-dark-3/20 dark:bg-dark/10"
          : "absolute bg-transparent"
          }`}
      >
        <div className="container flex w-full justify-between ">
          <div className="w-fix flex max-w-full items-center gap-4">
            <Link
              href="/"
              className={`navbar-logo flex h-full items-center gap-2`}
            >
              <Image
                src={sticky || pathUrl !== "/" ? "/logo-shape-green.svg" : "/logo-shape.svg"}
                alt="logo"
                width={32}
                height={32}
                className={`header-logo ${sticky || pathUrl !== "/"
                  ? "dark:brightness-0 dark:invert"
                  : ""
                  }`}
              />
              <span
                className={`text-xl font-bold font-sans ${sticky || pathUrl !== "/"
                  ? "text-primary dark:text-white"
                  : "text-white"
                  }`}
              >
                TOTALFisc
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-center  px-4 sm:w-full">
            <button
              onClick={navbarToggleHandler}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="absolute right-4 top-1/2 block w-16 -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[7px] rotate-45" : " "
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky
                    ? "bg-dark dark:bg-white"
                    : "bg-white"
                  }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? "opacity-0 " : " "
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky
                    ? "bg-dark dark:bg-white"
                    : "bg-white"
                  }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                  } ${pathUrl !== "/" && "!bg-dark dark:!bg-white"} ${pathUrl === "/" && sticky
                    ? "bg-dark dark:bg-white"
                    : "bg-white"
                  }`}
              />
            </button>
            <nav
              id="navbarCollapse"
              className={`navbar absolute right-0 z-30 flex h-[calc(100vh-4rem)] w-[75%] max-w-[500px] flex-col gap-5 rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 md:h-16 md:w-full md:max-w-full lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${navbarOpen
                ? "visibility top-full opacity-100"
                : "invisible top-[120%] opacity-0"
                }`}
            >
              <ul className="flex w-full flex-col items-start justify-start gap-2 md:mt-1 md:h-full md:flex-row md:items-center md:justify-center md:gap-12">
                {menuData.map((menuItem, index) =>
                  menuItem.path ? (
                    <li key={index} className="group relative">
                      {pathUrl !== "/" ? (
                        <Link
                          onClick={navbarToggleHandler}
                          scroll={false}
                          href={menuItem.path}
                          className={`ud-menu-scroll flex      w-full py-1 text-base text-dark group-hover:text-primary    lg:inline-flex lg:px-0 lg:py-6 
                            ${pathUrl === menuItem?.path && "text-primary"} 
                          `}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <Link
                          scroll={false}
                          href={menuItem.path}
                          className={`ud-menu-scroll flex py-1 text-base lg:inline-flex lg:px-0  ${sticky
                            ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                            : "text-body-color dark:text-white lg:text-white"
                            } ${pathUrl === menuItem?.path &&
                            sticky &&
                            "!text-primary"
                            }`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ) : (
                    <li className="submenu-item group relative" key={index}>
                      {pathUrl !== "/" ? (
                        <button
                          onClick={() => handleSubmenu(index)}
                          className={`ud-menu-scroll flex items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                        >
                          {menuItem.title}

                          <span className="pl-1">
                            <svg
                              className={`duration-300 lg:group-hover:rotate-180`}
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSubmenu(index)}
                          className={`ud-menu-scroll flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${sticky
                            ? "text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary"
                            : "text-white"
                            }`}
                        >
                          {menuItem.title}

                          <span className="pl-1">
                            <svg
                              className={`duration-300 lg:group-hover:rotate-180`}
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      )}

                      <div
                        className={`submenu relative left-0 top-full w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "!-left-[25px]" : "hidden"
                          }`}
                      >
                        {menuItem?.submenu?.map((submenuItem: any, i) => (
                          <Link
                            href={submenuItem.path}
                            key={i}
                            className={`block rounded px-4 py-[10px] text-sm ${pathUrl === submenuItem.path
                              ? "text-primary"
                              : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                              }`}
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    </li>
                  ),
                )}
              </ul>
              <div className="flex items-center gap-5 md:hidden">
                <Link
                  href="https://totalfisc-dashboard-9xyx.vercel.app/"
                  className={`text-nowrap rounded-lg bg-primary px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-primary/90`}
                >
                  Connexion
                </Link>
              </div>
            </nav>
          </div>
          <div className="absolute right-16 top-0 flex h-16 w-16 items-center px-3 md:relative md:right-0 md:w-fit">
            <ThemeToggler sticky={sticky} />
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="https://totalfisc-dashboard-9xyx.vercel.app/"
              className={`text-nowrap rounded-lg px-6 py-3 text-base font-medium duration-300 ease-in-out ${sticky || pathUrl !== "/"
                ? "bg-primary text-white hover:bg-primary/90 dark:bg-white/10 dark:hover:bg-white/20"
                : "bg-white text-primary hover:bg-gray-100"
                }`}
            >
              Connexion
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
