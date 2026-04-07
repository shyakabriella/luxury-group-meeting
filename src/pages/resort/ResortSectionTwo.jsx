import React, { useEffect, useRef, useState } from "react";

export default function ResortSectionTwo() {
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
      className="w-full overflow-hidden border-t-[5px] border-[#16393b] bg-[#efeee8] py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 xl:gap-20">
          {/* Left Large Image */}
          <div
            className={`transition-all duration-1000 ease-out ${
              show
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-[560px] lg:mx-0">
              <img
                src="/home2.jpg"
                alt="Resort outdoor venue"
                className="h-[360px] w-full object-cover sm:h-[460px] md:h-[560px] lg:h-[690px] xl:h-[720px]"
              />
            </div>
          </div>

          {/* Right Content + Lower Image */}
          <div className="flex flex-col justify-start">
            {/* Text Block */}
            <div
              className={`transition-all duration-1000 ease-out delay-150 ${
                show
                  ? "translate-x-0 opacity-100"
                  : "translate-x-16 opacity-0"
              }`}
            >
              <p
                className="text-[15px] font-normal leading-[1.5] text-[#9b7a58] sm:text-[16px] md:text-[18px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Corporate Retreat in California
              </p>

              <h2
                className="mt-2 max-w-[520px] text-[42px] font-normal leading-[0.95] text-[#143554] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[78px]"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                }}
              >
                Our Resort,
                <br />
                Your Canvas
              </h2>

              <p
                className="mt-6 max-w-[720px] text-[17px] leading-[1.9] text-[#233235] sm:text-[18px] md:mt-8 md:text-[19px] lg:max-w-[650px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Whether you&apos;re planning a business conference, corporate
                retreat, or family reunion, Wonder Valley Ranch Resort offers
                experiences that no other setting in California can. A wide
                array of meeting rooms and outdoor venues provide the perfect
                backdrop in a secluded, natural setting near Fresno, CA, while
                world-class activities provide your guests with exceptional
                opportunities for team-building.
              </p>
            </div>

            {/* Lower Right Image */}
            <div
              className={`mt-10 transition-all duration-1000 ease-out delay-300 md:mt-12 lg:mt-16 ${
                show
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
            >
              <div className="mx-auto w-full max-w-[660px] lg:mx-0">
                <img
                  src="/home3.jpg"
                  alt="Guests enjoying the resort"
                  className="h-[280px] w-full object-cover sm:h-[360px] md:h-[430px] lg:h-[440px] xl:h-[470px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}