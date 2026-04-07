import React from 'react'


const services = [
  { img: "/imgs/itinerary/Iimg1.webp" },
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
        <div className='w-full pt-[20vh] max-sm:pt-[20vw] flex flex-col px-8  max-sm:justify-center justify-end items-center pb-[2.5vh] '>
          <h2 className='Font_Q max-sm:text-center uppercase mb-[3vh] COLOR_TEXT_RED max-sm:mt-10'>Hair & Makeup</h2>
          <p className='Font_YV COLOR_TEXT_RED my-5 max-w-[600px] text-center'>To help you look and feel your best for the celebration, we have arranged discounted hair and makeup services. A list of these available services along with special pricing is provided below. </p>
          <p className='Font_YV COLOR_TEXT_RED max-w-[600px] text-center'> If you would like to book an appointment, please reach out directly to our wedding planner at the email or their WhatsApp number provided below. Appointments will be scheduled on a first-come, first-served basis, so we encourage you to reserve early. We cannot wait to celebrate with you!</p>
        </div>

        <div className="w-full grid gap-2 grid-cols-4 max-sm:grid-cols-2 px-[40px] max-sm:px-[20px] my-10">
          {services.map((service, i) => {
            // IMAGE BLOCK
            if (service.img) {
              return (
                <div
                  key={i}
                  className={`w-full  aspect-square`}
                >
                  <img
                    src={service.img}
                    alt=""
                    className="w-full h-full  object-cover object-top"
                  />
                </div>
              );
            }

            // SERVICE CARD
            return (
              <div
                key={i}
                className={`w-full aspect-square p-6 max-sm:p-2 flex flex-col justify-between  ${service.highlight ? "bg-[#551301] text-[#EFDFCB]" : "border border-[#551301] text-[#551301]"
                  }`}
              >
                <div>
                  <p className="text-sm Font_Q">{service.id}</p>
                  <p className=" text-4xl! max-sm:text-xl! leading-tight Font_Q  mt-2">
                    {service.label}
                  </p>
                </div>
                  
                <p className="text-4xl! max-sm:text-xl! tracking-widest Font_Q  mt-4">
                  ₹{service.price}

                  
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default page