"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PasswordLoader = () => {
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
      className={`w-full h-screen flex items-center justify-center transition-all duration-300 ${
        showPasswordLoader ? "opacity-100" : "opacity-0 pointer-events-none"
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
      <div className="COLOR_BG_CREAM p-6 rounded-xl shadow-lg text-center passDiv opacity-0">
        <h2 className=" mb-8 Font_Q COLOR_TEXT_RED ">Enter Password</h2>

        <form onSubmit={SubmitPassword} className="space-y-5">
          <input
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
            className="border px-3 py-2 rounded w-full"
          />

          <button
            type="submit"
            className="COLOR_BG_RED text-white px-4 py-2 rounded w-full cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordLoader;
