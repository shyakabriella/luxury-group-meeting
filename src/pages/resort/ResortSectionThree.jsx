import React, { useEffect, useRef, useState } from "react";
import meetingOne from "../../assets/meeting-pictures/meeting-1.jpg";
import meetingTwo from "../../assets/meeting-pictures/meeting-2.jpg";
import meetingThree from "../../assets/meeting-pictures/meeting-3.JPG";

const slides = [
  {
    id: "01",
    eyebrow: "Why Choose Luxury?",
    title: "Easy to Plan",
    description:
      "Our seamless event planning experience includes versatile venue options, on-site catering, bar service, conference suites, and overnight accommodations—all in one place, expertly managed by our team.",
    image: meetingThree,
  },
  {
    id: "02",
    eyebrow: "Why Choose Luxury?",
    title: "Easy to Enjoy",
    description:
      "From group retreats and business meetings to unforgettable celebrations, our resort offers flexible spaces, beautiful surroundings, and a warm atmosphere your guests will truly enjoy.",
    image: meetingOne,
  },
  {
    id: "03",
    eyebrow: "Why Choose Luxury?",
    title: "Easy to Remember",
    description:
      "Create meaningful experiences with elegant venues, comfortable accommodations, and outdoor moments that leave a lasting impression on every member of your group.",
    image: meetingTwo,
  },
];

export default function ResortSectionThree() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[current];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/home1.jpg" alt="Resort background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[rgba(245,240,233,0.72)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          className={`relative transition-all duration-700 ease-out ${
            show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="grid min-h-[400px] grid-cols-1 bg-[#f8f8f6] shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:min-h-[460px] lg:grid-cols-[1fr_1fr]">
            
            {/* Left panel */}
            <div className="relative flex items-center px-6 py-8 sm:px-8 md:px-10 lg:px-12">
              <div className="max-w-[380px] text-center lg:text-left">
                <p className="text-[13px] sm:text-[14px] md:text-[15px] font-medium text-[#a18467]">
                  {activeSlide.eyebrow}
                </p>

                <h2
                  className="mt-2 text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-light leading-[1.2] text-[#1d3146]"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                >
                  {activeSlide.title}
                </h2>

                <p className="mt-4 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.5] text-[#343434]">
                  {activeSlide.description}
                </p>
              </div>

              {/* Arrows */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 sm:bottom-8 sm:left-8 md:left-10">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-full">
              <img src={activeSlide.image} alt={activeSlide.title} className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Big number */}
          <div
            className="pointer-events-none absolute bottom-[-20px] right-[8px] text-[70px] sm:text-[90px] md:text-[110px] lg:text-[130px] font-light leading-none text-white/95"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {activeSlide.id}
          </div>
        </div>
      </div>
    </section>
  );
}
