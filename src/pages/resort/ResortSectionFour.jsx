import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../../assets/meeting-pictures/meeting-1.jpg";
import meetingHall from "../../assets/meeting-pictures/many-people.png";
import smallImageMeeting from "../../assets/meeting-pictures/business-meeting.png";

export default function ResortSectionFour() {
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
      className="relative overflow-hidden border-t-[3px] border-[#1d4448] py-6 sm:py-8 md:py-10 lg:py-12"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Meeting background"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[rgba(18,22,24,0.68)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-6 xl:grid-cols-2 xl:gap-8">
          
          {/* Left visual block */}
          <div className="relative overflow-visible">
            {/* Main image */}
            <div
              className={`relative overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all duration-700 ease-out ${
                show ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <img
                src={meetingHall}
                alt="Conference hall with attendees"
                className="h-[180px] w-full rounded-xl object-cover sm:h-[220px] md:h-[260px] lg:h-[300px] xl:h-[320px]"
              />
            </div>

            {/* Small image mobile */}
            <div
              className={`relative z-20 mx-auto -mt-8 w-[70%] max-w-[220px] overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-all duration-700 delay-200 ease-out md:hidden ${
                show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <img
                src="/home2.jpg"
                alt="Small meeting breakout space"
                className="h-[120px] w-full object-cover rounded-md"
              />
            </div>

            {/* Small image desktop */}
            <div
              className={`absolute right-[-2%] top-[52%] z-20 hidden w-[140px] -translate-y-1/2 overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-700 delay-200 ease-out md:block lg:w-[160px] xl:w-[180px] 2xl:w-[200px] ${
                show ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
            >
              <img
                src={smallImageMeeting}
                alt="Business meeting in progress"
                className="h-[140px] w-full rounded-xl object-cover lg:h-[160px] xl:h-[180px] 2xl:h-[200px]"
              />
            </div>
          </div>

          {/* Right text block */}
          <div
            className={`relative z-30 transition-all duration-700 delay-300 ease-out ${
              show ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <div className="max-w-[420px] xl:ml-auto text-center xl:text-left">
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-medium text-white/90">
                Corporate Meetings
              </p>

              <h2
                className="mt-2 text-[12px] sm:text-[17px] md:text-[20px] lg:text-[22px] font-light leading-[1.2] text-white"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                A Setting That Inspires Collaboration
              </h2>

              <p className="mt-3 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5] text-white/80">
                Our meeting venues are strategically located to provide the perfect balance of accessibility and privacy. Designed with modern amenities, flexible layouts, and advanced technology, these spaces create an inspiring environment for conferences, workshops, and executive sessions. Whether hosting a large corporate gathering or a focused team retreat, the setting ensures productivity, comfort, and meaningful collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
