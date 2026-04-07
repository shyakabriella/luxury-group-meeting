import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: "01",
    eyebrow: "Why Choose Wonder Valley?",
    title: "Easy to Plan",
    description:
      "Our seamless event planning experience includes versatile venue options, on-site catering, bar service, conference suites, and overnight accommodations—all in one place, expertly managed by our team.",
    image: "/home3.jpg",
  },
  {
    id: "02",
    eyebrow: "Why Choose Wonder Valley?",
    title: "Easy to Enjoy",
    description:
      "From group retreats and business meetings to unforgettable celebrations, our resort offers flexible spaces, beautiful surroundings, and a warm atmosphere your guests will truly enjoy.",
    image: "/home2.jpg",
  },
  {
    id: "03",
    eyebrow: "Why Choose Wonder Valley?",
    title: "Easy to Remember",
    description:
      "Create meaningful experiences with elegant venues, comfortable accommodations, and outdoor moments that leave a lasting impression on every member of your group.",
    image: "/home4.jpg",
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[current];

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/home1.jpg"
          alt="Resort background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(245,240,233,0.72)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div
          className={`relative overflow-visible transition-all duration-1000 ease-out ${
            show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="grid min-h-[560px] grid-cols-1 bg-[#f8f8f6] shadow-[0_15px_45px_rgba(0,0,0,0.08)] lg:min-h-[620px] lg:grid-cols-[1fr_1.02fr]">
            {/* Left panel */}
            <div className="relative flex items-center px-6 py-10 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <div className="max-w-[430px]">
                <p className="text-[16px] font-normal leading-[1.5] text-[#a18467] sm:text-[18px] md:text-[20px]">
                  {activeSlide.eyebrow}
                </p>

                <h2
                  className="mt-3 text-[44px] font-normal leading-[0.95] text-[#1d3146] sm:text-[54px] md:text-[62px] lg:text-[66px] xl:text-[72px]"
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                  }}
                >
                  {activeSlide.title}
                </h2>

                <p className="mt-7 text-[17px] leading-[1.9] text-[#343434] sm:text-[18px] md:text-[19px]">
                  {activeSlide.description}
                </p>
              </div>

              {/* arrows */}
              <div className="absolute bottom-8 left-6 flex items-center gap-4 sm:bottom-10 sm:left-10 md:left-14 lg:bottom-12 lg:left-16 xl:left-20">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
                  aria-label="Previous slide"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M15 18l-6-6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
                  aria-label="Next slide"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-full">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Big number */}
          <div
            className="pointer-events-none absolute bottom-[-30px] right-[8px] text-[110px] font-light leading-none text-white/95 sm:bottom-[-36px] sm:right-[16px] sm:text-[130px] md:text-[150px] lg:bottom-[-40px] lg:right-[-8px] lg:text-[170px] xl:text-[190px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {activeSlide.id}
          </div>
        </div>
      </div>
    </section>
  );
}