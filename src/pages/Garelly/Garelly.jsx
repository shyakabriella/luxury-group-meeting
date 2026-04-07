import React, { useEffect, useState } from "react";

const galleryImages = [
  { src: "/home1.jpg", alt: "Wonder Valley entrance" },
  { src: "/home2.jpg", alt: "Elegant indoor event venue" },
  { src: "/home3.jpg", alt: "Horse carriage experience" },
  { src: "/home4.jpg", alt: "Business meeting session" },

  { src: "/home2.jpg", alt: "Guests enjoying food together" },
  { src: "/home3.jpg", alt: "Outdoor adventure activity" },
  { src: "/home4.jpg", alt: "Chef plating gourmet food" },
  { src: "/home1.jpg", alt: "Guests celebrating with wine" },

  { src: "/home3.jpg", alt: "Horseback trail activity" },
  { src: "/home4.jpg", alt: "Cocktail service moment" },
  { src: "/home1.jpg", alt: "Conference room gathering" },
  { src: "/home2.jpg", alt: "Group walking outdoors" },

  { src: "/home4.jpg", alt: "Presentation session" },
  { src: "/home1.jpg", alt: "Campfire and wine gathering" },
  { src: "/home2.jpg", alt: "Relaxed guest experience" },
];

export default function Garelly() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const goNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryImages.length
    );
  };

  const goPrev = () => {
    setSelectedIndex((prev) =>
      prev === null
        ? galleryImages.length - 1
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div
      className="w-full overflow-hidden bg-[#f1f0eb]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[62vh] overflow-hidden">
        <img
          src="/home4.jpg"
          alt="Gallery hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(22,18,15,0.38)]" />

        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/45 lg:block" />

        <div className="relative z-20 mx-auto flex min-h-[62vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-14 md:pt-32 md:pb-20">
            <p className="text-[16px] font-medium uppercase tracking-[0.22em] text-white/85 sm:text-[17px]">
              Wonder Valley Ranch Resort
            </p>

            <h1
              className="mt-4 text-[54px] font-normal leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-[70px] md:text-[90px] lg:text-[108px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Gallery
            </h1>

            <p className="mx-auto mt-5 max-w-[860px] text-[17px] leading-[1.85] text-white/88 sm:text-[18px] md:text-[20px]">
              Explore moments from our venues, dining, meetings, retreats,
              celebrations, and memorable group experiences.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f1f0eb] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[18px] font-normal text-[#a37f58] sm:text-[20px]">
            A Closer Look
          </p>

          <h2
            className="mt-3 text-[44px] font-normal leading-[0.98] text-[#23354a] sm:text-[58px] md:text-[72px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Moments That Tell The Story
          </h2>

          <p className="mx-auto mt-6 max-w-[860px] text-[18px] leading-[1.8] text-[#181818] sm:text-[19px] md:text-[20px]">
            From elegant meetings and gourmet dining to outdoor adventures and
            warm group gatherings, every image reflects the experience guests
            enjoy throughout the resort.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-[#f1f0eb] pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1920px] px-3 sm:px-4 md:px-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden bg-white text-left"
                aria-label={`Open image ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[290px] md:h-[320px] xl:h-[340px]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[120] bg-black/85 px-4 py-6 sm:px-6 md:px-10">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-[130] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-[1400px]">
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-h-[82vh] w-full object-contain"
              />

              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43] md:left-4 md:h-[56px] md:w-[56px]"
                aria-label="Previous image"
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
                onClick={goNext}
                className="absolute right-2 top-1/2 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43] md:right-4 md:h-[56px] md:w-[56px]"
                aria-label="Next image"
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
      )}
    </div>
  );
}