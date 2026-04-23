"use client";
import Link from "next/link";
import { useRef, useState } from "react";

const termsData = [
  {
    id: 1,
    question: "Payment Schedule",
    answer: "100% of the total amount shall be payable at the time of booking.",
  },
  {
    id: 2,
    question: "GST",
    answer: "Goods and Services Tax (GST) at the rate of 18% shall be applicable on all payments made.",
  },
  {
    id: 3,
    question: "Payment Details",
    answer: "All payments shall be made in favour of EDD UNITED PRIVATE LIMITED.",
  },
  {
    id: 4,
    question: "Refund Policy",
    answer: "All booking amounts and advance payments are strictly non-refundable and non-transferable under any circumstances.",
  },
  {
    id: 5,
    question: "Insurance",
    answer: "EDD UNITED PRIVATE LIMITED does not provide any form of insurance. The Client is advised to independently arrange for insurance, if required.",
  },
  {
    id: 6,
    question: "Jurisdiction",
    answer: "All disputes arising out of or in connection with this agreement shall be subject to the exclusive jurisdiction of courts in Jaipur.",
  },
];

export default function TermsAndConditions() {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="TermsAndConditions"
      className="min-h-screen max-sm:min-h-fit COLOR_BG_CREAM flex items-center justify-center max-sm:py-[20vw] py-[20vh]"
    >
      <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20">
        <h2 className="text-center Font_Q flex flex-col justify-center items-center max-sm:justify-start max-sm:mt-10 COLOR_TEXT_RED">
          Terms & Conditions
          <p className="Font_YV mt-7 font-bold sm:pt-5 max-sm:w-full max-sm:px-[10vw]">
            Payment Policy 
          </p>
        </h2>

        <div className="space-y-6 w-full">
          {termsData.map((term) => (
            <div
              key={term.id}
              className="border-b border-[#55130121] pb-6 group relative"
            >
              {/* BUTTON */}
              <button
                onClick={() => toggleFAQ(term.id)}
                className="group w-full flex items-center justify-between text-left py-4"
              >
                <span className="tracking-wide uppercase COLOR_TEXT_RED Font_YV text-[1.5rem] max-sm:text-[1.1rem] md:text-base font-bold">
                  {term.question}
                </span>

                {/* ICON */}
                <span
                  className={`relative w-5 h-5 transition-transform duration-500 ${
                    openId === term.id ? "rotate-45" : ""
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
                ref={(el) => (contentRefs.current[term.id] = el)}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  height:
                    openId === term.id
                      ? `${contentRefs.current[term.id]?.scrollHeight}px`
                      : "0px",
                }}
              >
                <div className="mt-4 Font_YV text-[18px] text-[#551301a4] pt-2">
                  {term.answer}
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