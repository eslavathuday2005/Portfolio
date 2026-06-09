
import { skills_technology } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Skills = ({isDarkMode}) => {
    return (
        <>
            <section id='skills' className=' py-20 px-4 sm:px-6'>

                <div className="max-w-6xl mx-auto">

                    <div className="mb-14" style={{ opacity: 1, transform: 'none' }}>
                        <h2 className= {` ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} text-3xl sm:text-4xl font-ovo  `}>Skills <span className="text-text-primary font-extrabold"> &</span> Technologies</h2>
                            </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 " style={{ opacity: 1, transform: 'none' }}>

                            { skills_technology.map((skill, index) => (

                                    <div key={index} className={`group ${isDarkMode ? 'bg-gray-800  border-gray-700 hover:shadow-blue-400/20 text-gray-300' : 'bg-white border-gray-300/70 text-gray-800'} rounded-2xl border p-6 hover:border-blue-300/60  hover:shadow-md hover:shadow-blue-200/50 transition-all duration-300`}>

                                        <div className="flex items-center gap-3 mb-5">

                                            <div className={skill.bgcolor ? `p-2.5 rounded-xl ${skill.bgcolor}` : "p-2.5 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white"}>
                                                {skill.bgImage}
                                            </div>


                                            <h3 className="font-bold text-text-primary font-ovo text-lg">{skill.title}</h3>

                                        </div>


                                        <div className="flex flex-wrap gap-2">
                                            {
                                                skill.tech?.map((Eachtech, idx) => (
                                                    <span key={idx} className={` ${isDarkMode ? "border-gray-700 font-ovo hover:border-blue-300/60 hover:shadow-blue-100/10" : "border-gray-300/70 hover:shadow-blue-200/50  hover:border-blue-300/60 hover:bg-gray-50"}  inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium  text-text-primary rounded-full border    hover:shadow-md  transform hover:scale-105 transition-all duration-300 cursor-default`}>
                                                        {Eachtech?.icon ? (<Image src={Eachtech.icon} width={15} height={15} alt={Eachtech.name} />) : null}
                                                        {Eachtech.name}
                                                    </span>
                                                ))}

                                        </div>

                                    </div>

                                ))}

                        </div>
                </div>

            </section>

        </>
    )
}

export default Skills


































