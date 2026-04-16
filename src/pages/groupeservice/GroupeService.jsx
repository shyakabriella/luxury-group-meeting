import React, { useEffect, useState } from "react";
import meetingImage from "../../assets/meeting-pictures/meeting-1.jpg";
import extendYourStayImage from "../../assets/meeting-pictures/hotel-garden.png"
import cateringOne from "../../assets/meeting-pictures/catering-1.jpg";
import cateringTwo from "../../assets/meeting-pictures/catering-2.jpg";
import culinaryEnhancementsOne from "../../assets/meeting-pictures/culinary-1.JPG";
import culinaryEnhancementsTwo from "../../assets/meeting-pictures/culinary-2.png";
import culinaryEnhancementsThree from "../../assets/meeting-pictures/culinary-3.jpg";

const cateringCards = [
  {
    title: "CUSTOM MENUS",
    image: cateringOne,
    description:
      "From fresh appetizers to gourmet entrées, our culinary team offers full buffets and plated service. Create a personalized menu for your meeting or corporate event.",
  },
  {
    title: "TASTING SESSIONS",
    image: cateringTwo,
    description:
      "Complimentary tastings available for confirmed group bookings. Sample our selections before your event to choose the perfect menu.",
  },
];

const culinaryEnhancements = [
  {
    title: "WELCOME RECEPTIONS",
    image: culinaryEnhancementsOne,
    description:
      "Start your meeting or conference with a memorable welcome reception. Enjoy premium cuisine and networking opportunities in an elegant setting.",
  },
  {
    title: "REFRESHMENT BREAKS",
    image: culinaryEnhancementsTwo,
    description:
      "Energize your attendees with our curated refreshment breaks. Freshly baked pastries, gourmet coffee, and healthy snacks to keep everyone focused.",
  },
  {
    title: "NETWORKING DINNERS",
    image: culinaryEnhancementsThree,
    description:
      "Foster connections with a sophisticated networking dinner. Our team creates the perfect atmosphere for meaningful business conversations.",
  },
];

const menuData = {
  "Hors D’Oeuvres": [
    {
      name: "PASTRY WRAPPED ASPARAGUS",
      description:
        "Asparagus wrapped in puff pastry topped with shredded parmesan cheese and dipped in a garlic butter sauce.",
    },
    {
      name: "ANTIPASTO SKEWERS",
      description:
        "Savory prosciutto wraps around luscious mozzarella cheese balls, accompanied by the freshness of basil leaves, juicy cherry tomatoes, and the subtle tang of queen olives, finished with a drizzle of balsamic glaze.",
    },
    {
      name: "SPANAKOPITA",
      description:
        "A savory Greek pastry filled with tender spinach, feta cheese, and aromatic herbs, all encased in crisp, golden layers of phyllo dough.",
    },
    {
      name: "CHEESE TARTS",
      description:
        "A harmonious blend of cream cheese and spreadable brie, nestled within a delicate mini tart shell, topped with a tantalizing swirl of blackberry bacon jam.",
    },
    {
      name: "SANTA FE ROLLS",
      description:
        "A delightful fusion of tender chicken, spicy peppers, creamy avocado, and tangy salsa, all wrapped in a crisp, golden shell.",
    },
    {
      name: "SHORT RIB CROSTINI",
      description:
        "Tender beef short rib nestled on toasted sourdough baguette, enhanced with a medley of flavors and topped with a dollop of cherry preserves and blue cheese crumbles.",
    },
    {
      name: "CRAB POPPERS",
      description:
        "Succulent crab meat blended with a medley of spices, encased in a crispy golden shell.",
    },
    {
      name: "ARTISAN CHEESE DISPLAY",
      description:
        "A delightful assortment featuring sourdough baguette slices and table water crackers paired with crisp red and green grapes, cheddar, Monterey Jack, and pepper jack cheese cubes.",
    },
    {
      name: "SHRIMP & CUCUMBER",
      description:
        "Blackened shrimp on a marinated cucumber covered in a garlic aioli and sriracha drizzle.",
    },
  ],
  Salads: [
    {
      name: "CLASSIC CAESAR",
      description:
        "Crisp romaine lettuce tossed with parmesan cheese, garlic croutons, and creamy Caesar dressing.",
    },
    {
      name: "GARDEN SALAD",
      description:
        "Fresh mixed greens with seasonal vegetables and your choice of house-made dressing.",
    },
    {
      name: "STRAWBERRY SPINACH",
      description:
        "Baby spinach, strawberries, candied pecans, feta cheese, and balsamic vinaigrette.",
    },
  ],
  Entrees: [
    {
      name: "GRILLED CHICKEN",
      description:
        "Tender grilled chicken breast served with chef-selected sauces and seasonal accompaniments.",
    },
    {
      name: "BRAISED BEEF",
      description:
        "Slow-braised beef prepared for rich flavor and elegant plated presentation.",
    },
    {
      name: "VEGETARIAN PASTA",
      description:
        "Fresh pasta tossed with seasonal vegetables and a savory herb cream sauce.",
    },
  ],
  Starches: [
    {
      name: "GARLIC MASHED POTATOES",
      description:
        "Creamy mashed potatoes blended with roasted garlic and butter.",
    },
    {
      name: "WILD RICE PILAF",
      description:
        "Aromatic wild rice pilaf with herbs and seasonal vegetables.",
    },
    {
      name: "ROASTED BABY POTATOES",
      description:
        "Golden roasted baby potatoes finished with herbs and sea salt.",
    },
  ],
  Veggies: [
    {
      name: "SEASONAL VEGETABLE MEDLEY",
      description:
        "A colorful blend of chef-selected seasonal vegetables, lightly seasoned and roasted.",
    },
    {
      name: "GREEN BEANS ALMONDINE",
      description:
        "Fresh green beans sautéed and finished with toasted almonds.",
    },
    {
      name: "HONEY GLAZED CARROTS",
      description:
        "Tender carrots lightly glazed for a sweet and elegant finish.",
    },
  ],
};

