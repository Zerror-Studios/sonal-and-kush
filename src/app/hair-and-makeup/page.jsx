import React from "react";

const services = [
  {
    id: "01",
    label: "Makeup, Hair & Draping",
    price: 7000,
    highlight: true,
  },
  {
    id: "02",
    label: "Hair + Draping",
    price: 3500,
    highlight: false,
  },
  {
    id: "03",
    label: "Makeup + Draping",
    price: 5000,
    highlight: true,
  },
  {
    id: "04",
    label: "Makeup + Hair",
    price: 6500,
    highlight: true,
  },
  {
    id: "05",
    label: "Makeup",
    price: 4000,
    highlight: false,
  },
  {
    id: "06",
    label: "Hairstyle",
    price: 2500,
    highlight: true,
  },
  {
    id: "07",
    label: "Draping",
    price: 1000,
    highlight: false,
  },
];

const page = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full pt-[20vh] max-sm:pt-[20vw] flex flex-col px-8  max-sm:justify-center justify-end items-center pb-[2.5vh] ">
          <h2 className="Font_Q max-sm:text-center uppercase mb-[3vh] COLOR_TEXT_RED max-sm:mt-10">
            Hair & Makeup
          </h2>
          <p className="Font_YV COLOR_TEXT_RED my-5 max-w-[600px] text-center">
            To help you look and feel your best for the celebration, we have
            arranged discounted hair and makeup services. A list of these
            available services along with special pricing is provided
            below.{" "}
          </p>
          <p className="Font_YV COLOR_TEXT_RED max-w-[600px] text-center">
            {" "}
            If you would like to book an appointment, please reach out directly
            to our wedding planner at the email or their WhatsApp number
            provided below. Appointments will be scheduled on a first-come,
            first-served basis, so we encourage you to reserve early. We cannot
            wait to celebrate with you!
          </p>
        </div>

        {/* ------------------------------------------------------------ */}

        {/* =============================================================== */}
        <div className="w-full h-fit flex flex-col lg:flex-row py-[10vh] max-sm:gap-10 max-sm:py-[5vh] px-[20px] sm:px-[40px] gap-10 lg:gap-0 justify-center items-center">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl lg:max-w-3xl">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[300px] sm:h-[400px] lg:h-[520px]">
                {/* Left - Main large image spanning 2 rows */}
                <div className="row-span-2 overflow-hidden shadow-md relative group">
                  <img
                    src={`/imgs/itinerary/Iimg1.webp`}
                    alt="Bridal portrait"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Top Right */}
                <div className="overflow-hidden shadow-md relative group">
                  <img
                    src={`/imgs/itinerary/Iimg2.webp`}
                    alt="Makeup artist at work"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Bottom Right */}
                <div className="overflow-hidden shadow-md relative group">
                  <img
                    src={`/imgs/ct_hair.jpg`}
                    alt="Bridal hairstyle"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="w-full lg:w-1/2 h-fit flex flex-col max-sm:mt-8 items-center gap-6 sm:gap-8 lg:gap-10 lg:pl-[4vw]">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col items-center justify-center"
              >
                <p
                  className="Font_Q uppercase tracking-widest text-center COLOR_TEXT_RED"
                  style={{ fontSize: "clamp(1.5rem, 1.9vw, 2.2rem)" }}
                >
                  {service.label}
                </p>
                <p
                  className="Font_YV COLOR_TEXT_RED mt-5 tracking-wider text-center"
                  style={{ fontSize: "clamp(1.1rem, 1.4rem, 1.5rem)" }}
                >
                  ₹ {service.price.toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
