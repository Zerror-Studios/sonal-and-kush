'use client'
import React, { useEffect, useRef } from "react";

const ComplimentaryHotelStay = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = `opacity 0.9s ease ${i * 0.18}s, transform 0.9s ease ${i * 0.18}s`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 80);
    });
  }, []);

  return (
    <div
    className=""
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100vh",
       
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12vh 24px 10vh",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* Ambient glow top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse at top, rgba(180, 130, 70, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

     

      {/* Eyebrow */}
      <p
        className="fade-in COLOR_TEXT_RED Font_YV mb-5 font-bold mt-[10vh]"
      >
        Complimentary Accommodation
      </p>

      {/* Main heading */}
      <h2
        className="fade-in Font_Q COLOR_TEXT_RED text-center uppercase"
       
      >
        Your Stay at Raffles Udaipur
      </h2>

      {/* Subline rule */}
      <div className="fade-in" style={{ display: "flex", alignItems: "center", gap: "16px", margin: "28px 0 48px" }}>
        {/* <div style={{ width: "80px", height: "0.5px", background: "rgba(196, 155, 85, 0.35)" }} />
        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C49B55", opacity: 0.7 }} />
        <div style={{ width: "80px", height: "0.5px", background: "rgba(196, 155, 85, 0.35)" }} /> */}
      </div>

      {/* Content card */}
      <div
        className="fade-in shadow-lg  "
        style={{
          maxWidth: "640px",
          width: "100%",
          background: "#551301",
          // border: "2px solid rgba(196, 155, 85, 0.2)",
          padding: "clamp(32px, 6vw, 56px) clamp(24px, 6vw, 52px)",
          position: "relative",
        }}
      >
        {/* Corner accents */}
        {[
          { top: "-6px", left:"-6px", borderTop: "2px solid #551301", borderLeft: "2px solid #551301" },
          { top:"-6px", right:"-6px", borderTop: "2px solid #551301", borderRight: "2px solid #551301" },
          { bottom:"-6px", left:"-6px", borderBottom: "2px solid #551301", borderLeft: "2px solid #551301" },
          { bottom:"-6px", right:"-6px", borderBottom: "2px solid #551301", borderRight: "2px solid #551301" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "18px",
              height: "18px",
              ...s,
            }}
          />
        ))}

        {[
          "It means so much to us that you will be joining our families to celebrate this very special occasion.",
          "We are delighted to host you at Raffles Udaipur, and your accommodation has been arranged with our compliments. We hope you will feel completely at home and enjoy every moment of your time with us. Your room details will available when you arrive at Raffles.",
          "If there is anything at all that would make your stay more comfortable or enjoyable, please don’t hesitate to let us know (please see the contact numbers and email below). It would truly be our pleasure to assist in any way.",
          "We look forward to welcoming you and celebrating together in what promises to be a joyful and memorable time.",
        ].map((text, i) => (
          <p className=" COLOR_TEXT_CREAM Font_YV mb-6 "
            key={i}
          >
            {text}
          </p>
        ))}

          {/* Signature block */}
      <div
        className="fade-in"
        style={{
          marginTop: "48px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <p className="COLOR_TEXT_CREAM Font_YV" 
        // style={{  fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase",  }}
        >
         With our warmest regards,

        </p>
        <h5
         className="Font_Q COLOR_TEXT_CREAM text-[40px] text-center leading-[45px] uppercase"
          style={{
            // color: "#F5EDD8",
            // fontSize: "clamp(20px, 3.5vw, 28px)",
            // fontStyle: "italic",
            // fontFamily: "'Georgia', 'Times New Roman', serif",
            // fontWeight: "400",
            // letterSpacing: "0.02em",
            marginTop: "4px",
          }}
        >
          Jauhars and Patel Family
        </h5>
      </div>

      {/* Divider */}
      <div className="w-full flex items-center justify-center">

      <div className="fade-in" style={{ display: "flex", alignItems: "center", gap: "16px", margin: "40px 0 32px" }}>
        <div style={{ width: "40px", height: "0.5px", background: "rgba(196, 155, 85, 0.3)" }} />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5Z" fill="#C49B55" fillOpacity="0.5" />
        </svg>
        <div style={{ width: "40px", height: "0.5px", background: "rgba(196, 155, 85, 0.3)" }} />
      </div>
      </div>

      {/* Contact block */}
      <div
        className="fade-in"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p className="COLOR_TEXT_CREAM Font_Q uppercase  tracking-widest mb-5">
          Contact Information
        </p>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
            <span className="COLOR_TEXT_CREAM Font_YV" style={{ fontSize: "16px", letterSpacing: "0.18em", textTransform: "uppercase",  opacity: 0.8,  }}>Email</span>
            <a href="mailto:sonalskushie@gmail.com"><span className="COLOR_TEXT_CREAM Font_YV " >sonalskushie@gmail.com</span></a>
          </div>
          <div style={{ width: "0.5px", height: "28px", background: "rgba(196,155,85,0.25)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
            <span className="COLOR_TEXT_CREAM Font_YV" style={{ fontSize: "16px", letterSpacing: "0.18em", textTransform: "uppercase",  opacity: 0.8,  }}>WhatsApp</span>
            <a href="tel:+919820216173"><span className="COLOR_TEXT_CREAM Font_YV " >+91 9820216173</span></a>
          </div>
        </div>
      </div>
      </div>

    

      {/* Bottom ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "200px",
          background: "radial-gradient(ellipse at bottom, rgba(180, 130, 70, 0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default ComplimentaryHotelStay;