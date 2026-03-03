'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { RiMenu4Fill } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { usePathname } from 'next/navigation'
import { navigate } from 'next/dist/client/components/segment-cache/navigation'

gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current) return

    let lastScroll = 0

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const currentScroll = self.scroll()

        if (currentScroll > lastScroll && currentScroll > 100) {
          // Scroll DOWN → hide navbar
          gsap.to(navRef.current, {
            y: '-300%',
            duration: 0.4,
            ease: 'power3.out',
          })
        } else {
          // Scroll UP → show navbar
          gsap.to(navRef.current, {
            y: '0%',
            duration: 0.4,
            ease: 'power3.out',
          })
        }

        lastScroll = currentScroll
      },
    })

    return () => {
      trigger.kill()
    }
  }, [])

  const [isNavOpen, SetIsNavOpen] = useState(false)

  const clickCheck = () => {
    if (isNavOpen == false) {

      const NT = gsap.timeline()
      NT.to('.MOBILENAV', {
        left: '0%',
        duration: 0.2,
        ease: 'none',
        // onComplete: () => SetIsNavOpen(true)
      }, 'a11')
      NT.to('.smNavItem', {
        opacity: 1,
        stagger: {
          each: 0.09,
          ease: 'none'
        },
        duration: 0.2,
        ease: 'none',
        // onComplete: () => SetIsNavOpen(true)
      }, 'a11')
      SetIsNavOpen(true)
    }
    else {

      const NTB = gsap.timeline()
      NTB.to('.MOBILENAV', {
        left: '100%',
        duration: 0.2,
        ease: 'none',
        // onComplete: () => SetIsNavOpen(false)
      }, 'a1a')
      NTB.to('.smNavItem', {
        opacity: 0,
        stagger: {
          each: 0.09,
          ease: 'none'
        },
        duration: 0.2,
        ease: 'none',
        // onComplete: () => 
      }, 'a1a')
      SetIsNavOpen(false)
    }
  }

  const pathname = usePathname()
  console.log(pathname)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <div ref={navRef} className='w-full h-[46px] mt-10 flex justify-between fixed top-0 left-0   items-center z-100 px-20'>
      {/* Left */}
      <div className='w-1/3 h-full items-center max-md:hidden flex justify-between uppercase text-[16px] COLOR_TEXT_RED '>
        <Link href={`/`} ><div className={`w-fit ${pathname === '/' && (' border-b border-[#551301]')} h-fit flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> The wedding</div></Link>
        <Link href={`/wedding`} ><div className={`w-fit h-fit ${pathname === '/wedding' && (' border-b border-[#551301]')}  flex flex-col group COLOR_TEXT_RED relative  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> Itinerary</div></Link>
      </div>

      {/* Logo */}
      <div className='w-fit h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Link href={`/`} ><img src={`/imgs/logo/logo.png`} alt="Logo" className='h-full object-cover object-center' /></Link>
      </div>

      {/* Right */}
      <div className='w-1/3  h-full items-center max-md:hidden flex justify-between uppercase text-[16px]   COLOR_TEXT_RED'>
        <Link href={`/venue`} ><div className={`w-fit h-fit ${pathname === '/venue' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Wedding Hotel</div></Link>

        {/* <Link href={`/explore`} ><div className={`w-fit h-fit ${pathname === '/explore' && (' border-b border-[#551301]')}  flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Explore Udaipur</div></Link> */}
        {/* <Link href={`/itinerary`} ><div className={`w-fit h-fit ${pathname === '/itinerary' && (' border-b border-[#551301]')}  flex flex-col group relative COLOR_TEXT_RED select-none cursor-pointer`}> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> Services</div></Link> */}
        {/* <Link href={`/#FAQ`} ><div className='w-fit h-fit flex flex-col group relative  select-none COLOR_TEXT_REDcursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_TEXT_RED'></div> FAQ</div></Link> */}
        {/* BTN */}
        <div   className='w-[114px] h-[46px] max-md:hidden select-none cursor-pointer flex flex-col justify-center items-center px-[17px] py-[6px] text-[16px] text-[white] COLOR_BG_RED opacity-80 group '>
          <div className='w-fit'>
            RSVP
          <div className='w-[0px] group-hover:w-full transition-all duration-150 ease-in h-[1px] bg-white'></div>
          </div>
        </div>


      </div>

      <div onClick={clickCheck} htmlFor="check" className=' absolute top-1 right-8 md:hidden'>
        {isNavOpen == false ? (<><RiMenu4Fill className='text-[2rem]  text-[#551301]' /></>) : (<><RiMenu3Line className='text-[2rem] text-[#551301] ' /></>)}
      </div>

      {/* MOBILENAV */}
      <div className='w-full flex flex-col md:hidden justify-center text-[1.5rem] leading-[1.5rem] uppercase gap-4 items-center MOBILENAV h-screen COLOR_BG_CREAM absolute -top-10 left-[150%] z-[-1]'>
        <Link href={`/`}><div onClick={clickCheck} className='w-fit h-fit flex flex-col smNavItem opacity-0 group relative COLOR_TEXT_RED  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>wedding</div></Link>
        <Link href={`/wedding`}><div onClick={clickCheck} className='w-fit h-fit flex smNavItem opacity-0 flex-col group COLOR_TEXT_RED relative  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> Itinerary</div></Link>
        <Link href={`/venue`}><div onClick={clickCheck} className='w-fit h-fit flex smNavItem opacity-0 flex-col group relative COLOR_TEXT_RED  select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> Wedding Hotel</div></Link>
        {/* <Link href={`/itinerary`}><div onClick={clickCheck} className='w-fit h-fit smNavItem opacity-0 flex flex-col group relative COLOR_TEXT_RED select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div> Services</div></Link> */}
        {/* <Link href={`/explore`}><div onClick={clickCheck} className='w-fit h-fit smNavItem opacity-0 flex flex-col group relative  COLOR_TEXT_RED select-none cursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_BG_RED'></div>Explore</div></Link> */}
        {/* <div className='w-fit h-fit flex flex-col group relative  select-none COLOR_TEXT_REDcursor-pointer'> <div className=' absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full duration-200 ease-out COLOR_TEXT_RED'></div> FAQ</div> */}
        {/* BTN */}
        <div className='w-[114px] h-[46px] max-md:hidden select-none cursor-pointer flex flex-col justify-center items-center px-[17px] py-[6px] text-[16px] text-[white] COLOR_TEXT_RED'>
          RSVP
          
        </div>
      </div>
    </div>
  )
}

export default NavBar
