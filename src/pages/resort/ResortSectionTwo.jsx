import React, { useEffect, useRef, useState } from "react";
import hotelImage from "../../assets/meeting-pictures/hotel-photo.png";
import hotelGarden from "../../assets/meeting-pictures/hotel-garden.png";

export default function ResortSectionTwo() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.15 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden border-t-[4px] border-[#16393b] bg-[#efeee8] py-8 sm:py-10 md:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-16">
          
          {/* Left Large Image */}
          <div
            className={`transition-all duration-700 ease-out ${
              show ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-[480px] lg:mx-0">
              <img
                src={hotelImage}
                alt="Meeting venue exterior"
                className="h-[240px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[460px] rounded-md"
              />
            </div>
          </div>

          {/* Right Content + Lower Image */}
          <div className="flex flex-col justify-start">
            
            {/* Text Block */}
            <div
              className={`transition-all duration-700 ease-out delay-150 ${
                show ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
            >
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-[#9b7a58]">
                Corporate Meetings
              </p>

              <h2
                className="mt-2 max-w-[480px] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-light leading-[1.2] text-[#143554]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                Spaces Designed for Collaboration
              </h2>

              <p className="mt-4 max-w-[600px] text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5] text-[#233235]">
                Our resort offers versatile meeting spaces tailored for conferences, workshops, and executive retreats. Each venue is equipped with modern technology, comfortable seating, and a professional atmosphere that encourages productivity and innovation. Located in a prime area, attendees benefit from easy access to amenities while enjoying a private and inspiring environment—making it the ideal destination for impactful business gatherings.
              </p>
            </div>

            {/* Lower Right Image */}
            <div
              className={`mt-8 transition-all duration-700 ease-out delay-300 ${
                show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="mx-auto w-full max-w-[520px] lg:mx-0">
                <img
                  src={hotelGarden}
                  alt="Outdoor meeting space"
                  className="h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[320px] w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
