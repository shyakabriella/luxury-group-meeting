import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/home1.jpg",
    eyebrow: "Groups & Meetings",
    title: ["Disconnect And", "Reconnect In", "Fresno"],
  },
  {
    image: "/home2.jpg",
    eyebrow: "Weddings & Events",
    title: ["Celebrate Big", "Moments With", "Us"],
  },
  {
    image: "/home3.jpg",
    eyebrow: "Retreats & Gatherings",
    title: ["Reconnect In", "Nature And", "Comfort"],
  },
  {
    image: "/home4.jpg",
    eyebrow: "Luxury Experiences",
    title: ["Plan Your", "Next Memorable", "Escape"],
  },
];

export default function Wellcom() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[calc(100vh-40px)] overflow-hidden">
      <style>
        {`
          @keyframes heroFadeUp {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroSlowZoom {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.06);
            }
          }

          .hero-copy-animate {
            animation: heroFadeUp 0.9s ease forwards;
          }

          .hero-bg-animate {
            animation: heroSlowZoom 7s linear forwards;
          }
        `}
      </style>

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
                index === current ? "hero-bg-animate" : ""
              }`}
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/38" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/18 to-black/30" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-40px)] max-w-[1800px] items-center px-4 pb-8 pt-[110px] sm:px-6 sm:pt-[120px] md:px-8 md:pt-[130px] lg:px-10 lg:pt-[145px] xl:px-14">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Left Text */}
          <div
            key={`copy-${current}`}
            className="hero-copy-animate flex min-h-[280px] items-end lg:min-h-[520px]"
          >
            <div className="max-w-[760px] pb-2 sm:pb-4 md:pb-6 lg:pb-8">
              <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.18em] text-white/85 md:mb-6 md:text-[16px]">
                {slides[current].eyebrow}
              </p>

              <h1 className="text-[42px] font-semibold leading-[0.95] tracking-[-0.04em] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] sm:text-[58px] md:text-[76px] lg:text-[90px] xl:text-[104px]">
                {slides[current].title[0]}
                <br />
                {slides[current].title[1]}
                <br />
                {slides[current].title[2]}
              </h1>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[600px] bg-white/82 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-[4px] sm:p-6 md:p-7 lg:p-8">
              <h2 className="text-center text-[30px] font-light leading-none tracking-[-0.03em] text-[#1c3440] sm:text-[36px] md:text-[42px]">
                Start Planning
              </h2>

              <form className="mt-6 space-y-4 md:mt-7">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="h-[46px] w-full border border-[#687174] bg-transparent px-4 text-[15px] text-[#324047] outline-none placeholder:text-[#324047]"
                />

                <input
                  type="text"
                  placeholder="Last Name *"
                  className="h-[46px] w-full border border-[#687174] bg-transparent px-4 text-[15px] text-[#324047] outline-none placeholder:text-[#324047]"
                />

                <input
                  type="email"
                  placeholder="Email *"
                  className="h-[46px] w-full border border-[#687174] bg-transparent px-4 text-[15px] text-[#324047] outline-none placeholder:text-[#324047]"
                />

                <input
                  type="text"
                  placeholder="Phone Number *"
                  className="h-[46px] w-full border border-[#687174] bg-transparent px-4 text-[15px] text-[#324047] outline-none placeholder:text-[#324047]"
                />

                <input
                  type="text"
                  placeholder="Company *"
                  className="h-[46px] w-full border border-[#687174] bg-transparent px-4 text-[15px] text-[#324047] outline-none placeholder:text-[#324047]"
                />

                <div className="space-y-3 pt-1">
                  <label className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#37454a]">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0 appearance-none border border-[#687174] bg-transparent checked:bg-[#a99258]"
                    />
                    <span>
                      I have read and agree to the{" "}
                      <span className="font-semibold">Privacy Policy.</span>
                    </span>
                  </label>

                  <label className="flex items-start gap-3 text-[14px] leading-[1.45] text-[#37454a]">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0 appearance-none border border-[#687174] bg-transparent checked:bg-[#a99258]"
                    />
                    <span>
                      Absolutely, I&apos;d like to be contacted regarding my
                      request.
                    </span>
                  </label>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="min-w-[190px] bg-[#a99258] px-8 py-3 text-[15px] font-medium uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 bg-black/10 text-[30px] text-white backdrop-blur-sm transition hover:bg-black/25 md:left-8 md:h-14 md:w-14"
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 bg-black/10 text-[30px] text-white backdrop-blur-sm transition hover:bg-black/25 md:right-8 md:h-14 md:w-14"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}