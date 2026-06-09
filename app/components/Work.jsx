
import { workData } from '@/assets/assets'
import { Globe, GitBranch } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Work = ({isDarkMode}) => {
    return (
        <div id='work' className={`w-full px-7 md:px-8 lg:px-15 xl:px-15 2xl:px-40 py-10 scroll-mt-20 ${isDarkMode ? 'text-gray-300':"text-gray-900"}`}>
            <h4 className='text-center mb-2 text-lg font-ovo'>My Portfolio</h4>
            <h2 className='text-center text-5xl font-ovo'>My latest Work</h2>

            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} text-center max-w-2xl mx-auto mt-5 mb-5 font-ovo`}>
                Full-Stack Developer focused on building scalable web applications and solving real-world problems.
                Currently pursuing B.Tech at IIIT Ranchi, with strong fundamentals in data structures, full stack development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {workData.map((project, index) => (

                    <div key={index}
                        className={`group ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border  overflow-hidden hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-400/10  transition-all duration-300`}>

                        <div className="relative w-full aspect-[16/9] overflow-hidden">
                            <Image
                                src={project.bgImage}
                                alt={project.title}
                                fill
                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>


                        <div className='p-6'>

                            <div className='flex items-start justify-between gap-3 mb-2'>

                                <div>
                                    <h3 className={`text-xl font-bold  group-hover:text-blue-400 transition-colors`}>{project.title}</h3>
                                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-text-secondary mt-0.5 font-ovo `}>{project.AboutApp}</p>
                                </div>


                                <div className="flex items-center gap-2 flex-shrink-0">

                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg border  hover:text-blue-500 hover:border-blue-300 ${isDarkMode ? 'text-gray-400 border-gray-600' : 'text-gray-500 border-gray-500/40'}  transition-all duration-200 cursor-pointer `}>
                                        <Globe className='h-4 w-4  hover:text-blue-500' />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg border   hover:text-blue-500 hover:border-blue-300  transition-all duration-200 cursor-pointer ${isDarkMode ? 'text-gray-400 border-gray-600' : 'text-gray-500 border-gray-500/40'}`}>
                                        <GitBranch className='h-4 w-4 hover:text-blue-500' />
                                    </a>

                                </div>

                            </div>

                            <p className={`text-md ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} font-medium leading-relaxed mb-2 font-ovo `}>{project.description}</p>

                            <ul className='space-y-1 mb-4' >{
                                project.details.map((detail, idx) => (
                                    <li key={idx} className={`flex items-start gap-2 text-sm font-ovo  ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} leading-relaxed`}>
                                        <span className="text-blue-500 mt-[3px] text-[8px] ">●</span>
                                        {detail}
                                    </li>
                                ))
                            }</ul>



                            <div className="flex flex-wrap gap-2">
                                {project.tech?.map((tech, idx) => (
                                    <span key={idx}
                                        className={`${isDarkMode ? "hover:bg-blue-100/20" : "hover:bg-blue-200/30"} inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-500 bg-blue-200/10 rounded-full border border-blue-500/20  hover:border-blue-500/40 hover:shadow-md hover:shadow-blue-500/10 transition-colors duration-200 cursor-default `}>
                                        {tech.icon && <Image src={tech.icon} alt={tech.name} width={13} height={13} />}
                                        {tech.name}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Work
