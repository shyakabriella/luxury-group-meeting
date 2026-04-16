import React, { useEffect, useRef, useState } from "react";
import locationImage from "../../assets/meeting-pictures/hotel-photo.png";

function MeetingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 md:h-8 md:w-8"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a5 5 0 00-5 5v2H5a3 3 0 00-3 3v7a3 3 0 003 3h14a3 3 0 003-3v-7a3 3 0 00-3-3h-2V7a5 5 0 00-5-5zm0 2a3 3 0 013 3v2H9V7a3 3 0 013-3z" />
    </svg>
  );
}

export default function ResortSectionSeven() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.18 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#efeee8] py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          
          {/* Left image */}
          <div
            className={`relative transition-all duration-700 ease-out ${
              show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-[600px] overflow-hidden">
              <img
                src={locationImage}
                alt="Meeting venue"
                className="h-[180px] w-full object-cover sm:h-[220px] md:h-[260px] lg:h-[300px] rounded-md"
              />
            </div>

            {/* Overlapping round badge */}
            <div className="absolute right-[-10px] top-1/2 hidden -translate-y-1/2 lg:flex">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#f6f5f0] text-[#213739] shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                <MeetingIcon />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            className={`transition-all duration-700 ease-out ${
              show ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-[420px] text-center lg:mx-0 lg:text-left">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#a17d5a]">
                Corporate Meetings
              </p>

              <h2 className="mt-3 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light leading-[1.2] text-[#1e3b3d]">
                The Lay Of The Land
              </h2>

              <p className="mt-3 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5] text-[#334243]">
                Our property sets the stage for exceptional business gatherings with modern facilities. Explore versatile meeting rooms, conference halls, breakout areas, and networking spaces designed to support collaboration, presentations, and strategic discussions.
              </p>

              <a href="/group-services" target="_blank" className="mt-5 rounded-md inline-flex min-w-[130px] items-center justify-center bg-[#213739] px-6 py-2.5 text-[12px] font-medium text-white transition hover:opacity-90">
                Explore Meetings
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
