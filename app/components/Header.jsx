import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

import { motion } from 'motion/react'

const Header = ({isDarkMode}) => {
    return (


        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-3'>


            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full h-34 w-34 object-cover  ' />
            </div>

            <motion.h3 initial={{y:-20 , opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.6, delay : 0.3 }} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} flex items-end gap-2 text-xl md:text-2xl my-3 font-ovo`}>Hi!  I'm Eslavath Uday <Image src={assets.hand_icon} alt='' className=' w-6 mb-1.5' /></motion.h3>
            <motion.h1 initial={{y:-30 , opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.8, delay : 0.5 }} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} text-3xl sm:text-6xl lg:text-[66px]  font-ovo`} >Full-Stack Developer. </motion.h1>
             <h2 className= {`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} text-xl sm:text-4xl lg:text-[36px]  font-ovo`}>IIIT Ranchi</h2>
            <div>

            <p className=   {`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} max-w-2xl mx-auto font-ovo mt-2`}> build full-stack web applications using modern technologies. </p>
             <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-900'} max-w-2xl mx-auto font-ovo`}> Focused on creating scalable solutions, intuitive interfaces, and clean, maintainable code.</p>

            </div>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className={`${isDarkMode ? 'text-gray-200  border-gray-400/50' :  'bg-black text-gray-100 border-black'} px-8 py-3 border hover:text-blue-600 rounded-full  flex   items-center gap-2 font-ovo text-lg`}>Contact me  <Image className={`${isDarkMode ? "hover:text-blue-300" : ""} w-4`} src={assets.right_arrow_white} alt=''  /></a>
                <a href="/sample-resume.pdf" download className={` ${isDarkMode ? 'text-gray-700 border-gray-50  bg-gray-50' : 'border-gray-400/70 text-gray-900'} hover:text-blue-600 px-8 py-3 border rounded-full  flex items-center gap-2 font-ovo text-lg `}>My Resume  <Image src={assets.download_icon} alt='' className='w-4' /></a>
            </div>


        </div>
    )
}

export default Header








