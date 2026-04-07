import React, { useEffect, useRef, useState } from "react";

const galleryImages = [
  { image: "/home1.jpg", alt: "Meeting session at the resort" },
  { image: "/home2.jpg", alt: "Wonder Valley entrance view" },
  { image: "/home3.jpg", alt: "Resort dining experience" },
  { image: "/home4.jpg", alt: "Horse carriage activity at the resort" },
];

export default function ResortSectionEight() {
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
      { threshold: 0.12 }
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
      className="overflow-hidden bg-[#efeee8] py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="bg-white p-[6px] sm:p-[8px]">
          <div className="grid grid-cols-1 gap-[8px] lg:grid-cols-[1.05fr_1.2fr]">
            {/* Left large image */}
            <div
              className={`overflow-hidden transition-all duration-1000 ease-out ${
                show
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-14 opacity-0"
              }`}
            >
              <img
                src={galleryImages[0].image}
                alt={galleryImages[0].alt}
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px] md:h-[560px] lg:h-[720px] xl:h-[760px]"
              />
            </div>

            {/* Right side collage */}
            <div className="grid grid-cols-1 gap-[8px] lg:grid-rows-[1fr_auto]">
              {/* Top right image */}
              <div
                className={`overflow-hidden transition-all duration-1000 delay-150 ease-out ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <img
                  src={galleryImages[1].image}
                  alt={galleryImages[1].alt}
                  className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[280px] md:h-[340px] lg:h-[372px] xl:h-[392px]"
                />
              </div>

              {/* Bottom two images */}
              <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-2">
                <div
                  className={`overflow-hidden transition-all duration-1000 delay-300 ease-out ${
                    show
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <img
                    src={galleryImages[2].image}
                    alt={galleryImages[2].alt}
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[250px] md:h-[290px] lg:h-[340px] xl:h-[360px]"
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-1000 delay-500 ease-out ${
                    show
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <img
                    src={galleryImages[3].image}
                    alt={galleryImages[3].alt}
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[250px] md:h-[290px] lg:h-[340px] xl:h-[360px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}