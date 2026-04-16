import React, { useEffect, useRef, useState } from "react";
import hotelGarden from "../../assets/meeting-pictures/hotel-garden.png";
import meetingOne from "../../assets/meeting-pictures/many-people.png";
import meetingtwo from "../../assets/meeting-pictures/business-meeting.png";
import hotelImage from "../../assets/meeting-pictures/hotel-entrance.jpg";

const galleryImages = [
  { image: hotelImage, alt: "Meeting session at the resort" },
  { image: meetingtwo, alt: "Wonder Valley entrance view" },
  { image: meetingOne, alt: "Resort dining experience" },
  { image: hotelGarden, alt: "Horse carriage activity at the resort" },
];

export default function ResortSectionEight() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
      },
      { threshold: 0.12 }
    );
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#efeee8] py-6 sm:py-8 md:py-10 lg:py-12"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="mx-auto max-w-[1100px] px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="bg-white p-[4px] sm:p-[6px]">
          <div className="grid grid-cols-1 gap-[6px] lg:grid-cols-[1fr_1.1fr] lg:min-h-[320px]">
            
            {/* Left large image fills full height */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-out ${
                show ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <img
                src={galleryImages[0].image}
                alt={galleryImages[0].alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Right side collage */}
            <div className="grid grid-cols-1 gap-[6px] lg:grid-rows-[1fr_auto]">
              
              {/* Top right image */}
              <div
                className={`overflow-hidden transition-all duration-700 delay-100 ease-out ${
                  show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              >
                <img
                  src={galleryImages[1].image}
                  alt={galleryImages[1].alt}
                  className="h-[160px] w-full object-cover transition duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Bottom two images */}
              <div className="grid grid-cols-1 gap-[6px] sm:grid-cols-2">
                <div
                  className={`overflow-hidden transition-all duration-700 delay-200 ease-out ${
                    show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <img
                    src={galleryImages[2].image}
                    alt={galleryImages[2].alt}
                    className="h-[140px] w-full object-cover transition duration-500 hover:scale-[1.02]"
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-700 delay-300 ease-out ${
                    show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  <img
                    src={galleryImages[3].image}
                    alt={galleryImages[3].alt}
                    className="h-[140px] w-full object-cover transition duration-500 hover:scale-[1.02]"
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
