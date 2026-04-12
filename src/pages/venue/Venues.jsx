import React, { useEffect, useState } from "react";

const amenities = [
  "34,000+ Square Feet of Event Space",
  "Gourmet Catering",
  "Customizable Packages",
  "Theater Seating for up to 350",
  "Guest Room Blocks",
  "Unique Team Building Activities",
  "30 Minutes from Fresno/Yosemite International Airport",
  "Exclusive Ranch Access",
  "Entertainment Upon Request",
];

const venueCards = [
  {
    title: "Grand Meeting Spaces",
    image: "/home1.jpg",
    description:
      "Host conferences, retreats, workshops, and executive gatherings in flexible spaces designed for comfort, focus, and unforgettable experiences.",
    features: ["Flexible layouts", "Audio/visual support", "Ideal for corporate groups"],
  },
  {
    title: "Outdoor Event Venues",
    image: "/home2.jpg",
    description:
      "Bring your event outdoors with scenic ranch views, fresh air, and beautiful open settings that feel private, peaceful, and inspiring.",
    features: ["Garden-style settings", "Natural surroundings", "Perfect for receptions"],
  },
  {
    title: "Dining & Catering",
    image: "/home3.jpg",
    description:
      "Enjoy delicious catering options and memorable dining experiences that make your event easier to plan and more enjoyable for every guest.",
    features: ["Chef-prepared meals", "Group dining options", "Custom menus available"],
  },
  {
    title: "Team Activities & Experiences",
    image: "/home4.jpg",
    description:
      "Add value to your gathering with team-building activities and group experiences that help guests connect, relax, and create lasting memories.",
    features: ["Adventure options", "Group bonding", "Fun and memorable"],
  },
];

const galleryImages = [
  "/home1.jpg",
  "/home2.jpg",
  "/home3.jpg",
  "/home4.jpg",
];

const testimonials = [
  {
    title: "Wonderful Place to Connect",
    quote:
      "Attended a retreat here. Very relaxing and quiet. Large grounds with lots to do. Wonderful for groups. Very clean and easy to walk around. The cabins are very homey and warm.",
    author: "Terry Smits Moren",
  },
  {
    title: "Beautiful Venue for Gatherings",
    quote:
      "Everything felt peaceful, organized, and welcoming. Our group had a great experience, and the setting made the event feel extra special from beginning to end.",
    author: "Emma Richards",
  },
  {
    title: "Perfect for Business Retreats",
    quote:
      "The resort gave us a strong balance of comfort, beauty, and functionality. It was easy to gather, easy to plan, and enjoyable for the whole team.",
    author: "Michael Turner",
  },
];

