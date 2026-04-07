import React, { useEffect, useState } from "react";

const testimonials = [
  {
    title: "Wonderful Place to Connect",
    quote:
      "Attended a retreat here. Very relaxing and quiet. Large grounds with lots to do. Wonderful for groups. Very clean and easy to walk around. The cabins are very homey and warm.",
    author: "Terry Smits Moren",
  },
  {
    title: "A Beautiful Retreat Experience",
    quote:
      "The property is peaceful, scenic, and very welcoming. It was easy for our group to gather, relax, and enjoy the experience together. Everything felt thoughtful and well organized.",
    author: "Emma Richards",
  },
  {
    title: "Perfect for Group Getaways",
    quote:
      "This resort gave us the perfect blend of comfort, nature, and group activities. The setting was beautiful, the service was kind, and the experience left everyone with great memories.",
    author: "Michael Turner",
  },
];

export default function ResortSectionSix() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const triggerAnimation = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 30);
  };

  const handleNext = () => {
    triggerAnimation();
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    triggerAnimation();
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="w-full overflow-hidden bg-[#f3f2ee] py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <style>
        {`
          @keyframes testimonialFadeUp {
            0% {
              opacity: 0;
              transform: translateY(14px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .testimonial-fade-up {
            animation: testimonialFadeUp 0.7s ease;
          }
        `}
      </style>

      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Section Title */}
        <div className="text-center">
          <h2
            className="text-[30px] font-normal leading-[1] text-[#223244] sm:text-[38px] md:text-[48px] lg:text-[56px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Our Favorite Success Stories
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="relative mt-8 hidden items-center justify-center md:flex">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#a88f53] text-white transition duration-300 hover:scale-105 hover:bg-[#947b43]"
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

          <div className="mx-auto w-full max-w-[820px] px-12 text-center">
            <div key={current} className={animate ? "testimonial-fade-up" : ""}>
              <h3 className="text-[20px] font-semibold leading-[1.35] text-[#233f43] md:text-[24px]">
                {testimonials[current].title}
              </h3>

              <p className="mx-auto mt-4 max-w-[720px] text-[17px] leading-[1.65] text-[#1f1f1f] md:text-[18px]">
                “{testimonials[current].quote}”
              </p>

              <p
                className="mt-5 text-[16px] italic text-[#2a2a2a]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                -{testimonials[current].author}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#a88f53] text-white transition duration-300 hover:scale-105 hover:bg-[#947b43]"
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

        {/* Mobile Layout */}
        <div className="mt-7 md:hidden">
          <div className="text-center">
            <div key={current} className={animate ? "testimonial-fade-up" : ""}>
              <h3 className="text-[20px] font-semibold leading-[1.35] text-[#233f43]">
                {testimonials[current].title}
              </h3>

              <p className="mx-auto mt-4 max-w-[660px] text-[15px] leading-[1.75] text-[#1f1f1f] sm:text-[16px]">
                “{testimonials[current].quote}”
              </p>

              <p
                className="mt-5 text-[15px] italic text-[#2a2a2a]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                -{testimonials[current].author}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#a88f53] text-white transition duration-300 hover:scale-105 hover:bg-[#947b43]"
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
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#a88f53] text-white transition duration-300 hover:scale-105 hover:bg-[#947b43]"
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
      </div>
    </section>
  );
}