"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is the nearest airport ?",
    answer:
      "The nearest airport is Maharana Pratap Airport (UDR), approximately 25-30 minutes from Raffles. Transfers will be arranged for guests so please share your travel details in advance to ensure seamless arrangements.",
  },
  {
    id: 2,
    question: "What is the weather like in September?",
    answer:
      "September in Udaipur is pleasantly warm with hints of post-monsoon freshness. Expect daytime temperatures around 26–34°C and cooler evenings by the lake.",
  },
  {
    id: 3,
    question: "What should I wear ?",
    answer: `Each event will have a suggested dress code mentioned on the Events page.
In general:

Day events: Light, breathable Indian or fusion wear

Evening events: Formal / cocktail / festive glamour

Wedding ceremony: Traditional elegance

Comfortable footwear is recommended due to outdoor venues.`,
  },
  {
    id: 4,
    question: "Are the events indoors or outdoors?",
    answer:
      "All events except for Pool Party and After Party are outside on the grass.",
  },
  {
    id: 5,
    question: "Are children welcome?",
    answer:
      "Invited children are welcome to attend. However, some events are designed as adult-only celebrations.",
  },
  {
    id: 6,
    question: "Will There be Child Care for Children during adult only events?",
    answer:
      "If you are interested in child care for the duration of the vents, please contact our wedding planners at sonalskushie@gmail.com",
  },
  {
    id: 7,
    question: "Whom should I contact for assistance during the wedding?",
    answer:
      "A dedicated hospitality desk will be available throughout the celebrations to assist with room allocations, event timings, and any special requests.",
  },
  {
    id: 8,
    question: "What if I have dietary restrictions?",
    answer:
      "Please inform us in advance of any dietary requirements. The culinary team will be happy to accommodate special requests.",
  },
  {
    id: 9,
    question: "What is the checkout process?",
    answer:
      "Our hospitality team will assist with smooth departures on the final day. Transfer details will be shared closer to the date.",
  },
  {
    id: 10,
    question: "Do I need a visa to travel to India?",
    answer: `For U.S. citizens attending our wedding in India, you’ll need to apply for an Indian e-Tourist Visa: a simple online process that takes about 10–15 minutes. Just visit the link below, upload a passport photo and a scan of your passport, and pay the fee. Be sure your passport is valid for at least six months beyond your travel date (September 2026), and carry a printed copy of the e-visa when you fly. The e-Tourist Visa application opens 30 days before your scheduled departure date.
`,
    LINK: `https://indianvisaonline.gov.in/evisa/tvoa.html`,
  },
  {
    id: 11,
    question: "What currency is used in India?",
    answer:
      "The local currency is the Indian Rupee (INR). Currency exchange is available at major international airports. Credit cards are widely accepted at the hotel.",
  },
  {
    id: 12,
    question: "Will my phone work in India?",
    answer: "International roaming is available through most providers.",
  },
  {
    id: 13,
    question: "What if I want to explore Udaipur?",
    answer:
      "Udaipur is known as the “City of Lakes” and offers stunning palaces, boat rides, and heritage experiences.",
  },
  {
    id: 14,
    question: "What can I explore in Udaipur?",
    answer: `City Palace, Lake Pichola, Taj Lake Palace, The Oberoi Udaivilas, Bagore Ki Haveli`,
  },
  {
    id: 15,
    question: "Where can I Shop in Udaipur? ",
    answer: `The Charms of Bapu Bazaar,
 Jagdish Chowk,
 Exploring Hathi Pol Bazaar, 
 Shilpgram,
 Boutique Bliss,
 City Palace Complex,
 Gangaur Ghat, 
 Unveiling Udaipur's Hidden Gems,
 Meera Kala Mandir,
 Bada Bazaar,
 Udaipur Haat,
 Contemporary Art Galleries,
 Empowering Women at Shilpigram's Women's Bazaar.

`,
  },
  {
    id: 16,
    question: "Who can I contact if I have any questions?",
    answer: `For any wedding-related questions, please reach out to Sonal & Kush’s wedding planning team at:
Email: sonalskushie@gmail.com 
Phone: +91 93588 00614, +91 93100 69102
`,
  },
  {
    id: 17,
    question: "Are children welcome at the events?",
    answer: `We love your little ones. Children are welcome at all events except the Cocktail Hour and Reception Phone No : +91 93588 00614.

For guests traveling with children under the age of 12, please contact the wedding planners at sonalskushie@gmail.com  to inquire about available nanny services.
`,
  },
  {
    id: 18,
    question: "Can I bring a plus one?",
    answer: `If a plus one is not listed on your invitation and you would like to request one, please contact the wedding planners at sonalskushie@gmail.com  for assistance.`,
  },
  {
    id: 19,
    question: "Can I book a room before or after the wedding dates?",
    answer: `Yes. Additional nights can be booked directly through the Raffles Udaipur website, subject to availability.

I have questions about airport transfers.

Please refer to the Travel page on the website for detailed information regarding airport transportation.`,
  },
  {
    id: 20,
    question: `How will rooms be assigned between the Island and Lakeshore rooms?
`,
    answer: `Rooms will be allocated on a first-come, first-served basis based on when reservations are confirmed Phone No : +91 93588 00614.
`,
  },
  {
    id: 21,
    question: "What is the dress code?",
    answer: `Please refer to the Event Schedule section of the website, where the dress code and attire guidelines for each event will be listed.
`,
  },
  {
    id: 22,
    question: "What should I do if I need to cancel my reservation?",
    answer: `Please contact the wedding planners at sonalskushie@gmail.com  as soon as possible for assistance.
`,
  },
];

const OPEN_TEXT =
  "The wedding is taking place at La Mamounia, Marrakech, Morocco.";

