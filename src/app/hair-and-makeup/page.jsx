'use client'
import React, { useEffect, useRef } from "react";

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
    highlight: false,
  },
  {
    id: "04",
    label: "Makeup + Hair",
    price: 6500,
    highlight: false,
  },
  {
    id: "05",
    label: "Makeup",
    price: 4000,
    highlight: false,
  },
  {
    id: "06",
    label: "Draping",
    price: 1000,
    highlight: false,
  },
  {
    id: "07",
    label: "Hairstyle",
    price: 2500,
    highlight: false,
  },
];

const StarIcon = ({ size = 14, opacity = 0.8 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path
      d="M7 0L8.2 5.8L14 7L8.2 8.2L7 14L5.8 8.2L0 7L5.8 5.8Z"
      fill="#C49B55"
      fillOpacity={opacity}
    />
  </svg>
);

const HairMakeupPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.8s ease ${i * 0.12}s, transform 0.8s ease ${i * 0.12}s`;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 60);
    });
  }, []);

  return (
    <div
    className=" "
      ref={containerRef}
      style={{
        width: "100%",
        minHeight: "100vh",
        // background: "#1C0F0A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "11vh 24px 10vh",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      
      }}
    >
     
      
      <h1
        className="fade-in COLOR_TEXT_RED Font_Q mt-[10vh]"
        style={{
          fontSize: "clamp(26px, 5vw, 46px)",
          // color: "#F5EDD8",
          fontWeight: "400",
          letterSpacing: "0.04em",
          textAlign: "center",
          marginBottom: "0",
          lineHeight: "1.2",
        }}
      >
        Hair & Makeup
      </h1>

      {/* Sub-rule */}
      <div
        className="fade-in"
        style={{ display: "flex", alignItems: "center", gap: "14px", margin: "26px 0 50px" }}
      >
        <div style={{ width: "70px", height: "0.5px", background: "rgba(196,155,85,0.3)" }} />
        <div
          style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#C49B55", opacity: 0.65 }}
        />
        <div style={{ width: "70px", height: "0.5px", background: "rgba(196,155,85,0.3)" }} />
      </div>

      {/* Intro line */}
      <p
        className="fade-in COLOR_TEXT_RED Font_YV"
        style={{
          // color: "#9A8870",
          fontSize: "16px",
          letterSpacing: "0.08em",
          textAlign: "center",
          marginBottom: "44px",
          // fontStyle: "italic",
          maxWidth: "420px",
        }}
      >
        Kindly find the makeup, hair &amp; draping rate card below
      </p>

      {/* Rate card list */}
      <div
        className="fade-in"
        style={{
          width: "100%",
          maxWidth: "580px",
          display: "flex",
          flexDirection: "column",
          gap: "0",
          position: "relative",
        }}
      >
        {services.map((svc, i) => (
          <div
          className=" group cursor-pointer"
            key={svc.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 0",
              borderBottom:
                i < services.length - 1
                  ? "0.5px solid rgba(196,155,85,0.12)"
                  : "none",
              position: "relative",
              cursor: "default",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              // e.currentTarget.style.background = "rgba(196,155,85,0.04)";
              // e.currentTarget.querySelector(".price-amt").style.color = "#E8C97A";
            }}
            onMouseLeave={(e) => {
              // e.currentTarget.style.background = "transparent";
              // e.currentTarget.querySelector(".price-amt").style.color = svc.highlight
                // ? "#C49B55"
                // : "#A08050";
            }}
          >

            <div className=" absolute bottom-0 transition-all duration-200 ease-in group-hover:w-full left-0 COLOR_BG_RED h-[1px] w-[0px]">

            </div>
            {/* Left: index + label */}
            <div className="text-[#551301]" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{
                  fontSize: "14px",
                  // letterSpacing: "0.18em",
                  // color: "rgba(196,155,85,0.4)",
                  // fontFamily: "'Georgia', serif",
                  // minWidth: "20px",
                }}
              >
                {svc.id}
              </span>
              <span
              className="COLOR_TEXT_RED Font_YV"
                style={{
                  fontSize: "clamp(14px, 2.2vw, 16px)",
                  // color: svc.highlight ? "#5513018" : "#922608",
                  fontWeight: svc.highlight ? "400" : "400",
                  // letterSpacing: "0.02em",
                  // fontStyle: svc.highlight ? "italic" : "normal",
                }}
              >
                {svc.label}
              </span>
              {svc.highlight && (
                <span
                className="Font_YV "
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#551301",
                    border: "0.5px solid #551301",
                    padding: "1px 4px",
                    borderRadius: "1px",
                    
                    opacity: 0.85,
                  }}
                >
                  Full Package
                </span>
              )}
            </div>

            {/* Right: price */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "3px" }}>
              <span
              className="COLOR_TEXT_RED Font_Q"
                style={{
                  fontSize: "16px",
                  // color: "rgba(196,155,85,0.5)",
                  letterSpacing: "0.05em",
                  // fontFamily: "sans-serif",
                  marginRight: "2px",
                }}
              >
                ₹
              </span>
              <span
                className="price-amt COLOR_TEXT_RED Font_Q"
                style={{
                  fontSize: "clamp(16px, 2.5vw, 20px)",
                  // color: svc.highlight ? "#C49B55" : "#A08050",
                  fontWeight: "400",
                  letterSpacing: "0.03em",
                  transition: "color 0.3s ease",
                  fontFamily: "'Georgia', serif",
                }}
              >
                {svc.price.toLocaleString("en-IN")}
              </span>
            </div>
          </div>
        ))}
      </div>

     

      {/* Bottom ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "180px",
          background:
            "radial-gradient(ellipse at bottom, rgba(180,130,70,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default HairMakeupPage;