import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LOGO_SRC = "/losgo.png";

const topNavLinks = [
  { label: "VENUES", href: "/venues" },
  { label: "GROUP SERVICES", href: "/group-services" },
  { label: "GALLERY", href: "/gallery" },
];

function ConferenceLogo({ isScrolled = false, menuVersion = false }) {
  return (
    <a href="/" className="shrink-0">
      <img
        src={LOGO_SRC}
        alt="Wonder Valley Logo"
        className={`w-auto object-contain transition-all duration-300 drop-shadow ${
          menuVersion
            ? "h-[40px] max-w-[160px] sm:h-[48px]"
            : isScrolled
            ? "h-[50px] max-w-[180px] md:h-[52px] md:max-w-[190px] lg:h-[56px] lg:max-w-[200px]"
            : "h-[60px] max-w-[200px] md:h-[56px] md:max-w-[190px] lg:h-[60px] lg:max-w-[210px]"
        }`}
      />
    </a>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isStartPlanningPage = location.pathname === "/start-planning";
  const hasSolidHeader = isScrolled || isStartPlanningPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleOpenFromBottomBar = () => {
      setMobileOpen(true);
    };

    window.addEventListener("open-conference-mobile-menu", handleOpenFromBottomBar);

    return () => {
      window.removeEventListener(
        "open-conference-mobile-menu",
        handleOpenFromBottomBar
      );
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[55] transition-all duration-300 ${
          isScrolled ? "top-0 md:top-[40px]" : "top-[56px] md:top-[40px]"
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            hasSolidHeader
              ? "bg-[rgba(40,27,29,0.92)] shadow-2xl backdrop-blur-md"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto max-w-[1600px] px-4 md:px-8 lg:px-12">
            <div
              className={`flex items-center justify-center md:justify-between transition-all duration-300 ${
                hasSolidHeader
                  ? "min-h-[118px] md:min-h-[90px]"
                  : "min-h-[154px] md:min-h-[118px]"
              }`}
            >
              <div className="flex min-w-0 shrink-0 justify-center md:block">
                <ConferenceLogo isScrolled={hasSolidHeader} />
              </div>

              <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
                {topNavLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-[15px] font-light uppercase tracking-[0.08em] text-white transition hover:text-[#d7c089] xl:text-[16px]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden lg:flex items-center shrink-0">
                <a
                  href="https://direct-book.com/properties/luxurygardenpalace/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-16&checkOutDate=2026-04-17&trackPage=yes"
                  target="_blank"
                  className="inline-flex min-h-[40px] min-w-[200px] items-center justify-center bg-[#9f8850] px-8 text-[15px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#8e7948] rounded-md"
                >
                  Start Planning
                </a>
              </div>
            </div>
          </div>

          <div
            className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
              mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[rgba(40,27,29,0.96)] px-4 py-4 backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <ConferenceLogo menuVersion />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="text-[28px] leading-none text-white"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <nav className="flex flex-col">
                {topNavLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-white/10 py-4 text-sm font-light uppercase tracking-[0.12em] text-white transition hover:text-[#d7c089]"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="/start-planning"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex min-h-[48px] items-center justify-center bg-[#9f8850] px-5 text-sm font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#8e7948]"
                >
                  Start Planning
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}