import React, { useEffect, useState } from "react";

export default function TopNav() {
  const [hideMobileTopNav, setHideMobileTopNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideMobileTopNav(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[60] border-b border-[#8f7a45] bg-[#a18a4d] transition-transform duration-300 ${
        hideMobileTopNav ? "-translate-y-full md:translate-y-0" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex h-[56px] max-w-[1600px] items-center justify-center px-4 md:h-[40px] md:px-8 lg:px-12">
        <a
          href="https://www.luxuryweb.ashbhub.com/"
          className="flex items-center justify-center gap-2 text-center text-[10px] font-normal uppercase tracking-[0.12em] text-white transition hover:opacity-90 sm:text-[11px] md:text-[13px]"
        >
          <span className="text-[14px] leading-none md:text-[16px]">‹</span>
          <span>Take Me Back To Resort Website</span>
        </a>
      </div>
    </div>
  );
}