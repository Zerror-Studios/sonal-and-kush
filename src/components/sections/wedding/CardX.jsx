"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CardX = () => {
  useEffect(() => {
    if (window.innerWidth < 750) return;
    const images = document.querySelectorAll(".imgQ1");

    images.forEach((img) => {
      const strength = 20; // magnetic move
      const rotateStrength = 10; // 3D tilt

      const moveImage = (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const moveX = percentX * strength;
        const moveY = percentY * strength;

        const rotateY = percentX * rotateStrength;
        const rotateX = -percentY * rotateStrength;

        gsap.to(img, {
          x: moveX,
          y: moveY,
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.3,
          ease: "power3.out",
          transformPerspective: 800,
          transformOrigin: "center",
        });
      };

      const resetImage = () => {
        gsap.to(img, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      img.addEventListener("mousemove", moveImage);
      img.addEventListener("mouseleave", resetImage);
    });
  }, []);

  useGSAP(() => {
    gsap.from(".imgQ1", {
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".imgQ1",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers:true
      },
    });
    gsap.from(".imgQ2", {
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".imgQ2",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers:true
      },
    });
    gsap.from(".imgQ3", {
      y: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".imgQ3",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers:true
      },
    });
  }, []);

  return (
    <>
      {/* For Mobile */}
      <div className="w-full h-fit flex flex-col z-20 pt-20 sm:hidden COLOR_BG_CREAM space-y-10 lg:space-y-20 lg:pt-20 ">
        {/* div-1 : Sangeet */}
        <div className="w-full h-fit  max-sm:min-h-fit  items-center flex max-sm:flex-col  ">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 1</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold"></span> 21/09/26
              </span>
              <span>
                <span className="font-semibold mt-1 "></span> Time: 8:00 PM
              </span>
              <span>
                <span className="font-semibold mt-1 "></span> Venue: Parterre
              </span>
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex-wrap  my-6 uppercase px-[10%] text-center flex justify-center items-center">
              Sangeet
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              A night of music, dance, and pure celebration! Join us as family
              and friends come together to perform, celebrate our love story,
              and dance the night away.
            </p>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              (Join us in celebrating in joyful colors. We kindly request guests not to wear white, red and gold.)
            </p>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon3.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        {/* div-2a : Haldi + Hi-Tea & Safa Bandi */}
        <div className="w-full h-fit  max-sm:min-h-fit  flex max-sm:flex-col items-center ">
          {/* Haldi */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 2</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" uppercase flex flex-col">
                <span className="font-semibold"></span> 22/09/26
                <span className="font-semibold mt-1"></span> Time: 11:30 AM
                <span className="font-semibold mt-1"></span> Venue: English Garden
              </span>
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex flex-wrap justify-center items-center  my-6 uppercase px-[10%] text-center ">
              Haldi
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              A celebration dipped in sunshine and laughter. Vibrant traditions,
              heartfelt blessings, and playful moments mark the joyful beginning
              of our wedding festivities.
            </p>
            
            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              (Join us for our vibrant, color-themed celebration . We kindly request guests to wear yellow)
            </p>
          </div>

          {/* Hi-Tea & Safa Bandi */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex flex-wrap justify-center items-center  my-6 uppercase px-[10%] text-center ">
              Hi-Tea & Safa Bandi
            </h5>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className="uppercase font-semibold">Groom's Side</span>
              <span className=" uppercase flex flex-col">
                Time: 5:00 PM
                <span className="mt-1">Venue: The Great Park Walkway</span>
              </span>
              <span className="uppercase font-semibold mt-2">Bride's Side</span>
              <span className=" uppercase flex flex-col">
                Time: 5:30 PM
                <span className="mt-1">Venue: To Be Decided</span>
              </span>
            </div>

            <p className=" Font_YV mt-4 leading-relaxed max-w-md text-center mx-auto">
              A traditional pre-wedding gathering with an elegant hi-tea and the
              ceremonial safa bandi, as the families come together before the
              wedding procession.
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        {/* div-2b : Varmala, Wedding Ceremony & Dinner + The Afterglow */}
        <div className="w-full h-fit  max-sm:min-h-fit  flex max-sm:flex-col items-center flex-row-reverse  ">
          {/* Varmala, Wedding Ceremony & Dinner */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex flex-wrap justify-center items-center  my-6 uppercase px-[10%] text-center ">
              Varmala, Wedding Ceremony & Dinner
            </h5>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" uppercase flex flex-col">
                <span className="font-semibold"></span> 22/09/26
                <span className="font-semibold mt-1"></span> Time: 7:00 PM
                <span className="font-semibold mt-1"></span> Venue: Veranda & Restaurant
              </span>
            </div>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              An electrifying procession of music, rhythm, and celebration.
              Dancing through the celebrations in high-spirited joy as the groom
              makes his grand arrival, followed by the exchange of garlands, the
              wedding ceremony, and a joyous dinner together.
            </p>
          </div>

          {/* The Afterglow */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex flex-wrap justify-center items-center  my-6 uppercase px-[10%] text-center ">
              The Afterglow
            </h5>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" uppercase flex flex-col">
                <span className="font-semibold"></span> 22/09/26
                <span className="font-semibold mt-1"></span> Time: 11:30 PM
                <span className="font-semibold mt-1"></span> Venue: Restaurant
              </span>
            </div>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              An intimate and relaxed after-party to unwind, celebrate, and keep
              the festivities going late into the night.
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        {/* div-2c : icon image */}
        <div className="w-full h-fit  max-sm:min-h-fit  items-center flex max-sm:flex-col  ">
          <div className="w-full max-sm:w-full h-fit max-sm:h-fit  max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon4.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        <div className="w-full h-fit  max-sm:min-h-fit   flex items-center max-sm:flex-col ">
          {/* Pool Party */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 3</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" flex flex-col uppercase">
                <span className="font-semibold"></span> 23/09/26
                <span className="font-semibold"></span> Time: 12:00 PM
                <span className="font-semibold"></span> Venue: Poolside
              </span>
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              Pool Party
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Sun, splashes, and effortless fun. A relaxed poolside celebration
              to soak in the final moments of the wedding festivities together.
            </p>
          </div>

          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              Hi-Tea
            </h5>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" flex flex-col uppercase">
                <span className="font-semibold"></span> 23/09/26
                <span className="font-semibold mt-1"></span> Time: 4:30 PM
                <span className="font-semibold mt-1"></span> Venue: Cerulean
              </span>
            </div>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              A relaxed gathering with refreshing teas, delicious bites, and
              warm conversations as we transition into the evening
              celebrations.
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        {/* div-3b : Cocktail Hour + Reception */}
        <div className="w-full h-fit  max-sm:min-h-fit   flex items-center max-sm:flex-col flex-row-reverse ">
          {/* Cocktail Hour */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              Cocktail Hour
            </h5>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" flex flex-col uppercase">
                <span className="font-semibold"></span> 23/09/26
                <span className="font-semibold mt-1"></span> Time: 6:00 PM
                <span className="font-semibold mt-1"></span> Venue: Veranda
              </span>
            </div>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              An elegant pre-reception gathering with cocktails, conversations,
              and a chance to mingle before the evening's main celebration.
            </p>
          </div>

          {/* Reception */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              Reception
            </h5>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" flex flex-col uppercase">
                <span className="font-semibold"></span> 23/09/26
                <span className="font-semibold mt-1"></span> Time: 7:30 PM
                <span className="font-semibold mt-1"></span> Venue: The Great Park
              </span>
            </div>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              A night of glamour, gratitude, and celebration. An unforgettable
              evening of dining, speeches, music, and dancing as the newlyweds
              begin their next chapter.
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#5513013b] md:hidden mt-15"></div>
        </div>

        {/* div-3c : After Party + image */}
        <div className="w-full h-fit  max-sm:min-h-fit   flex items-center max-sm:flex-col ">
          {/* After Party */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[2vh] max-sm:px-[20px] max-lg:px-[4vw] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              After Party
            </h5>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" flex flex-col uppercase">
                <span className="font-semibold"></span> 23/09/26
                <span className="font-semibold mt-1"></span> Time: 11:30 PM
                <span className="font-semibold mt-1"></span> Venue: Ballroom
              </span>
            </div>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              Where the formalities fade and the real fun begins. An electric
              night of music, signature cocktails, and uninhibited celebration
              as we dance, laugh, and make memories long past midnight.
            </p>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-fit max-sm:h-fit  max-sm:py-[0vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-2/3 max-sm:w-1/2 h-fit  flex flex-col justify-center items-center img3d-wrapper pb-10">
              <img
                src={`/imgs/icon1.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////////////////////////////////////////////////</> */}

      {/* For PC */}
      <div className="w-full h-fit flex flex-col z-20 max-md:overflow-hidden max-sm:hidden ">
        {/* div-1 Sangeet */}
        <div className="w-full md:min-h-screen relative flex max-sm:flex-col-reverse ">
          {/* left */}
          <div className="w-1/2 md:min-h-screen  max-sm:w-full  COLOR_BG_CREAM relative z-50 top-0 mt-20 md:mt-0 mr-auto max-sm:px-[0px] max-lg:px-[4vw]">
            {/* Day md:sticky */}
            <div className="w-full h-fit md:sticky top-0 left-0 flex justify-center items-center md:mt-[5vh] md:pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 ">
              <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 1</h2>
            </div>

            {/* 1 */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Sangeet
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 21/09/26
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Time: 8:00 PM
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Venue: Parterre
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                A night of music, dance, and pure celebration! Join us as family
                and friends come together to perform, celebrate our love story,
                and dance the night away.
              </p>
              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
               (Join us in celebrating in joyful colors. We kindly request guests not to wear white, red and gold.)
              </p>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 md:h-screen   max-sm:w-full max-md:mt-15  md:sticky md:top-0 md:right-0 flex justify-center items-center md:bg-[#551301]">
            <div className="w-1/2 md:h-fit  justify-center img3d-wrapper  ">
              <img
                src={`/imgs/icon3.png`}
                alt="Img"
                className="w-full h-full object-cover imgQ1 imgQ2 object-center md:mt-4"
              />
            </div>
          </div>
        </div>

        {/* Div - 2 : Haldi, Hi-Tea & Safa Bandi, Varmala/Wedding/Dinner, Afterglow */}
        <div className="w-full md:min-h-screen  relative flex max-sm:flex-col ">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full max-sm:h-fit max-sm:py-[0vh]  max-md:m-10 h-screen md:sticky top-0 left-0 flex justify-center items-center md:bg-[#551301]">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper  items-center">
              <img
                src={`/imgs/icon4.png`}
                alt="Img"
                className="w-full object-cover imgQ1 imgQ2 object-center mt-4"
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-1/2 max-sm:w-full max-sm:h-fit min-h-screen  COLOR_BG_CREAM relative top-0 md:ml-auto max-sm:px-[0px] max-lg:px-[4vw]">
            {/* Day md:sticky */}
            <div className="w-full h-fit md:sticky top-0 left-0 flex justify-center items-center mt-[5vh] pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 ">
              <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 2</h2>
            </div>

            {/* Haldi */}
            <div className="w-full max-sm:w-full h-fit md:py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Haldi
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold"></span> 22/09/26
                </span>
                <span>
                  <span className="font-semibold"></span> Time: 11:30 AM
                </span>
                <span>
                  <span className="font-semibold"></span> Venue: English Garden
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                A celebration dipped in sunshine and laughter. Vibrant
                traditions, heartfelt blessings, and playful moments mark the
                joyful beginning of our wedding festivities.
              </p>
              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
               (Join us for our vibrant, color-themed celebration . We kindly request guests to wear yellow)
              </p>
            </div>

            {/* Hi-Tea & Safa Bandi */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Hi-Tea & Safa Bandi
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className="font-semibold uppercase">Groom's Side</span>
                <span className="uppercase">Time: 5:00 PM</span>
                <span className="uppercase">Venue: The Great Park Walkway</span>
                <span className="font-semibold uppercase mt-3">Bride's Side</span>
                <span className="uppercase">Time: 5:30 PM</span>
                <span className="uppercase">Venue: To Be Decided</span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                A traditional pre-wedding gathering with an elegant hi-tea and
                the ceremonial safa bandi, as the families come together before
                the wedding procession.
              </p>
            </div>

            {/* Varmala, Wedding Ceremony & Dinner */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Varmala, Wedding Ceremony & Dinner
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold"></span> 22/09/26
                </span>
                <span>
                  <span className="font-semibold"></span> Time: 7:00 PM
                </span>
                <span>
                  <span className="font-semibold"></span> Venue: Veranda & Restaurant
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                An electrifying procession of music, rhythm, and celebration.
                Dancing through the celebrations in high-spirited joy as the
                groom makes his grand arrival, followed by the exchange of
                garlands, the wedding ceremony, and a joyous dinner together.
              </p>
            </div>

            {/* The Afterglow */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] pb-[30vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                The Afterglow
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold"></span> 22/09/26
                </span>
                <span>
                  <span className="font-semibold"></span> Time: 11:30 PM
                </span>
                <span>
                  <span className="font-semibold"></span> Venue: Restaurant
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                An intimate and relaxed after-party to unwind, celebrate, and
                keep the festivities going late into the night.
              </p>
            </div>
          </div>
        </div>

        {/* Div - 3 : Pool Party, Hi-Tea, Cocktail Hour, Reception, After Party */}
        <div className="w-full md:min-h-screen relative flex max-sm:flex-col-reverse">
          {/* left */}
          <div className="w-1/2 md:min-h-screen max-sm:w-full  COLOR_BG_CREAM relative z-50 max-md:mt-7 top-0 mr-auto max-sm:px-[0px] max-lg:px-[4vw]">
            {/* Day md:sticky */}
            <div className="w-full h-fit md:sticky top-0 left-0 flex justify-center items-center max-sm:mt-[2vh] md:mt-[5vh] pt-[5vw] pb-[2.5vw] COLOR_BG_CREAM z-60 ">
              <h2 className="Font_Q COLOR_TEXT_RED uppercase">Day 3</h2>
            </div>

            {/* Pool Party */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Pool Party
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 23/09/26
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Time: 12:00 PM
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Venue: Poolside
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Sun, splashes, and effortless fun. A relaxed poolside
                celebration to soak in the final moments of the wedding
                festivities together.
              </p>
            </div>

            {/* Hi-Tea */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Hi-Tea
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 23/09/26
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Time: 4:30 PM
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Venue: Cerulean
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                A relaxed gathering with refreshing teas, delicious bites, and
                warm conversations as we transition into the evening
                celebrations.
              </p>
            </div>

            {/* Cocktail Hour */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Cocktail Hour
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 23/09/26
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Time: 6:00 PM
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Venue: Veranda
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                An elegant pre-reception gathering with cocktails,
                conversations, and a chance to mingle before the evening's main
                celebration.
              </p>
            </div>

            {/* Reception */}
            <div className="w-full max-sm:w-full h-fit py-[10vh] max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                Reception
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span>
                  <span className="font-semibold"></span> 23/09/26
                </span>
                <span>
                  <span className="font-semibold"></span> Time: 7:30 PM
                </span>
                <span>
                  <span className="font-semibold"></span> Venue: The Great Park
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                A night of glamour, gratitude, and celebration. An unforgettable
                evening of dining, speeches, music, and dancing as the newlyweds
                begin their next chapter.
              </p>
            </div>

            {/* After Party */}
            <div className="w-full max-sm:w-full h-fit md:py-[10vh]  max-sm:h-fit max-sm:py-[5vh] max-sm:px-[20px] z-50  flex relative flex-col COLOR_TEXT_RED justify-center items-center">
              <h5 className="Font_Q text-[40px] max-sm:leading-[45px] uppercase mt-6 max-sm:px-[1vw] max-sm:text-center ">
                After Party
              </h5>
              <div className=" text-[16px] mt-6 flex flex-col justify-center max-sm:text-center items-center Font_YV gap-1">
                <span className=" uppercase">
                  <span className="font-semibold"></span> 23/09/26
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Time: 11:30 PM
                </span>
                <span className=" uppercase">
                  <span className="font-semibold"></span> Venue: Ballroom
                </span>
              </div>

              <p className=" Font_YV mt-6 leading-relaxed max-w-md text-center mx-auto">
                Where the formalities fade and the real fun begins. An electric
                night of music, signature cocktails, and uninhibited celebration
                as we dance, laugh, and make memories long past midnight.
              </p>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 md:h-screen max-sm:w-full max-sm:h-fit md:sticky top-0 right-0  flex justify-center items-center md:bg-[#551301]">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper  items-center">
              <img
                src={`/imgs/icon1.png`}
                alt="Img"
                className="w-full object-cover imgQ1 imgQ2 object-center md:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardX;