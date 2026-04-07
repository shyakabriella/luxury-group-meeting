import React, { useEffect, useRef, useState } from "react";

export default function ResortSectionFour() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.15 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t-[3px] border-[#1d4448] py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/home4.jpg"
          alt="Wonder Valley background"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[rgba(18,22,24,0.68)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2 xl:gap-8">
          {/* Left visual block */}
          <div className="relative overflow-visible">
            {/* Main image */}
            <div
              className={`relative overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-1000 ease-out ${
                show
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-16 opacity-0"
              }`}
            >
              <img
                src="/home1.jpg"
                alt="Aerial view of Wonder Valley"
                className="h-[240px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[460px]"
              />
            </div>

            {/* Small image mobile */}
            <div
              className={`relative z-20 mx-auto -mt-12 w-[72%] max-w-[280px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-1000 delay-200 ease-out md:hidden ${
                show
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <img
                src="/home2.jpg"
                alt="Lake and mountain view"
                className="h-[170px] w-full object-cover"
              />
            </div>

            {/* Small image desktop */}
            <div
              className={`absolute right-[-2%] top-[52%] z-20 hidden w-[180px] -translate-y-1/2 overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.38)] transition-all duration-1000 delay-200 ease-out md:block lg:w-[220px] xl:w-[260px] 2xl:w-[300px] ${
                show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
            >
              <img
                src="/home2.jpg"
                alt="Wonder Valley scenic setting"
                className="h-[180px] w-full object-cover lg:h-[220px] xl:h-[250px] 2xl:h-[280px]"
              />
            </div>
          </div>

          {/* Right text block */}
          <div
            className={`relative z-30 transition-all duration-1000 delay-300 ease-out ${
              show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <div className="max-w-[470px] xl:ml-auto">
              <p className="text-[16px] font-normal leading-[1.4] text-white/92 sm:text-[18px] md:text-[19px]">
                Location
              </p>

              <h2
                className="mt-2 text-[34px] font-normal leading-[0.96] text-white sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[66px]"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                }}
              >
                A Setting That
                <br />
                Inspires Wonder
              </h2>

              <p className="mt-5 text-[15px] leading-[1.8] text-white/82 sm:text-[16px] md:text-[17px] lg:text-[18px]">
                Wonder Valley Ranch Resort is located up in the Sierra Nevada
                foothills, just outside the city of Fresno. This setting
                provides all types of groups with a uniquely secluded event
                locale, made even better by wide-ranging facilities and
                immersive team experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}