const benefits = [
  "Exclusive Venue Access",
  "Dedicated Event Coordinator",
  "Discounted Room Blocks",
  "Complimentary Menu Tasting",
  "Meeting Gardens",
  "Breakout Rooms",
  "AV Equipment & WiFi",
  "Custom Meeting Packages",
  "Outdoor Terrace",
  "Complimentary Parking",
  "On-Site Catering",
  "Welcome Refreshments",
];

function MenuItem({ item }) {
  return (
    <div className="border-b border-[#3a3a3a] pb-4">
      <h4 className="text-[13px] uppercase tracking-[0.02em] text-[#163247] md:text-[14px]">
        {item.name}
      </h4>
      <p className="mt-2 text-[12px] leading-[1.7] text-[#1e1e1e] md:text-[13px]">
        {item.description}
      </p>
    </div>
  );
}

export default function GroupeService() {
  const [activeTab, setActiveTab] = useState("Hors D’Oeuvres");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeItems = menuData[activeTab] || [];
  const leftColumn = activeItems.filter((_, index) => index % 2 === 0);
  const rightColumn = activeItems.filter((_, index) => index % 2 !== 0);

  return (
    <div
      className="w-full overflow-hidden bg-[#f3f2ed] text-[#1c1c1c]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={meetingImage}
          alt="Meeting Services"
          className="absolute inset-0 w-full h-full object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black/40 rounded-md" />

        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1
            className="text-white text-[22px] md:text-[32px] mt-10"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Meeting Services
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="text-center py-12 px-6">
        <p className="text-[#a88f53] uppercase tracking-[0.15em] text-[11px]">
          Premium Meeting Venues in Kigali, Rwanda
        </p>

        <h2
          className="mt-2 text-[20px] md:text-[30px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Full-Service Meeting Planning
        </h2>

        <p className="mt-4 max-w-[700px] mx-auto text-[14px] leading-[1.6] text-[#444]">
          Meetings at Luxury Garden Palace are designed for success. Our venue
          provides your team and attendees with an exceptional experience tailored
          to your business needs.
        </p>
      </section>

      {/* MEETING EXPERIENCE */}
      <section className="max-w-[1000px] mx-auto px-6 pb-12 grid md:grid-cols-2 gap-6 items-center">
        <img
          src={extendYourStayImage}
          alt="Meeting amenities"
          className="w-full h-[240px] object-cover rounded-md"
        />

        <div>
          <h2
            className="text-[20px] md:text-[24px] text-[#203549]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Seamless Meeting Experience
          </h2>

          <p className="mt-3 text-[13px] leading-[1.6] text-[#333]">
            Host productive and well-organized meetings with our fully equipped spaces,
            designed for collaboration and efficiency. From modern conference rooms to
            dedicated support services, every detail is tailored to ensure your event
            runs smoothly and professionally.
          </p>
        </div>
      </section>

      {/* CATERING */}
      <section className="max-w-[1100px] mx-auto px-6 pb-16">
        <h2
          className="text-center text-[20px] md:text-[30px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Catering
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {cateringCards.map((item) => (
            <div key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover rounded-md"
              />

              <h3 className="mt-4 text-[18px] text-[#203549]">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.6] text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CULINARY ENHANCEMENTS */}
      <section className="max-w-[1100px] mx-auto px-6 pb-16">
        <h2
          className="text-center text-[20px] md:text-[30px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Culinary Enhancements
        </h2>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {culinaryEnhancements.map((item) => (
            <div key={item.title}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover rounded-md"
              />

              <h3 className="mt-4 text-[18px] text-[#203549]">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.6] text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#fbfbfb] py-10">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.04em] text-[#a37f58]">
              What You Get at
            </p>

            <h2
              className="mt-2 text-[20px] md:text-[26px] text-[#203549]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Luxury Garden Palace
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {[0, 1, 2].map((col) => (
              <ul key={col} className="space-y-2 flex flex-col items-center">
                {benefits.slice(col * 4, col * 4 + 4).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[12px] text-[#222]"
                  >
                    <span className="h-[4px] w-[4px] rounded-full bg-[#8d6f53]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-8 border-b border-[#b9a27e]" />
        </div>
      </section>
    </div>
  );
}