// export default function FAQ() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section
//       id="FAQ"
//       className="min-h-screen max-sm:min-h-fit COLOR_BG_RED text-white flex items-center justify-center max-sm:py-[20vw] py-[10vh]"
//     >
//       <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20">
//         <h2 className="text-center Font_Q flex justify-center items-center">
//           FAQ
//         </h2>

//         <div className="space-y-6 w-full">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border-b border-white/20 pb-6  group translate-0"
//             >
//               {/* BUTTON */}
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="group w-full flex items-center justify-between text-left cursor-pointer"
//               >
//                 <span className="tracking-wide uppercase Font_YV text-[1.5rem]  max-sm:text-[1.1rem] md:text-base relative">
//                   {faq.question}
//                 </span>

//                 {/* ICON */}
//                 <span
//                   className={`
//                     relative w-5 h-5 select-none cursor-pointer
//                     transition-transform duration-500 ease-in-out
//                     group-hover:rotate-45
//                     ${activeIndex === index ? "rotate-45" : "rotate-0"}
//                   `}
//                 >
//                   <img
//                     src="/svgs/IconPlus.svg"
//                     alt="IMG"
//                     className="absolute inset-0 m-auto object-cover object-center w-full h-full"
//                   />
//                   <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_RED" />
//                 </span>
//               </button>

//               {/* CONTENT */}
//               <div
//                 className={`
//                   overflow-hidden transition-all duration-500 ease-in-out
//                   ${
//                     activeIndex === index
//                       ? "max-h-auto opacity-100 mt-4"
//                       : "max-h-0 opacity-0"
//                   }
//                 `}
//               >
//                 <span className="Font_YV text-[18px] capitalize text-white/60">
//                   {faq.answer} <Link href={`/explore`}><span className={`text-white ${index === 13 || index === 14 ? '' : 'hidden'} select-none cursor-pointer underline`}>Know More</span></Link>
//                 </span>
//               </div>

//               <div
//                 className={`w-0 h-px bg-white   group-hover:w-full absolute bottom-[0%] left-0  transition-all duration-200 ease-in`}
//               ></div>
//             </div>
//           ))}

//           {/* <div className="border-t border-white/20" /> */}
//         </div>
//       </div>
//     </section>
//   );
// }

//  className={`grid transition-all duration-500 ease-in-out
//     ${openId === faq.id ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
//   `}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="FAQ"
      className="min-h-screen max-sm:min-h-fit COLOR_BG_CREAM  flex items-center justify-center max-sm:py-[20vw] py-[20vh]"
    >
      <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20">
        <h2 className="text-center Font_Q flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-10 COLOR_TEXT_RED">
          FAQ
          <p className="  Font_YV mt-7 font-bold sm:pt-5 max-sm:w-full max-sm:px-[10vw]">
            For any wedding-related questions, please reach out to Sonal & Kush’s wedding planning team at:
          </p>
          <div className=" w-fit h-fit flex sm:gap-2 mt-4 justify-center items-center max-sm:flex-col">

             <a href="mailto:sonalskushie@gmail.com" >
              <div className=" relative group flex flex-col max-sm:mt-2">
              <p className="Font_YV ">sonalskushie@gmail.com</p>
              <div className="w-0 h-px bg-[#551301]  group-hover:w-full absolute bottom-[-1] left-0 transition-all duration-200"></div>
              </div>
            </a>

            <p className="px-2 max-sm:hidden">|</p>

            <a href="tel:+919358800614">
              <div className=" relative group flex w-fit flex-col max-sm:mt-2">
              <p className="Font_YV ">+91 93588 00614</p>
              <div className="w-0 h-px bg-[#551301]  group-hover:w-full absolute bottom-[-1] left-0 transition-all duration-200"></div>
              </div>
            </a>
            {/* <p className="px-2 max-sm:hidden">|</p>
            <a href="tel:+919310069102">
              <div className=" relative group flex w-fit flex-col">
              <p className="Font_YV max-sm:mt-2">+91 93100 69102</p>
              <div className="w-0 h-px bg-[#551301]  group-hover:w-full absolute bottom-[-1] left-0 transition-all duration-200"></div>
              </div>
            </a> */}
          </div>
        </h2>

        <div className="space-y-6 w-full">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-[#55130121] pb-6 group relative"
            >
              {/* BUTTON */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="group w-full flex items-center justify-between text-left"
              >
                <span className="tracking-wide uppercase COLOR_TEXT_RED Font_YV text-[1.5rem] max-sm:text-[1.1rem] md:text-base">
                  {faq.question}
                </span>

                {/* ICON */}
                <span
                  className={`relative w-5 h-5 transition-transform duration-500 ${
                    openId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  <img
                    src="/svgs/IconPlusnew.svg"
                    alt="icon"
                    className="absolute inset-0 w-full h-full"
                  />
                  <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_CREAM" />
                </span>
              </button>

              {/* CONTENT */}
              <div
                ref={(el) => (contentRefs.current[faq.id] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  height:
                    openId === faq.id
                      ? `${contentRefs.current[faq.id]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="mt-4 Font_YV text-[18px] text-[#551301a4]">
                  {faq.answer}

                  {(faq.id === 14 || faq.id === 15) && (
                    <Link
                      href="/explore"
                      className="COLOR_TEXT_RED underline ml-2"
                    >
                      Know More
                    </Link>
                  )}
                  {/* Visa link */}
                  {faq.id === 10 && faq.LINK && (
                    <a
                      href={faq.LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-2 COLOR_TEXT_RED underline"
                    >
                      Apply for Indian e-Tourist Visa
                    </a>
                  )}
                </div>
              </div>

              {/* HOVER LINE */}
              <div className="w-0 h-px bg-[#551301] group-hover:w-full absolute bottom-0 left-0 transition-all duration-200"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
