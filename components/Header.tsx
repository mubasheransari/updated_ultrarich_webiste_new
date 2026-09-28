"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LANGUAGES, useLanguage } from "./LanguageProvider";

const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Ultra Rich World", href: "/ultra-rich-world" },
  { label: "Grow With Us", href: "/grow-with-us" },
  { label: "Where to Find Us", href: "/where-to-find-us" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Leaf-pattern background is always visible.
  // Homepage gets a slightly lighter overlay before scrolling.
  const headerClass =
    isHomePage && !scrolled
      ? "bg-red-textured/95 shadow-xl"
      : "bg-red-textured shadow-xl";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${headerClass}`}
    >
      {/* =========================================================
          MAIN NAVBAR
      ========================================================= */}
      <div
        className="
          mx-auto
          flex
          min-h-[128px]
          w-full
          max-w-none
          items-center
          px-6
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >
        {/* =======================================================
            LOGO
        ======================================================= */}
        <Link
          href="/"
          className="
            mr-10
            flex
            shrink-0
            items-center
            justify-start
            sm:mr-14
            lg:mr-16
          "
          aria-label="Mezan Ultra Rich"
          onClick={() => {
            setOpen(false);
            setLangOpen(false);
          }}
        >
          <Image
            src="/logo.avif"
            alt="Mezan Ultra Rich"
            width={150}
            height={54}
            priority
            className="
              h-auto
              w-[88px]
              object-contain
              sm:w-[108px]
              lg:w-[122px]
            "
          />
        </Link>

        {/* =======================================================
            DESKTOP NAVIGATION
        ======================================================= */}
        <nav
          className="
            hidden
            flex-1
            items-center
            justify-center
            gap-6
            lg:flex
            xl:gap-9
            2xl:gap-10
          "
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                whitespace-nowrap
                text-[16px]
                font-semibold
                text-white/95
                transition-colors
                duration-200
                hover:text-brand-gold
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* =======================================================
            DESKTOP RIGHT SIDE
        ======================================================= */}
        <div
          className="
            ml-auto
            hidden
            items-center
            gap-6
            lg:flex
          "
        >
          {/* =====================================================
              LANGUAGE SELECTOR
          ===================================================== */}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="
                flex
                items-center
                gap-2
                text-[16px]
                font-semibold
                text-white/95
                transition-colors
                duration-200
                hover:text-brand-gold
              "
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              <span>{language.nativeLabel}</span>

              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>

            {langOpen && (
              <div
                translate="no"
                className="
                  notranslate
                  absolute
                  right-0
                  mt-3
                  max-h-[70vh]
                  w-56
                  overflow-y-auto
                  rounded-md
                  border
                  border-white/15
                  bg-white
                  text-brand-black
                  shadow-2xl
                "
                role="listbox"
              >
                {LANGUAGES.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setLangOpen(false);
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      px-4
                      py-3
                      text-left
                      text-[15px]
                      transition
                      hover:bg-brand-red/10
                    "
                    role="option"
                    aria-selected={item.code === language.code}
                  >
                    <span>{item.nativeLabel}</span>

                    <span className="text-xs text-black/50">
                      {item.label}
                    </span>

                    {item.code === language.code && (
                      <span className="ml-2 text-brand-red">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* =====================================================
              SEARCH
          ===================================================== */}
          <button
            aria-label="Search"
            className="
              text-white/95
              transition
              duration-200
              hover:text-brand-gold
            "
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="M21 21L16.65 16.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* =====================================================
              ACCOUNT
          ===================================================== */}
          <button
            aria-label="Account"
            className="
              text-white/95
              transition
              duration-200
              hover:text-brand-gold
            "
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="8"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="M4 20c0-4 4-6 8-6s8 2 8 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* =======================================================
            MOBILE MENU BUTTON
        ======================================================= */}
        <button
          className="
            ml-auto
            flex
            items-center
            justify-center
            text-white
            lg:hidden
          "
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      {open && (
        <div
          className="
            border-t
            border-white/10
            bg-red-textured
            px-6
            py-6
            shadow-xl
            sm:px-10
            lg:hidden
          "
        >
          <nav className="flex flex-col gap-4">
            {/* ===================================================
                MOBILE NAV LINKS
            =================================================== */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  border-b
                  border-white/10
                  pb-4
                  text-[16px]
                  font-semibold
                  text-white/95
                  transition-colors
                  hover:text-brand-gold
                "
                onClick={() => {
                  setOpen(false);
                  setLangOpen(false);
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* ===================================================
                MOBILE LANGUAGE SELECTOR
            =================================================== */}
            <div
              translate="no"
              className="notranslate pt-3"
            >
              <p
                className="
                  mb-4
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                "
              >
                Language
              </p>

              <div className="grid grid-cols-2 gap-3">
                {LANGUAGES.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setOpen(false);
                    }}
                    className={`
                      rounded
                      border
                      px-8
                      py-6
                      text-left
                      text-sm
                      transition
                      ${
                        item.code === language.code
                          ? "border-brand-gold text-brand-gold"
                          : "border-white/15 text-white/85 hover:border-white/40"
                      }
                    `}
                  >
                    {item.nativeLabel}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { LANGUAGES, useLanguage } from "./LanguageProvider";

// const NAV_LINKS = [
//   { label: "About Us", href: "/about-us" },
//   { label: "Products", href: "/products" },
//   { label: "Ultra Rich World", href: "/ultra-rich-world" },
//   { label: "Grow With Us", href: "/grow-with-us" },
//   { label: "Where to Find Us", href: "/where-to-find-us" },
//   { label: "Contact Us", href: "/contact-us" },
// ];

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();
//   const { language, setLanguage } = useLanguage();

//   const isHomePage = pathname === "/";

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // The leaf background is intentionally present at every scroll position/page.
//   // The homepage gets a slightly lighter overlay at the top so the logo/nav remains readable.
//   const headerClass = isHomePage && !scrolled
//     ? "bg-red-textured/95 shadow-xl"
//     : "bg-red-textured shadow-xl";

//   return (
//     <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${headerClass}`}>
//       <div className="mx-auto flex min-h-[92px] w-full max-w-none items-center px-4 sm:px-6 lg:px-8">
//         <Link
//           href="/"
//           className="mr-8 flex shrink-0 items-center justify-start sm:mr-12"
//           aria-label="Mezan Ultra Rich"
//           onClick={() => setOpen(false)}
//         >
//           <Image
//             src="/logo.avif"
//             alt="Mezan Ultra Rich"
//             width={150}
//             height={54}
//             priority
//             className="h-auto w-[88px] object-contain sm:w-[104px] lg:w-[118px]"
//           />
//         </Link>

