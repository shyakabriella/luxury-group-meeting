import React, { useEffect } from "react";
import imageOne from "../../assets/meeting-pictures/hotel-entrance.jpg";
import imageTwo from "../../assets/meeting-pictures/meeting-1.jpg";
import imageThree from "../../assets/meeting-pictures/many-people.png";
import imageFour from "../../assets/meeting-pictures/business-meeting.png";

const venues = [
  {
    title: "Garden Meeting Space",
    size: "Outdoor Venue | Up to 500 Attendees",
    image: imageOne,
    description:
      "Set against a verdant backdrop with inspiring views of lush gardens, our outdoor meeting space offers a refreshing environment for corporate retreats, team-building sessions, and networking events. The natural setting encourages creativity and collaboration under the open sky.",
  },
  {
    title: "Conference Hall",
    size: "Indoor Venue | Up to 400 Attendees",
    image: imageTwo,
    description:
      "Our sophisticated conference hall is designed for impactful presentations, seminars, and large-scale meetings. With modern facilities, premium seating, and advanced audiovisual support, it provides the perfect setting for professional gatherings and strategic discussions.",
  },
  {
    title: "Executive Meeting Space",
    size: "Premium Meeting Venue | Up to 150 Attendees",
    image: imageThree,
    description:
      "The executive meeting space offers an intimate environment for board meetings, breakout sessions, and networking over refreshments. With a relaxed yet professional atmosphere, it’s ideal for fostering connections and hosting smaller group discussions in style.",
  },
];

export default function Venues() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#efeee8] text-[#1f1f1f]">
      
      {/* HERO */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={imageFour}
          alt="venues hero"
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/40 rounded-md" />

        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1
            className="text-white text-[25px] md:text-[35px] mt-10"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Meeting Venues
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="text-center py-12 px-6">
        <p className="text-[#a88f53] uppercase tracking-[0.15em] text-[11px]">
          Professional Meeting Venues in Kigali, Rwanda
        </p>

        <h2
          className="mt-2 text-[20px] md:text-[30px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Spaces for Collaboration & Innovation
        </h2>

        <p className="mt-4 max-w-[700px] mx-auto text-[14px] leading-[1.6] text-[#444]">
          Discover the versatile meeting spaces at Luxury Garden Palace, Kigali’s premier destination for corporate events. Our venues combine modern design, advanced amenities, and inspiring settings to host conferences, workshops, networking sessions, and executive retreats—perfect for driving collaboration and success.
        </p>

        {/* <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <button className="bg-[#a88f53] text-white px-6 py-2 uppercase text-xs tracking-wider rounded-md">
            Explore Venues
          </button>
          <button className="bg-[#a88f53] text-white px-6 py-2 uppercase text-xs tracking-wider rounded-md">
            View Capacity Chart
          </button>
        </div> */}
      </section>

      {/* VENUES LIST */}
      <section className="max-w-[1100px] mx-auto px-6 pb-16 space-y-16">
        {venues.map((venue, index) => (
          <div
            key={venue.title}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className={`${index % 2 === 1 ? "order-2 md:order-1" : ""}`}>
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-[300px] object-cover rounded-md"
              />
            </div>

            {/* TEXT */}
            <div className={`${index % 2 === 1 ? "order-1 md:order-2" : ""}`}>
              <h3
                className="text-[22px] md:text-[28px] text-[#203549]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {venue.title}
              </h3>

              <p className="mt-1 text-[#6a6a6a] uppercase text-[11px] tracking-wide">
                {venue.size}
              </p>

              <p className="mt-4 text-[14px] leading-[1.6] text-[#333]">
                {venue.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
