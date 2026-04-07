"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const PasswordLoader = () => {
  const [showPassword, setShowPassword] = useState(false);
  const WebsitePassword = "Sonal";
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });
  const [inputPassword, setInputPassword] = useState("");
  const [showPasswordLoader, setShowPasswordLoader] = useState(true);

  // ✅ Check sessionStorage on mount
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("authenticated");

    if (isAuthenticated === "true") {
      setShowPasswordLoader(false);
    }
  }, []);

  const SubmitPassword = (e) => {
    e.preventDefault();

    if (inputPassword === WebsitePassword) {
      sessionStorage.setItem("authenticated", "true");
      setShowPasswordLoader(false);
    } else {
      setToast({
        show: true,
        message: "Wrong Password",
      });

      // auto hide after 2.5 sec
      setTimeout(() => {
        setToast({ show: false, message: "" });
      }, 2500);
    }
  };

  useGSAP(() => {
    gsap.to(".passDiv", {
      opacity: 1,
      delay: 1,
      duration: 1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    if (showPasswordLoader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      if (window.lenis) lenis.scrollTo(0, { immediate: true });
    }

    // cleanup (important)
    return () => {
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
      if (window.lenis) lenis.scrollTo(0, { immediate: true });
    };
  }, [showPasswordLoader]);

  useEffect(() => {
    if (toast.show) {
      gsap.fromTo(
        ".toastCard",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
      );
    }
  }, [toast]);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center transition-all duration-300 ${showPasswordLoader ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed top-0 left-0 z-[9999] COLOR_BG_RED`}
    >
      <div className="fixed top-5 right-5 z-[10000]">
        {toast.show && (
          <div className="toastCard COLOR_BG_CREAM border-l-4 border-red-500 shadow-lg px-4 py-3 rounded-lg flex items-center gap-3">
            <span className="text-red-500 font-bold">⚠</span>

            <p className=" COLOR_TEXT_RED Font_Q text-sm! font-semibold tracking-wider!">{toast.message}</p>
          </div>
        )}
      </div>
      <div className="passDiv opacity-0 w-fit max-sm:w-[90vw] COLOR_BG_CREAM  shadow-xl p-6 max-sm:p-4 text-center">

        {/* Top Text */}
        <p className="Font_YV  tracking-wide  mb-5 max-sm:mb-2">
          A wedding is a celebration of love
        </p>
        <h2 className="Font_Q uppercase  COLOR_TEXT_RED mb-8 max-sm:mb-4">
          Sonal & Kush
        </h2>

        {/* Logo */}
        <img
          className="w-[25vw] max-sm:w-full mx-auto "
          src="/imgs/logo/og.png"
          alt="logo"
        />

        {/* Form */}
        <form onSubmit={SubmitPassword} className="space-y-4 mt-4">

          <div className="relative w-full">
            <input
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your access code"
              className="w-full px-2 py-1 border-b font-semibold tracking-wider outline-none transition-all Font_YV pr-8"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition"
            >
              {!showPassword ? <RiEyeOffLine size={18} /> : <RiEyeLine size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-3 cursor-pointer uppercase  COLOR_BG_RED text-white Font_YV tracking-wide hover:opacity-90 transition-all duration-300 "
          >
            Unlock Invitation
          </button>

        </form>


      </div>
    </div>
  );
};

export default PasswordLoader;
