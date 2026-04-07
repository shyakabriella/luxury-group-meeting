import React, { useEffect, useState } from "react";

const topNavLinks = [
  { label: "VENUES", href: "/venues" },
  { label: "GROUP SERVICES", href: "/group-services" },
  { label: "ROOM BLOCKS", href: "/room-blocks" },
  { label: "GALLERY", href: "/gallery" },
];

function WonderValleyLogo() {
  return (
    <a
      href="/"
      className="group inline-flex items-center rounded-xl bg-black/20 px-3 py-2 backdrop-blur-[2px] transition-all duration-300 hover:opacity-90 md:px-4 md:py-3"
    >
      <img
        src="/losgo.png"
        alt="Wonder Valley Logo"
        className="h-[62px] w-auto max-w-[180px] object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.65)] md:h-[78px] md:max-w-[230px] lg:h-[88px] lg:max-w-[260px]"
      />
    </a>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <header className="fixed left-0 right-0 top-[40px] z-[60]">
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[rgba(40,27,29,0.92)] shadow-2xl backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-4 md:px-8 lg:px-12">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${
              isScrolled
                ? "min-h-[82px] md:min-h-[90px]"
                : "min-h-[100px] md:min-h-[118px]"
            }`}
          >
            {/* Logo */}
            <div className="min-w-0 shrink-0">
              <WonderValleyLogo />
            </div>

            {/* Desktop nav */}
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

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center shrink-0">
              <a
                href="/start-planning"
                className="inline-flex min-h-[58px] min-w-[270px] items-center justify-center bg-[#9f8850] px-8 text-[15px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#8e7948]"
              >
                Start Planning
              </a>
            </div>

            {/* Mobile right */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="/start-planning"
                className="inline-flex h-[42px] items-center justify-center bg-[#9f8850] px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#8e7948] sm:px-5"
              >
                Plan
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-[42px] w-[42px] items-center justify-center border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Toggle menu"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-5 bg-white transition-all duration-300 ${
                      mobileOpen ? "top-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white transition-all duration-300 ${
                      mobileOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white transition-all duration-300 ${
                      mobileOpen ? "top-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[rgba(40,27,29,0.96)] px-4 py-4 backdrop-blur-md">
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
  );
}