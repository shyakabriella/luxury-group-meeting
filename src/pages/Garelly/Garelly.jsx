import React, { useEffect, useState } from "react";

import GalleryBanner from "../../assets/meeting-pictures/hotel-garden.png";

import galleryImages from "./galleryImages"

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
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={GalleryBanner}
          alt="Gallery hero"
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/40 rounded-md" />

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6 mt-5">
          <div>
            <h1
              className="mt-2 text-[24px] md:text-[32px] text-white"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Gallery
            </h1>

            <p className="mt-3 max-w-[500px] mx-auto text-[13px] leading-[1.6] text-white/90">
              Explore moments from our venues, dining, meetings, and celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 px-6 text-center">
        <p className="text-[11px] text-[#a37f58] uppercase tracking-[0.12em]">
          A Closer Look
        </p>

        <h2
          className="mt-2 text-[20px] md:text-[28px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Moments That Tell The Story
        </h2>

        <p className="mt-4 max-w-[650px] mx-auto text-[13px] leading-[1.6] text-[#333]">
          From elegant meetings and dining to outdoor experiences and celebrations,
          every image reflects the moments our guests enjoy.
        </p>
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