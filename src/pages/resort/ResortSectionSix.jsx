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
    }, 6000); // slightly faster cycle
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
      className="w-full overflow-hidden bg-[#f3f2ee] py-6 sm:py-8 md:py-10 lg:py-12"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <style>
        {`
          @keyframes testimonialFadeUp {
            0% { opacity: 0; transform: translateY(12px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .testimonial-fade-up { animation: testimonialFadeUp 0.6s ease; }
        `}
      </style>

      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Title */}
        <div className="text-center">
          <h2
            className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-light leading-[1.2] text-[#223244]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Our Favorite Success Stories
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="relative mt-6 hidden items-center justify-center md:flex">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
          >
            ‹
          </button>

          <div className="mx-auto w-full max-w-[700px] px-8 text-center">
            <div key={current} className={animate ? "testimonial-fade-up" : ""}>
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3] text-[#233f43]">
                {testimonials[current].title}
              </h3>

              <p className="mx-auto mt-3 max-w-[600px] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] text-[#1f1f1f]">
                “{testimonials[current].quote}”
              </p>

              <p
                className="mt-4 text-[13px] italic text-[#2a2a2a]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                -{testimonials[current].author}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
          >
            ›
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="mt-6 md:hidden">
          <div className="text-center">
            <div key={current} className={animate ? "testimonial-fade-up" : ""}>
              <h3 className="text-[16px] font-semibold leading-[1.3] text-[#233f43]">
                {testimonials[current].title}
              </h3>

              <p className="mx-auto mt-3 max-w-[500px] text-[13px] sm:text-[14px] leading-[1.6] text-[#1f1f1f]">
                “{testimonials[current].quote}”
              </p>

              <p
                className="mt-4 text-[13px] italic text-[#2a2a2a]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                -{testimonials[current].author}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43]"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
