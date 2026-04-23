"use client";
import React from "react";

const termsData = [
  {
    id: 1,
    title: "Payment Schedule",
    content: "100% of the total amount shall be payable at the time of booking.",
  },
  {
    id: 2,
    title: "GST",
    content: "Goods and Services Tax (GST) at the rate of 18% shall be applicable on all payments made.",
  },
  {
    id: 3,
    title: "Payment Details",
    content: "All payments shall be made in favour of EDD UNITED PRIVATE LIMITED.",
  },
  {
    id: 4,
    title: "Refund Policy",
    content: "All booking amounts and advance payments are strictly non-refundable and non-transferable under any circumstances.",
  },
  {
    id: 5,
    title: "Insurance",
    content: "EDD UNITED PRIVATE LIMITED does not provide any form of insurance. The Client is advised to independently arrange for insurance, if required.",
  },
  {
    id: 6,
    title: "Jurisdiction",
    content: "All disputes arising out of or in connection with this agreement shall be subject to the exclusive jurisdiction of courts in Jaipur.",
  },
];

export default function TermsAndConditions() {
  return (
    <section 
      id="TermsAndConditions" 
      className="min-h-screen COLOR_BG_CREAM py-20 px-6 sm:px-12 md:px-24 pt-[20vh]"
    >
      <div className="max-w-4xl mx-auto">
        {/* HEADER SECTION */}
        <header className="mb-16 border-b border-[#55130121] pb-10">
          <h1 className="Font_Q text-4xl md:text-5xl COLOR_TEXT_RED mb-4">
            Terms & Conditions
          </h1>
          <p className="Font_YV text-lg font-bold opacity-80 uppercase tracking-widest">
            Payment Policy & Legal Agreement
          </p>
        </header>

        {/* CONTENT SECTION - STACKED LAYOUT */}
        <div className="space-y-12">
          {termsData.map((term, index) => (
            <div key={term.id} className="group">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                
                {/* NUMBERING */}
                <div className="Font_Q text-2xl COLOR_TEXT_RED opacity-30">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1">
                  <h5 className="Font_YV text-xl font-bold uppercase tracking-wide COLOR_TEXT_RED mb-3">
                    {term.title}
                  </h5>
                  <p className="Font_YV text-lg leading-relaxed text-[#551301a4]">
                    {term.content}
                  </p>
                </div>
              </div>
              
              {/* SUBTLE DIVIDER */}
              <div className="mt-8 h-px bg-[#55130115] w-full" />
            </div>
          ))}
        </div>

        {/* FOOTER NOTE
        <footer className="mt-20 p-8 bg-[#55130108] rounded-lg border border-[#55130115]">
          <p className="Font_YV text-sm text-[#55130180] text-center italic">
            By proceeding with the booking, you acknowledge that you have read, understood, 
            and agreed to the terms mentioned above.
          </p>
        </footer> */}
      </div>
    </section>
  );
}