//         <nav className="hidden flex-1 items-center justify-center gap-6 xl:gap-9 lg:flex">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="whitespace-nowrap text-[15px] font-semibold text-white/95 transition-colors hover:text-brand-gold"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="ml-auto hidden items-center gap-5 lg:flex">
//           <div className="relative">
//             <button
//               onClick={() => setLangOpen((v) => !v)}
//               className="flex items-center gap-2 text-[15px] font-semibold text-white/95 transition-colors hover:text-brand-gold"
//               aria-expanded={langOpen}
//               aria-haspopup="listbox"
//             >
//               <span>{language.nativeLabel}</span>
//               <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
//                 <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" />
//               </svg>
//             </button>

//             {langOpen && (
//               <div translate="no" className="notranslate absolute right-0 mt-3 max-h-[70vh] w-56 overflow-y-auto rounded-md border border-white/15 bg-white text-brand-black shadow-2xl" role="listbox">
//                 {LANGUAGES.map((item) => (
//                   <button
//                     key={item.code}
//                     onClick={() => {
//                       setLanguage(item.code);
//                       setLangOpen(false);
//                     }}
//                     className="flex w-full items-center justify-between px-4 py-2.5 text-left text-[15px] transition hover:bg-brand-red/10"
//                     role="option"
//                     aria-selected={item.code === language.code}
//                   >
//                     <span>{item.nativeLabel}</span>
//                     <span className="text-xs text-black/50">{item.label}</span>
//                     {item.code === language.code && <span className="ml-2 text-brand-red">✓</span>}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button aria-label="Search" className="text-white/95 transition hover:text-brand-gold">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//               <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
//               <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </button>

//           <button aria-label="Account" className="text-white/95 transition hover:text-brand-gold">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//               <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
//               <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
//             </svg>
//           </button>
//         </div>

//         <button
//           className="ml-auto text-white lg:hidden"
//           aria-label="Menu"
//           aria-expanded={open}
//           onClick={() => setOpen((v) => !v)}
//         >
//           {open ? (
//             <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
//           ) : (
//             <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
//           )}
//         </button>
//       </div>

//       {open && (
//         <div className="border-t border-white/10 bg-red-textured px-5 py-5 shadow-xl lg:hidden">
//           <nav className="flex flex-col gap-4">
//             {NAV_LINKS.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="border-b border-white/10 pb-3 text-[15px] font-semibold text-white/95 hover:text-brand-gold"
//                 onClick={() => setOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//             <div translate="no" className="notranslate pt-2">
//               <p className="mb-3 text-xs uppercase tracking-widest text-white/60">Language</p>
//               <div className="grid grid-cols-2 gap-2">
//                 {LANGUAGES.map((item) => (
//                   <button
//                     key={item.code}
//                     onClick={() => {
//                       setLanguage(item.code);
//                       setOpen(false);
//                     }}
//                     className={`rounded border px-3 py-2 text-left text-sm transition ${item.code === language.code ? "border-brand-gold text-brand-gold" : "border-white/15 text-white/85"}`}
//                   >
//                     {item.nativeLabel}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
