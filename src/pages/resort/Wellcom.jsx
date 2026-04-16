import React, { useEffect, useState } from "react";
import hotelEntrance from "../../assets/meeting-pictures/hotel-entrance.jpg";
import meetingOne from "../../assets/meeting-pictures/meeting-1.jpg";
import hotelPhoto from "../../assets/meeting-pictures/hotel-photo.png";
import meetingGarden from "../../assets/meeting-pictures/hotel-garden.png";

const slides = [
  {
    image: hotelEntrance,
    eyebrow: "Corporate Meetings",
    title: ["Host Productive", "Sessions In", "Luxury"],
  },
  {
    image: meetingOne,
    eyebrow: "Conferences & Seminars",
    title: ["Bring Teams", "Together For", "Innovation"],
  },
  {
    image: hotelPhoto,
    eyebrow: "Executive Retreats",
    title: ["Strategize In", "Comfort And", "Focus"],
  },
  {
    image: meetingGarden,
    eyebrow: "Networking Events",
    title: ["Connect With", "Colleagues And", "Partners"],
  },
];

export default function Wellcom() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[calc(100vh-56px)] overflow-hidden">
      <style>
        {`
          @keyframes heroFadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes heroSlowZoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.04); }
          }
          .hero-copy-animate { animation: heroFadeUp 0.7s ease forwards; }
          .hero-bg-animate { animation: heroSlowZoom 6s linear forwards; }
        `}
      </style>

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
                index === current ? "hero-bg-animate" : ""
              }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/25" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-56px)] max-w-[1400px] items-center px-4 pt-[120px] pb-12 sm:px-6 md:px-8 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          
          {/* Left Text */}
          <div key={`copy-${current}`} className="hero-copy-animate flex min-h-[240px] items-end lg:min-h-[360px]">
            <div className="max-w-[600px] pb-2 text-center lg:pb-6 lg:text-left">
              <p className="mb-3 text-[11px] sm:text-[12px] md:text-[13px] font-medium uppercase tracking-[0.14em] text-white/85">
                {slides[current].eyebrow}
              </p>
              <h1 className="text-[12px] mb-10 sm:text-[15px] md:text-[20px] lg:text-[30px] font-semibold leading-[1.05] tracking-[-0.03em] text-white drop-shadow">
                {slides[current].title[0]} {slides[current].title[1]} {slides[current].title[2]}
              </h1>
              {/* Mobile Start Planning button only */}
              <div className="mt-5 lg:hidden">
                <a
                  href="/start-planning"
                  className="inline-flex h-[40px] items-center justify-center bg-[#a99258] px-6 text-[12px] font-medium uppercase tracking-[0.12em] text-white transition hover:opacity-90"
                >
                  Start Planning
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card - desktop only */}
          <div className="hidden justify-center lg:flex lg:justify-end">
            <div className="w-full rounded-md max-w-[480px] bg-white/85 p-5 shadow backdrop-blur-sm sm:p-6 md:p-6 lg:p-7">
              <h2 className="text-center text-[22px] sm:text-[26px] md:text-[30px] font-light leading-none text-[#1c3440]">
                Start Planning
              </h2>
              <form className="mt-5 space-y-3">
                <input type="text" placeholder="First Name *" className="h-[38px] w-full border border-[#687174] bg-transparent px-3 text-[13px] text-[#324047] placeholder:text-[#324047]" />
                <input type="text" placeholder="Last Name *" className="h-[38px] w-full border border-[#687174] bg-transparent px-3 text-[13px] text-[#324047] placeholder:text-[#324047]" />
                <input type="email" placeholder="Email *" className="h-[38px] w-full border border-[#687174] bg-transparent px-3 text-[13px] text-[#324047] placeholder:text-[#324047]" />
                <input type="text" placeholder="Phone Number *" className="h-[38px] w-full border border-[#687174] bg-transparent px-3 text-[13px] text-[#324047] placeholder:text-[#324047]" />
                <input type="text" placeholder="Company *" className="h-[38px] w-full border border-[#687174] bg-transparent px-3 text-[13px] text-[#324047] placeholder:text-[#324047]" />
                <div className="space-y-2 pt-1 text-[12px] text-[#37454a]">
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-0.5 h-3 w-3 border border-[#687174] checked:bg-[#a99258]" />
                    <span>I agree to the Privacy Policy.</span>
                  </label>
                  <label className="flex items-start gap-2">
                    <input type="checkbox" className="mt-0.5 h-3 w-3 border border-[#687174] checked:bg-[#a99258]" />
                    <span>Yes, contact me regarding my request.</span>
                  </label>
                </div>
                <div className="pt-2 text-center">
                  <a href="/start-planning" className="inline-flex min-w-[140px] items-center justify-center bg-[#a99258] px-6 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-white rounded-md transition hover:opacity-90">
                    Continue
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button onClick={goPrev} className="absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 bg-black/10 text-[22px] text-white backdrop-blur-sm transition hover:bg-black/25 md:flex md:left-8">
        ‹
      </button>
      <button onClick={goNext} className="absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 bg-black/10 text-[22px] text-white backdrop-blur-sm transition hover:bg-black/25 md:flex md:right-8">
        ›
      </button>
    </section>
  );
}
