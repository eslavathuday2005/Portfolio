

import { GraduateAchievements, GraduationCourses, SchoolingAchievements, SchoolingCourses } from '@/assets/assets'
import { Award, Calendar, GraduationCapIcon } from 'lucide-react'
import React from 'react'

const Education = ({isDarkMode}) => {
    return (

        <div className="py-24 px-4 overflow-hidden " id="education">

            <div className="max-w-6xl mx-auto">

                <div className="mb-12 text-left" style={{ opacity: 1, transform: 'none' }}>
                    <p className={` ${isDarkMode ? "text-text-secondary" : "text-gray-900"} text-md font-ovo tracking-widest  uppercase mb-3 ml-1`}>Learning Journey</p>
                    <h2 className={` ${isDarkMode ? "text-gray-300" : "text-gray-900"} text-4xl sm:text-5xl font-ovo mb-8 `}>Education</h2>

                    <div className="inline-flex items-center gap-3">
                        <GraduationCapIcon className={`${isDarkMode ? " text-text-primary " : ' text-gray-900 '}`}/>
                        <span className={`text-xl font-ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} `}>Academic Background</span>

                    </div>
                </div>


                <div className="max-w-5xl mx-auto space-y-15">

                    <div className={`group bg-card rounded-3xl border p-6 sm:p-10 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}  transition-all duration-300 hover:shadow-md hover:shadow-blue-400/20`} style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">

                            <div>
                                <h3 className={`text-3xl font-ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-600'} group-hover:text-blue-600 transition-colors`} >Bachelor of Technology in Electronics Engineering</h3>
                            </div>

                            <div className={`flex items-center gap-2 text-sm font-ovo ${isDarkMode ? 'text-gray-300 bg-gray-900/60  border-gray-700' : 'text-gray-900 bg-gray-400/10 border-gray-300'} whitespace-nowrap px-4 py-1.5  rounded-full border  shadow-sm`}>
                                <Calendar className='w-4 h-4' />
                                2023 - 2027

                            </div>

                        </div>
                        <p className={`text-lg font-ovo  mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Indian Institute of Information Technology Ranchi</p>
                        <p className={`text-sm font-ovo  mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Ranchi, Jharkhand, India</p>

                        <p className={`text-md font-ovo leading-relaxed mb-8 max-w-3xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Pursuing B.Tech in Electronics Engineering with focus on software development, data structures, and system-level fundamentals.</p>


                        <div className='mt-8'>

                            <p className={`text-[18px] font-ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-4`}>Key Achievements:</p>

                            <ul className='space-y-3'>

                                {GraduateAchievements.map((achievement, index) => (
                                    <li key={index} className={`flex items-center gap-3 text-sm font-ovo group-hover:text-text-primary/90 transition-colors ${isDarkMode ? 'text-gray-400' : ' text-gray-500'}`} style={{ opacity: 1, transform: 'none' }}>
                                        <Award className={`lucide lucide-award w-4 h-4  group-hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-400' : ' text-gray-500'}`} />
                                        {achievement}
                                    </li>
                                ))}

                            </ul>

                        </div>


                        <div className="mt-8 pt-6 border-t border-gray-300">

                            <div className="flex flex-wrap items-center gap-3">


                                {GraduationCourses.map((course, index) => (
                                    <div key={index} className={`inline-flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-gray-400/20  text-xs font-ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} hover:border-blue-500/30 shadow-sm transition-all duration-300 cursor-default`} style={{ opacity: 1, transform: 'none' }}>
                                        {course.icon} <span className="text-sm font-ovo leading-none">{course.sub}</span>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>








                    {/* ------------------------  SCHOOLING  -------------------------- */}



                    <div className={`group bg-card rounded-3xl border  p-6 sm:p-10 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} hover:border-blue-400/30 transition-all duration-300 hover:shadow-md hover:shadow-blue-400/20`} style={{ opacity: 1, transform: 'none' }}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">

                            <div>
                                <h3 className= {`text-3xl font-ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-600'} group-hover:text-blue-600 transition-colors`}>Higher Secondary Education   <span className='text-[18px]'> ( 12th Grade )</span></h3>
                            </div>

                            <div className={`flex items-center gap-2 text-sm font-ovo ${isDarkMode ? 'text-gray-300 bg-gray-900/60  border-gray-700' : 'text-gray-900 bg-gray-400/10 border-gray-300'} whitespace-nowrap px-4 py-1.5  rounded-full border  shadow-sm`}>
                                <Calendar className='w-4 h-4' />

                                2021 - 2023

                            </div>

                        </div>
                        <p className={`text-lg font-ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>Sri Chaitanya Junior College</p>
                        <p className={`text-sm font-ovo ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>Khammam, Telangana, India</p>

                        <p className={`text-md font-ovo ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} leading-relaxed mb-8 max-w-3xl`}>Completed higher secondary education with strong academic performance in science and competitive exams.</p>

                        <div className='mt-8'>

                            <p className={`text-[18px] font-ovo ${isDarkMode ? 'text-gray-200' : 'text-gray-900'} mb-4`}>Key Achievements:</p>

                            <ul className='space-y-3'>
                                {SchoolingAchievements.map((achievement, index) => (
                                    <li key={index} className={`flex items-center gap-3 text-sm font-ovo ${isDarkMode ? 'text-gray-400' : ' text-gray-500'} group-hover:text-text-primary/90 transition-colors`} style={{ opacity: 1, transform: 'none' }}>
                                        <Award className={`lucide lucide-award w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} group-hover:text-blue-500 transition-colors`} />
                                        {achievement}
                                    </li>
                                ))}


                            </ul>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-300">

                            <div className="flex flex-wrap items-center gap-3">

                                {SchoolingCourses.map((course, index) => (
                                    <div key={index} className={`inline-flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-gray-400/20  text-xs font-ovo ${isDarkMode ? 'text-gray-300' : ' text-gray-900'} hover:border-blue-500/30 shadow-sm transition-all duration-300 cursor-default`} style={{ opacity: 1, transform: 'none' }}>
                                        {course.icon} <span className="text-sm font-ovo leading-none">{course.sub}</span>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Education