function ArrowButton({ direction = "left", onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
      className={`flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#a88f53] text-white transition duration-300 hover:scale-105 hover:bg-[#947b43] ${className}`}
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

function VenueCard({ item }) {
  return (
    <div className="overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-[240px] w-full object-cover transition duration-700 hover:scale-[1.04]"
        />
      </div>

      <div className="p-6 md:p-7">
        <h3
          className="text-[30px] leading-[1] text-[#203549] md:text-[34px]"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          {item.title}
        </h3>

        <p className="mt-4 text-[16px] leading-[1.85] text-[#343434]">
          {item.description}
        </p>

        <ul className="mt-5 space-y-3">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-[15px] text-[#222]">
              <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#a88f53]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Venues() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div
      className="w-full overflow-hidden bg-[#f3f2ee] text-[#1f1f1f]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src="/home1.jpg"
          alt="Luxury resort venue"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(18,22,24,0.48)]" />

        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-[1450px] items-center px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-[760px] pt-16 pb-16 md:pt-24 md:pb-24">
            <p className="text-[14px] uppercase tracking-[0.22em] text-white/85 sm:text-[15px]">
              Wonder Valley Ranch Resort
            </p>

            <h1
              className="mt-4 text-[52px] leading-[0.92] text-white sm:text-[66px] md:text-[86px] lg:text-[104px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Venues
            </h1>

            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.9] text-white/88 sm:text-[18px] md:text-[20px]">
              Discover inspiring indoor and outdoor venues for corporate retreats,
              private gatherings, conferences, celebrations, and unforgettable
              group experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center bg-[#a88f53] px-8 text-[15px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#947b43]"
              >
                Start Planning
              </a>

              <a
                href="/gallery"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/60 px-8 text-[15px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#efeee8] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] grid-cols-1 gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:px-12">
          <div className="overflow-hidden">
            <img
              src="/home2.jpg"
              alt="Venue space"
              className="h-[340px] w-full object-cover sm:h-[440px] md:h-[580px] lg:h-full"
            />
          </div>

          <div className="flex items-center">
            <div className="max-w-[620px]">
              <p className="text-[16px] text-[#a18467] sm:text-[18px]">
                Corporate Retreats & Group Events
              </p>

              <h2
                className="mt-3 text-[44px] leading-[0.95] text-[#183652] sm:text-[56px] md:text-[72px]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                Venues That Make
                <br />
                Every Event Special
              </h2>

              <p className="mt-6 text-[17px] leading-[1.9] text-[#2d2d2d] sm:text-[18px] md:text-[19px]">
                Whether you are planning a business conference, leadership
                retreat, family reunion, or celebration, our resort offers
                versatile spaces surrounded by natural beauty. Each venue is
                designed to give your guests comfort, flexibility, and a strong
                sense of place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-[#f3f2ee] py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <span className="h-px flex-1 bg-[#b59a74]" />
            <h2
              className="shrink-0 text-center text-[30px] text-[#203549] sm:text-[40px] md:text-[52px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Our Meeting Amenities
            </h2>
            <span className="h-px flex-1 bg-[#b59a74]" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-3 sm:mt-12 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16">
            {[0, 1, 2].map((columnIndex) => (
              <ul key={columnIndex} className="space-y-4 px-2 md:px-4">
                {amenities
                  .slice(columnIndex * 3, columnIndex * 3 + 3)
                  .map((item) => (
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

      {/* VENUE CARDS */}
      <section className="bg-[#efeee8] py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-[16px] text-[#a18467] sm:text-[18px]">
              Find The Right Setting
            </p>

            <h2
              className="mt-3 text-[42px] leading-[0.98] text-[#203549] sm:text-[54px] md:text-[70px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Spaces Designed For
              <br />
              Connection & Experience
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
            {venueCards.map((item) => (
              <VenueCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION SPLIT */}
      <section className="relative overflow-hidden border-t-[3px] border-[#1d4448] py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="absolute inset-0">
          <img
            src="/home4.jpg"
            alt="Wonder Valley background"
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-[rgba(18,22,24,0.68)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2 xl:gap-8">
            <div className="relative overflow-visible">
              <div className="relative overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                <img
                  src="/home1.jpg"
                  alt="Aerial view of Wonder Valley"
                  className="h-[240px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[460px]"
                />
              </div>

              <div className="absolute right-[-2%] top-[52%] z-20 hidden w-[180px] -translate-y-1/2 overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.38)] md:block lg:w-[220px] xl:w-[260px] 2xl:w-[300px]">
                <img
                  src="/home2.jpg"
                  alt="Wonder Valley scenic setting"
                  className="h-[180px] w-full object-cover lg:h-[220px] xl:h-[250px] 2xl:h-[280px]"
                />
              </div>
            </div>

            <div className="relative z-30">
              <div className="max-w-[470px] xl:ml-auto">
                <p className="text-[16px] text-white/92 sm:text-[18px]">
                  Location
                </p>

                <h2
                  className="mt-2 text-[34px] leading-[0.96] text-white sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[66px]"
                  style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
                >
                  A Setting That
                  <br />
                  Inspires Wonder
                </h2>

                <p className="mt-5 text-[15px] leading-[1.8] text-white/82 sm:text-[16px] md:text-[17px] lg:text-[18px]">
                  Our Luxury Apartments are ideally located in a prime and well-connected neighborhood, offering residents the perfect balance between city convenience and peaceful living. This setting provides individuals and families with a comfortable, private environment, enhanced by modern amenities, spacious designs, and thoughtfully crafted living spaces that make everyday life feel effortless and elevated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY COLLAGE */}
      <section className="overflow-hidden bg-[#efeee8] py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[16px] text-[#a18467] sm:text-[18px]">
              Explore More
            </p>

            <h2
              className="mt-3 text-[40px] leading-[1] text-[#203549] sm:text-[52px] md:text-[64px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              A Look At The Experience
            </h2>
          </div>

          <div className="mt-8 bg-white p-[6px] sm:p-[8px]">
            <div className="grid grid-cols-1 gap-[8px] lg:grid-cols-[1.05fr_1.2fr]">
              <div className="overflow-hidden">
                <img
                  src={galleryImages[0]}
                  alt="Gallery one"
                  className="h-[300px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px] md:h-[560px] lg:h-[720px]"
                />
              </div>

              <div className="grid grid-cols-1 gap-[8px] lg:grid-rows-[1fr_auto]">
                <div className="overflow-hidden">
                  <img
                    src={galleryImages[1]}
                    alt="Gallery two"
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[280px] md:h-[340px] lg:h-[372px]"
                  />
                </div>

                <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-2">
                  <div className="overflow-hidden">
                    <img
                      src={galleryImages[2]}
                      alt="Gallery three"
                      className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[250px] md:h-[290px] lg:h-[340px]"
                    />
                  </div>

                  <div className="overflow-hidden">
                    <img
                      src={galleryImages[3]}
                      alt="Gallery four"
                      className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[250px] md:h-[290px] lg:h-[340px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full overflow-hidden bg-[#f3f2ee] py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <h2
              className="text-[30px] leading-[1] text-[#223244] sm:text-[38px] md:text-[48px] lg:text-[56px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Our Favorite Success Stories
            </h2>
          </div>

          <div className="relative mt-8 hidden items-center justify-center md:flex">
            <ArrowButton direction="left" onClick={handlePrevTestimonial} className="absolute left-0" />

            <div className="mx-auto w-full max-w-[820px] px-12 text-center">
              <h3 className="text-[20px] font-semibold leading-[1.35] text-[#233f43] md:text-[24px]">
                {testimonials[currentTestimonial].title}
              </h3>

              <p className="mx-auto mt-4 max-w-[720px] text-[17px] leading-[1.65] text-[#1f1f1f] md:text-[18px]">
                “{testimonials[currentTestimonial].quote}”
              </p>

              <p
                className="mt-5 text-[16px] italic text-[#2a2a2a]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                -{testimonials[currentTestimonial].author}
              </p>
            </div>

            <ArrowButton direction="right" onClick={handleNextTestimonial} className="absolute right-0" />
          </div>

          <div className="mt-7 md:hidden">
            <div className="text-center">
              <h3 className="text-[20px] font-semibold leading-[1.35] text-[#233f43]">
                {testimonials[currentTestimonial].title}
              </h3>

              <p className="mx-auto mt-4 max-w-[660px] text-[15px] leading-[1.75] text-[#1f1f1f] sm:text-[16px]">
                “{testimonials[currentTestimonial].quote}”
              </p>

              <p
                className="mt-5 text-[15px] italic text-[#2a2a2a]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                -{testimonials[currentTestimonial].author}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <ArrowButton direction="left" onClick={handlePrevTestimonial} />
              <ArrowButton direction="right" onClick={handleNextTestimonial} />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#203549] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1100px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[16px] text-[#d2bd93] sm:text-[18px]">
            Ready To Host Something Memorable?
          </p>

          <h2
            className="mt-3 text-[40px] leading-[0.98] text-white sm:text-[54px] md:text-[68px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Let’s Find The Perfect
            <br />
            Venue For Your Group
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[16px] leading-[1.9] text-white/82 sm:text-[18px]">
            From large conferences to intimate retreats, our team is here to
            help you plan a smooth and beautiful event experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex min-h-[52px] items-center justify-center bg-[#a88f53] px-8 text-[15px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-[#947b43]"
            >
              Contact Us
            </a>

            <a
              href="/gallery"
              className="inline-flex min-h-[52px] items-center justify-center border border-white/50 px-8 text-[15px] font-medium uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
            >
              See More Photos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}