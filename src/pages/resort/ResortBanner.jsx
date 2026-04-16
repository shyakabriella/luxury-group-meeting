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
    <section className="w-full bg-[#f3f2ee] py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Title with side lines */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <span className="h-px flex-1 bg-[#b59a74]" />
          <h2
            className="shrink-0 text-center text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-light leading-none text-[#143554]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Our Meeting Amenities
          </h2>
          <span className="h-px flex-1 bg-[#b59a74]" />
        </div>

        {/* Amenities list */}
        <div className="mt-8 grid grid-cols-1 gap-y-2 sm:mt-10 md:mt-12 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {amenities.map((column, columnIndex) => (
            <ul
              key={columnIndex}
              className="space-y-3 px-2 md:px-4 lg:px-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {column.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] md:text-[15px] font-normal leading-[1.5] text-[#161616]"
                >
                  <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[#9b7a58]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-10 sm:mt-12 md:mt-14">
          <span className="block h-px w-full bg-[#b59a74]" />
        </div>
      </div>
    </section>
  );
}
