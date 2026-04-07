import React from "react";

const amenities = [
  [
    "34,000+ Square Feet of Event Space",
    "Gourmet Catering",
    "Customizable Packages",
  ],
  [
    "Theater Seating for up to 350",
    "Guest Room Blocks",
    "Unique Team Building Activities",
  ],
  [
    "30 Minutes from Fresno/Yosemite International Airport",
    "Exclusive Ranch Access",
    "Entertainment Upon Request",
  ],
];

export default function ResortBanner() {
  return (
    <section className="w-full bg-[#f3f2ee] py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-10 lg:px-12">
        {/* Title with side lines */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <span className="h-px flex-1 bg-[#b59a74]" />
          <h2
            className="shrink-0 text-center text-[30px] font-normal leading-none text-[#143554] sm:text-[38px] md:text-[50px] lg:text-[54px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Our Meeting Amenities
          </h2>
          <span className="h-px flex-1 bg-[#b59a74]" />
        </div>

        {/* Amenities list */}
        <div className="mt-10 grid grid-cols-1 gap-y-2 sm:mt-12 md:mt-14 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16">
          {amenities.map((column, columnIndex) => (
            <ul
              key={columnIndex}
              className="space-y-4 px-2 text-left md:px-6 lg:px-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {column.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[16px] font-normal leading-[1.7] text-[#161616] sm:text-[17px] md:text-[18px]"
                >
                  <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#9b7a58]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <span className="block h-px w-full bg-[#b59a74]" />
        </div>
      </div>
    </section>
  );
}