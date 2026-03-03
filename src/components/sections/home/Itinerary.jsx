"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { FaStarOfLife } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Itinerary = () => {
  useEffect(() => {
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

  return (
    <>
      <div className="w-full -h-fit COLOR_BG_CREAM flex flex-col relative px-10 overflow-hidden">
        {/* Titile */}
        <div className="w-full h-fit  max-sm:h-fit flex justify-center  items-center mt-[10vh] max-sm:mt-[10vh] mb-[1vh] max-sm:mb-[10vh] ImgTDcont">
          <div className="w-fit flex flex-col COLOR_TEXT_RED">
            <h1 className="Font_YIV text-[7rem] translate-y-10 max-sm:translate-y-5 leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw]">
              The
            </h1>
            <h1 className="Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase">
              Wedding
            </h1>
            <h1 className="Font_Q text-[7rem] leading-[7rem] max-sm:text-[15vw] max-sm:leading-[16vw] uppercase">
              ITINERARY.
            </h1>
            <div className="Font_YV mt-5 w-full flex flex-col text-center">
              <p>A series of sacred ceremonies and joyful </p>
              <p>celebrations as we begin our new journey together</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================================ */}

      <div className="w-full h-fit flex flex-col z-20 COLOR_BG_CREAM  ">
        {/* div-1 */}
        <div className="w-full min-h-screen  max-sm:min-h-fit  flex max-sm:flex-col max-sm:py-[5vh]">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 1</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold"></span> 09/21/2026
              </span>
              {/* <span>
                <span className="font-semibold"></span> 11:00 AM - 7:30 PM
              </span>
              <span>
                <span className="font-semibold"></span> Raffles Udaipur
              </span> */}
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex-wrap  my-6 uppercase px-[10%] text-center flex justify-center items-center">
              Checkins <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Vidhi  <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Sangeet
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              The celebrations begin as we gather, reconnect, and ease into a
              weekend of love and joy. From sacred rituals to a night of music
              and dancing, Day 1 sets the perfect tone for the festivities
              ahead.
            </p>

            {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize ">
              (No white red or gold )
            </span> */}
            <div className="w-full h-fit flex gap-5 justify-center items-center mt-5">
              <Link href="/wedding">
                <button
                  className="button"
                  style={{ backgroundColor: "#551301" }}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy "
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Explore Day 1
                </button>
              </Link>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:pb-[10vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon3.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>

        {/* div-2  */}
        <div className="w-full min-h-screen  max-sm:min-h-fit  flex max-sm:flex-col flex-row-reverse max-sm:py-[5vh]">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 2</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span className=" uppercase">
                <span className="font-semibold"></span> 09/22/2026
              </span>
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] max-sm:text-center flex flex-wrap justify-center items-center  my-6 uppercase px-[10%] text-center ">
              Chooda <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Haldi <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Safa Bandhi <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Baraat <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Varmala <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Phere
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
              A day rooted in tradition and bursting with celebration. From heartfelt rituals and vibrant ceremonies to the sacred vows and an electrifying after-party, this is where our forever truly begins.
            </p>

            {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize ">
              (No white red or gold )
            </span> */}
            <div className="w-full h-fit flex gap-5 justify-center items-center mt-5">
              <Link href="/wedding">
                <button
                  className="button"
                  style={{ backgroundColor: "#551301" }}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy "
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  Discover Day 2
                </button>
              </Link>

              {/* --------------------------------------------- */}
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[0vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-2/3 max-sm:w-1/2 h-fit  flex flex-col justify-center items-center img3d-wrapper">
              <img
                src={`/imgs/icon1.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>

        {/* div-3 */}
        <div className="w-full min-h-screen  max-sm:min-h-fit  flex max-sm:flex-col max-sm:py-[5vh]">
          {/* Left */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:py-[2vh] max-sm:px-[20px] flex relative COLOR_BG_CREAM flex-col COLOR_TEXT_RED justify-center items-center">
            <p className="Font_YV font-semibold uppercase ">Day 3</p>

            <div className=" text-[16px] mt-1 flex flex-col Font_YV gap-1 max-sm:text-center justify-center items-center">
              <span>
                <span className="font-semibold"></span> 09/23/2026
              </span>
            </div>

            <h5 className="Font_Q text-[40px] leading-[45px] flex flex-wrap justify-center items-center max-sm:text-center  my-6 uppercase  px-[10%] text-center">
              Pool Party <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Cocktail Hour <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> Reception <span className="mx-2 text-[12px] leading-[12px]"><FaStarOfLife/></span> After Party
            </h5>

            <p className=" Font_YV mt-2 leading-relaxed max-w-md text-center mx-auto">
             Sunlit moments give way to glamour and grandeur. A day of relaxed fun, heartfelt toasts, elegant celebrations, and dancing late into the night as we celebrate our new chapter together.
            </p>

            {/* <span className="Text_YV font-semibold py-4 text-[14px] capitalize ">
              (No white red or gold )
            </span> */}
            <div className="w-full h-fit flex gap-5 justify-center items-center mt-5">
              <Link href="/wedding">
                <button
                  className="button"
                  style={{ backgroundColor: "#551301" }}
                >
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="10"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="10"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy "
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  View Day 3
                </button>
              </Link>
            </div>
          </div>

          {/* right */}
          <div className="w-1/2 max-sm:w-full h-screen max-sm:h-fit max-sm:pb-[10vh] max-sm:px-[20px] COLOR_TEXT_RED flex flex-col px-12 justify-center items-center">
            <div className="w-1/2 h-fit  flex flex-col justify-center img3d-wrapper items-center">
              <img
                src={`/imgs/icon4.png`}
                alt="Img"
                className="w-full imgQ1 object-cover object-center mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Itinerary;
