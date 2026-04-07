import React, { useEffect } from "react";

const serviceCards = [
  {
    title: "Customizable Packages",
    image: "/home1.jpg",
    description:
      "Our team has created a range of thoughtful packages that you can choose from for your retreat or group getaway. Each of these bundles has its own unique perks and can be fully customized to meet your event's needs.",
  },
  {
    title: "Gourmet Catering",
    image: "/home2.jpg",
    description:
      "Energize mornings with a hearty breakfast, craft the ideal spread for lunch, and pamper guests with a delicious buffet or late-night bites. Our catering team will put together menus that make an impression.",
  },
  {
    title: "On-Site Activities",
    image: "/home3.jpg",
    description:
      "Enjoy guided horseback rides, exhilarating rope courses, archery challenges, s'more roasting, and more. There are endless unique and exciting team building activities for your group to choose from.",
  },
];

const meetingPoints = [
  "On-Site Audiovisual Equipment",
  "High-Speed Wi-Fi Access",
  "Versatile Meeting Rooms",
  "Various Sizes & Configurations Available",
];

const retreatPoints = [
  "A Huge Variety of Activities",
  "Indoor & Outdoor Facilities",
  "Tailored Group Packages",
  "Entertainment Upon Request",
];

export default function GroupeService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full overflow-hidden bg-[#f1f0eb] text-[#1d1d1d]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <img
          src="/home4.jpg"
          alt="Group services hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(30,24,18,0.35)]" />

        {/* soft line under header area */}
        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/45 lg:block" />

        <div className="relative z-20 mx-auto flex min-h-[72vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-16 md:pt-32 md:pb-20">
            <h1
              className="text-[52px] font-normal leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-[68px] md:text-[88px] lg:text-[104px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Group Services
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f1f0eb] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[18px] font-normal text-[#a37f58] sm:text-[20px]">
            Outdoor Event Venues
          </p>

          <h2
            className="mt-3 text-[44px] font-normal leading-[0.98] text-[#23354a] sm:text-[58px] md:text-[72px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Our Recipe For Success
          </h2>

          <p className="mx-auto mt-6 max-w-[860px] text-[18px] leading-[1.8] text-[#181818] sm:text-[19px] md:text-[20px]">
            Wonder Valley Ranch Resort offers a premier destination for both
            corporate meetings and unique group retreats, catering to business
            groups, non-profits, family reunions, and more. Our serene outdoor
            and indoor event venues combine natural beauty with an array of
            activities, providing guests the chance to focus on productivity and
            foster their connections in a uniquely inspiring setting.
          </p>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-[#f1f0eb] pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <h2
              className="text-[46px] font-normal leading-[1] text-[#23354a] sm:text-[60px] md:text-[72px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Our Services
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((item) => (
              <div key={item.title} className="group">
                <div className="overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[320px] md:h-[300px] lg:h-[320px]"
                  />
                </div>

                <div className="pt-6">
                  <h3 className="text-[22px] font-medium leading-[1.3] text-[#18394a] md:text-[24px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.85] text-[#171717] sm:text-[17px] md:text-[18px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEETINGS AT A GLANCE */}
      <section className="bg-[#f1f0eb] py-10 sm:py-14 md:py-18 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-[0.95fr_1fr] lg:gap-16 lg:px-10">
          <div className="overflow-hidden">
            <img
              src="/home1.jpg"
              alt="Meetings at a glance"
              className="h-[360px] w-full object-cover sm:h-[460px] md:h-[560px] lg:h-[700px]"
            />
          </div>

          <div className="max-w-[560px]">
            <h2
              className="text-[44px] font-normal leading-[1] text-[#23354a] sm:text-[58px] md:text-[70px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Meetings, at a Glance
            </h2>

            <ul className="mt-8 space-y-5">
              {meetingPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[17px] leading-[1.7] text-[#171717] sm:text-[18px] md:text-[19px]"
                >
                  <span className="mt-[12px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#9e7955]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RETREATS AT A GLANCE */}
      <section className="bg-[#f1f0eb] py-10 sm:py-14 md:py-18 lg:py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-10">
          <div className="order-2 max-w-[560px] lg:order-1">
            <h2
              className="text-[44px] font-normal leading-[1] text-[#23354a] sm:text-[58px] md:text-[70px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Retreats, at a Glance
            </h2>

            <ul className="mt-8 space-y-5">
              {retreatPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[17px] leading-[1.7] text-[#171717] sm:text-[18px] md:text-[19px]"
                >
                  <span className="mt-[12px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#9e7955]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 overflow-hidden lg:order-2">
            <img
              src="/home2.jpg"
              alt="Retreats at a glance"
              className="h-[360px] w-full object-cover sm:h-[460px] md:h-[560px] lg:h-[700px]"
            />
          </div>
        </div>
      </section>

      {/* SIMPLE CTA BAND */}
      <section className="bg-[#f1f0eb] pb-16 pt-6 sm:pb-20 md:pb-24">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-6 md:px-8">
          <div className="border-t border-[#e1ddd3] pt-12 text-center">
            <p className="text-[18px] text-[#a37f58] sm:text-[20px]">
              Plan Your Perfect Gathering
            </p>

            <h2
              className="mt-3 text-[42px] font-normal leading-[0.98] text-[#23354a] sm:text-[56px] md:text-[68px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Everything Your Group Needs,
              <br />
              All In One Place
            </h2>

            <p className="mx-auto mt-6 max-w-[760px] text-[17px] leading-[1.85] text-[#171717] sm:text-[18px] md:text-[19px]">
              From customizable packages and gourmet catering to team-building
              activities and fully equipped meeting spaces, our resort gives
              your guests a complete and memorable experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#a88f53] px-8 text-[15px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#947b43]"
              >
                Start Planning
              </a>

              <a
                href="/venues"
                className="inline-flex min-h-[52px] items-center justify-center border border-[#23354a]/30 px-8 text-[15px] font-medium uppercase tracking-[0.12em] text-[#23354a] transition hover:bg-[#23354a]/5"
              >
                View Venues
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}