import React, { useEffect, useState } from "react";

const guestRoomImages = [
  "/home1.jpg",
  "/home2.jpg",
  "/home3.jpg",
];

const cottageImages = [
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
];

const houseImages = [
  "/home3.jpg",
  "/home4.jpg",
  "/home1.jpg",
];

const restfulEssentials = [
  [
    "Heating & Air-Conditioning",
    "Satellite TV",
  ],
  [
    "In-Room Coffee Service",
    "Iron & Ironing Board",
  ],
  [
    "Free Wi-Fi Access",
    "Hair Dryer",
  ],
];

function CircleArrow({ direction = "left", onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous image" : "Next image"}
      className={`flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#a88f53] text-white transition duration-300 hover:scale-105 hover:bg-[#947b43] md:h-[52px] md:w-[52px] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        {direction === "left" ? (
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 6l6 6-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

function RoomCarouselSection({
  title,
  subtitle,
  description,
  images,
  reverse = false,
}) {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#f1f0eb] py-10 sm:py-14 md:py-16 lg:py-18">
      <div
        className={`mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:px-8 lg:gap-16 lg:px-10 ${
          reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
        }`}
      >
        {/* Text */}
        <div className={`${reverse ? "order-2 lg:order-1" : "order-2"} max-w-[560px]`}>
          <h2
            className="text-[46px] font-normal leading-[1] text-[#23354a] sm:text-[60px] md:text-[72px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {title}
          </h2>

          <p className="mt-6 text-[18px] font-semibold leading-[1.5] text-[#113a54] sm:text-[19px] md:text-[20px]">
            {subtitle}
          </p>

          <p className="mt-6 text-[17px] leading-[1.8] text-[#171717] sm:text-[18px] md:text-[19px]">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className={`${reverse ? "order-1 lg:order-2" : "order-1"} relative`}>
          <div className="relative overflow-hidden bg-white">
            <img
              src={images[current]}
              alt={title}
              className="h-[320px] w-full object-cover transition-all duration-700 sm:h-[420px] md:h-[520px] lg:h-[620px]"
            />
          </div>

          <CircleArrow
            direction="left"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 md:left-6"
          />

          <CircleArrow
            direction="right"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 md:right-6"
          />
        </div>
      </div>
    </section>
  );
}

export default function RoomBlock() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full overflow-hidden bg-[#f1f0eb] text-[#171717]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <img
          src="/home4.jpg"
          alt="Room blocks hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(30,24,18,0.30)]" />

        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/45 lg:block" />

        <div className="relative z-20 mx-auto flex min-h-[72vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-16 md:pt-32 md:pb-20">
            <h1
              className="text-[54px] font-normal leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-[70px] md:text-[90px] lg:text-[106px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Room Blocks
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f1f0eb] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[18px] font-normal text-[#a37f58] sm:text-[20px]">
            Meeting Rooms in California
          </p>

          <h2
            className="mt-3 text-[46px] font-normal leading-[0.98] text-[#23354a] sm:text-[60px] md:text-[74px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Room for Everyone
          </h2>

          <p className="mx-auto mt-6 max-w-[860px] text-[18px] leading-[1.8] text-[#181818] sm:text-[19px] md:text-[20px]">
            When planning a group or corporate retreat, comfort is key. Choose
            from 68 homelike rooms clustered throughout our property with full
            access to included activities, ranging from country cottages to
            resort-style spaces overlooking serene California landscapes. For
            larger groups, 52 of the rooms can be converted to family- or
            dormitory-style spaces.
          </p>
        </div>
      </section>

      {/* GUEST ROOMS */}
      <RoomCarouselSection
        title="Guest Rooms"
        subtitle="1 or 2 King | Sleeps 2-6"
        description="Our guest rooms are equipped with king-size beds and offer classic comfort. Most are located poolside or with expansive views of the surrounding natural scenery, and larger guest rooms with two king-sized beds come furnished with added amenities like dual sinks, microwaves, mini-fridges, and walk-in closets to ensure a pleasant stay."
        images={guestRoomImages}
      />

      {/* COTTAGES */}
      <RoomCarouselSection
        title="Cottages"
        subtitle="1 King | Sleeps 2"
        description="Ideal for attendees seeking peace and quiet, our cottages provide a more private setting. Each cottage features a mini-fridge and porch, with tranquil views of the surrounding scenery."
        images={cottageImages}
        reverse
      />

      {/* HOUSES */}
      <RoomCarouselSection
        title="Houses"
        subtitle="Sleeps 6-20"
        description="For larger delegations or close-knit groups, these accommodations offer added space to stretch out and call home. Options include the three-bedroom Chairman's Suite which features a wraparound porch, kitchenette, and dining room or the larger Mill Creek Suite, with five bedrooms, a full kitchen, and a laundry room."
        images={houseImages}
      />

      {/* RESTFUL ESSENTIALS */}
      <section className="bg-[#f3f2ee] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <span className="h-px flex-1 bg-[#b59a74]" />
            <h2
              className="shrink-0 text-center text-[34px] font-normal leading-none text-[#23354a] sm:text-[46px] md:text-[60px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Restful Essentials
            </h2>
            <span className="h-px flex-1 bg-[#b59a74]" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-3 sm:mt-12 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16">
            {restfulEssentials.map((column, index) => (
              <ul key={index} className="space-y-4 px-2 md:px-4">
                {column.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] leading-[1.7] text-[#161616] sm:text-[17px] md:text-[18px]"
                  >
                    <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#9b7a58]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-12">
            <span className="block h-px w-full bg-[#b59a74]" />
          </div>
        </div>
      </section>
    </div>
  );
}