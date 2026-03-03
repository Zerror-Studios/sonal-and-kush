"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const WeddingHome = () => {
  // const WcontainerRef = useRef(null)
  // const WimageRef = useRef(null)

  useGSAP(() => {
    // gsap.to(`.NN`, {
    //   height:'100vh',
    //   width:'100%',
    //   ease:'none',
    //   scrollTrigger: {
    //     trigger:'.nk',
    //     start: 'top top',
    //     end: 'top -10%',
    //     scrub: true,
    //     // markers:true
    //   },
    // })
    gsap.to(`.nk`, {
      padding: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".nk",
        start: "top top",
        end: "top -10%",
        scrub: true,
        // markers:true
      },
    });
  }, []);

  // PRE-PRE-ANIMATION
  useGSAP(() => {
    gsap.to(".WEDMAIM", {
      delay: 0.1,
      y: 0,
      duration: 1,
      //  stagger:{
      //     each:'0.2',
      //     ease:'none'
      //  },
      ease: "power-in",
    });
  }, []);

  return (
    <div className="w-full  h-screen relative   flex justify-center items-end   z-[-1] COLOR_BG_CREAM ">
      <div className="w-full NN h-screen overflow-hidden flex relative  ">
        <img
          src={`/imgs/save3.webp`}
          className="w-full h-full object-cover object-[50%_18%]"
          alt="Img"
        />
      </div>

      <div className="w-fit flex flex-col absolute bottom-0 max-sm:bottom-[0%]  left-[4%] max-sm:left-1/2 max-sm:-translate-x-1/2  -translate-y-1/2 COLOR_TEXT_CREAM">
        <h1 className="Font_YIV text-[7rem] translate-y-10 leading-[8rem] max-sm:translate-y-5 max-sm:text-[15vw] max-sm:leading-[16vw] overflow-hidden">
          <span className=" flex translate-y-100 WEDMAIM">The</span>
        </h1>
        <h1 className="Font_Q text-[7rem] leading-[8rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase overflow-hidden">
          <span className=" flex translate-y-100 WEDMAIM">Wedding</span>
        </h1>
        <h1 className="Font_Q text-[7rem] leading-[8rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase overflow-hidden">
          <span className=" flex translate-y-100 WEDMAIM">ITINERARY.</span>
        </h1>
      </div>
    </div>
  );
};

export default WeddingHome;
