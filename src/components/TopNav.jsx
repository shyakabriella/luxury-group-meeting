import React from "react";

export default function TopNav() {
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-[40px] border-b border-[#8f7a45] bg-[#a18a4d]">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-center px-4">
        <a
          href="https://www.luxuryweb.ashbhub.com/"
          className="flex items-center gap-2 text-[11px] font-normal uppercase tracking-[0.14em] text-white transition hover:opacity-90 sm:text-[12px] md:text-[13px]"
        >
          <span className="text-[16px] leading-none">‹</span>
          <span>Take Me Back To Resort Website</span>
        </a>
      </div>
    </div>
  );
}