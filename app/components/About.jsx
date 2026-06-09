import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
    return (
        <div id='about' className='py-24 px-4 overflow-hidden'>

            <div className="max-w-6xl mx-auto">

                <div className="mb-12 text-left" style={{ opacity: 1, transform: 'none' }}>
                    <p className={`text-xs font-bold tracking-widest ${isDarkMode ? "text-gray-300" : "text-gray-900"} uppercase mb-3 ml-1`}>About</p>
                    <h2 className={`text-4xl sm:text-5xl font-ovo ${isDarkMode ? "text-gray-300" : "text-gray-900"} mb-8`}>Me</h2>
                </div>

                <div className="max-w-5xl mx-auto" style={{ opacity: 1, transform: 'none' }}>

                    <div className={`bg-card rounded-3xl border ${isDarkMode ? 'border-gray-700 bg-gray-800 ' : 'border-gray-300/80 bg-white '} hover:shadow-md hover:shadow-blue-400/20 hover:border-blue-400/30 transition-all duration-300 p-6 sm:p-10`}  style={{ opacity: 1, transform: 'none' }} >


                        <div className="flex flex-col md:flex-row gap-10 md:gap-14">

                            <div className="flex-shrink-0 flex justify-center md:justify-start">


                            <div className="w-56 h-56 md:w-72 md:h-92 rounded-3xl overflow-hidden border-4 border-gray-300/90 bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-slate-800 dark:to-slate-900 shadow-lg shrink-0 relative flex items-center justify-center group">

                                <div className="absolute inset-0 bg-blue-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                <img alt="eslavath uday" loading="lazy" decoding="async" data-nimg="fill" className="object-cover transform group-hover:scale-110 transition-transform duration-500" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} src="/me.jpeg"></img>
                            </div>

                            </div>


                            <div className="flex-grow" style={{ opacity: 1 }}>

                                <h3 className={`text-3xl font-bold ${isDarkMode ? "text-gray-300" : "text-gray-800"} mb-6 relative inline-block`} style={{ opacity: 1, transform: 'none' }}>Eslavath Uday
                                    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-400 rounded-full"></span>
                                </h3>


                                <div className={`space-y-4 text-[15px] sm:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed mb-10`} style={{ opacity: 1, transform: 'none' }}>
                                    <p className='font-ovo'>Full-Stack Developer focused on building scalable web applications and solving real-world problems.</p>
                                    <p className='font-ovo'>Currently pursuing B.Tech at IIIT Ranchi, with strong fundamentals in data structures, system design, and backend architecture.</p>

                                    <p className='font-ovo'>I’ve built production-style applications including a real-time chat system, expense-splitting platform, and a full-stack booking system, focusing on performance, clean architecture, and user experience.</p>

                                    <p className='font-ovo'>I actively solve DSA problems and continuously improve my understanding of systems and scalable application design.</p>

                                    <p className={`font-semibold font-ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Built multiple end-to-end applications focusing on scalability and real-world use cases.</p>

                                </div>

                                <div className={`${isDarkMode ? 'bg-gray-900/50 border-gray-600/50' : 'bg-blue-200/10 border-gray-200'} rounded-2xl p-6 border  shadow-sm relative overflow-hidden group`} style={{ opacity: 1, transform: 'none' }}>

                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 group-hover:w-full group-hover:opacity-10 transition-all duration-500">
                                    </div>

                                    <h4 className={`text-[20px] font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700' } mb-3 flex items-center gap-2 font-ovo`}>
                                        <span className="text-xl ">🎯</span>
                                        Current Focus
                                    </h4>

                                    <p className={`text-[15px] font-ovo ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed relative z-10`}>
                                        Building scalable web applications with clean architecture. Focused on improving problem-solving skills, backend design, and real-world system understanding.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>



    )
}

export default About








{/*
            <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
            <h2 className='text-center text-5xl font-ovo'>About Me</h2>*/}


{/*<div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>*/ }

{/*<div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt="User" className='w-full rounded-3xl' />
                </div>*/}

{/*<div className='flex-1'>*/ }

{/*<p className='mb-10 max-w-2xl font-ovo'>
                        Full-Stack Developer focused on building scalable web applications and solving real-world problems.
                        Currently pursuing B.Tech at IIIT Ranchi, with strong fundamentals in data structures, full stack development.
                    </p>*/}

{/*
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover  hover:-translate-y-1 duration-500 shadow-none hover:shadow-[4px_4px_0_#000]'>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>*/}

{/*<h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>*/ }

{/*<ul className='flex items-center gap-3 sm:gap-5 '>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-6' />
                            </li>
                        ))}
                    </ul>*/}


{/*</div>*/ }
{/*</div>*/ }
{/*</div>*/ }