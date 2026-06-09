import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ isDarkMode, setisDarkMode }) => {



    const [isScroll, setisScroll] = useState(false)

    const sideMenuRef = useRef()


    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setisScroll(true)
            } else {
                setisScroll(false)
            }
        })
    }, [])



    return (
        <>




            <nav className={`w-full fixed px-5 lg:p-2 xl:px-[8%] py-4 flex items-center justify-between z-60 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} ${isScroll ? 'bg-white/60 backdrop-blur-lg shadow-sm dark:bg-[#0b1220]/70 dark:border-b dark:border-white/10' : ''}`}>
                <a href="#top"><Image src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt="Logo" /></a>


                <ul className={`relative overflow-hidden hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "": "shadow-sm bg-white/50 dark:border dark:border-white/30 dark:bg-transparent"}`}>
                    {!isScroll && (  <Image src={assets.header_bg_color} alt="" className="absolute inset-0 w-full h-full object-cover -z-10 dark:hidden"/>)}
                    <li><a className='font-ovo' href="#top">Home</a></li>
                    <li><a className='font-ovo' href="#about">About me</a></li>
                    <li><a className='font-ovo' href="#skills">Skills</a></li>
                    <li><a className='font-ovo' href="#work">My Work</a></li>
                    <li><a className='font-ovo' href="#contact">Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setisDarkMode(prev => !prev)}>
                        <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} className='w-6' alt="Menu Icon" />
                    </button>

                    <a href="#contact" className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-500 rounded-full ml-3 font-ovo">contact<Image src={assets.arrow_icon} className='w-3' alt="Arrow" /></a>


                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt="Menu Icon" className='w-6 ' />
                    </button>
                </div>

                {/*------------ Mobile Menu--------- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64  top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                    <div onClick={closeMenu} className=' absolute right-6 top-6 '>
                        <Image src={assets.close_black} alt='Close Menu' className=' w-5 cursor-pointer' />
                    </div>

                    <li><a className='font-ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#skills">Skills</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar
