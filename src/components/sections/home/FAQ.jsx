

"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What is the nearest airport ?",
    answer:
      "The nearest airport is Maharana Pratap Airport (UDR), approximately 25-30 minutes from Raffles. Transfers will be arranged for guests so please share your travel details in advance to ensure seamless arrangements.",
  },
  {
    question: "What is the weather like in September?",
    answer:
      "September in Udaipur is pleasantly warm with hints of post-monsoon freshness. Expect daytime temperatures around 26–34°C and cooler evenings by the lake.",
  },
  {
    question: "What should I wear ?",
    answer: `Each event will have a suggested dress code mentioned on the Events page.
In general:

Day events: Light, breathable Indian or fusion wear

Evening events: Formal / cocktail / festive glamour

Wedding ceremony: Traditional elegance

Comfortable footwear is recommended due to outdoor venues.`,
  },
  {
    question: "Are the events indoors or outdoors?",
    answer:
      "The celebrations are planned across both indoor and outdoor spaces.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Invited children are welcome to attend. However, some events are designed as adult-only celebrations.",
  },
  {
    question: "Will There be Child Care for Children during adult only events?",
    answer:
      "If you are interested in child care for the duration of the vents, please contact our wedding planners at sonalskushie@gmail.com",
  },
  {
    question: "Whom should I contact for assistance during the wedding?",
    answer:
      "A dedicated hospitality desk will be available throughout the celebrations to assist with room allocations, event timings, and any special requests.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please inform us in advance of any dietary requirements. The culinary team will be happy to accommodate special requests.",
  },
  {
    question: "What is the checkout process?",
    answer:
      "Our hospitality team will assist with smooth departures on the final day. Transfer details will be shared closer to the date.",
  },
  {
    question: "Do I need a visa to travel to India?",
    answer: `For U.S. citizens attending our wedding in India, you’ll need to apply for an Indian e-Tourist Visa: a simple online process that takes about 10–15 minutes. Just visit the link below, upload a passport photo and a scan of your passport, and pay the fee. Be sure your passport is valid for at least six months beyond your travel date (September 2026), and carry a printed copy of the e-visa when you fly. The e-Tourist Visa application opens 30 days before your scheduled departure date.
`,
  },
  {
    question: "What currency is used in India?",
    answer:
      "The local currency is the Indian Rupee (INR). Currency exchange is available at major international airports. Credit cards are widely accepted at the hotel.",
  },
  {
    question: "Will my phone work in India?",
    answer: "International roaming is available through most providers.",
  },
  {
    question: "What if I want to explore Udaipur?",
    answer:
      "Udaipur is known as the “City of Lakes” and offers stunning palaces, boat rides, and heritage experiences.",
  },
  {
    question: "What can I explore in Udaipur?",
    answer: `City Palace, Lake Pichola, Taj Lake Palace, The Oberoi Udaivilas, Bagore Ki Haveli`,
  },
  {
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
];

const OPEN_TEXT =
  "The wedding is taking place at La Mamounia, Marrakech, Morocco.";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="min-h-screen max-sm:min-h-fit COLOR_BG_RED text-white flex items-center justify-center max-sm:py-[20vw] py-[10vh]"
    >
      <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20">
        <h2 className="text-center Font_Q flex justify-center items-center">
          FAQ
        </h2>

        <div className="space-y-6 w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/20 pb-6  group translate-0"
            >
              {/* BUTTON */}
              <button
                onClick={() => toggleFAQ(index)}
                className="group w-full flex items-center justify-between text-left cursor-pointer"
              >
                <span className="tracking-wide uppercase Font_YV text-[1.5rem]  max-sm:text-[1.1rem] md:text-base relative">
                  {faq.question}
                </span>

                {/* ICON */}
                <span
                  className={`
                    relative w-5 h-5 select-none cursor-pointer
                    transition-transform duration-500 ease-in-out
                    group-hover:rotate-45
                    ${activeIndex === index ? "rotate-45" : "rotate-0"}
                  `}
                >
                  <img
                    src="/svgs/IconPlus.svg"
                    alt="IMG"
                    className="absolute inset-0 m-auto object-cover object-center w-full h-full"
                  />
                  <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_RED" />
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    activeIndex === index
                      ? "max-h-auto opacity-100 mt-4"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <span className="Font_YV text-[18px] capitalize text-white/60">
                  {faq.answer} <span className={`text-white ${index === 13 || index === 14 ? '' : 'hidden'} select-none cursor-pointer underline`}>Know More</span>
                </span>
              </div>

              <div
                className={`w-0 h-px bg-white   group-hover:w-full absolute bottom-[0%] left-0  transition-all duration-200 ease-in`}
              ></div>
            </div>
          ))}

          {/* <div className="border-t border-white/20" /> */}
        </div>
      </div>
    </section>
  );
}
