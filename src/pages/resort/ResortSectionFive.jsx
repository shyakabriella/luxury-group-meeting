import React, { useEffect, useRef, useState } from "react";
import cozyImage from "../../assets/meeting-pictures/business-meeting.png";

export default function ResortSectionFive() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.2 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f2ed] py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden">
        <img
          src="/home1.jpg"
          alt="Meeting background"
          className="h-full w-full object-cover opacity-[0.12] grayscale"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">

          {/* LEFT */}
          <div
            className={`relative z-10 transition-all duration-700 ease-out ${
              show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-[420px] text-center lg:text-left">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#a07d59]">
                Meetings & Conferences
              </p>

              <h2 className="mt-3 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-light leading-[1.2] text-[#18393b]">
                Where Ideas Come Together
              </h2>

              <p className="mt-3 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5] text-[#354344]">
                Host professional meetings and events in a calm, modern,
                fully equipped space designed for productivity and comfort.
                Perfect for corporate gatherings, workshops, and presentations.
              </p>

              <a href="/venues" target="_blank" className="mt-5 rounded-md inline-flex min-w-[150px] items-center justify-center bg-[#1f3435] px-5 py-2.5 text-[12px] font-medium text-white transition hover:opacity-90">
                Explore Venues
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-[600px] overflow-hidden shadow-[0_8px_28px_rgba(0,0,0,0.08)]">
              <img
                src={cozyImage}
                alt="Conference and meeting space"
                className="h-[180px] rounded-md w-full object-cover sm:h-[220px] md:h-[260px] lg:h-[300px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
