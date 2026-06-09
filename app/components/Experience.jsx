import { ExperienceDecription, ExperienceTechnology } from '@/assets/assets'
import React from 'react'

const Experience = () => {
    return (
        <div className="py-24 px-4 overflow-hidden">

            <div className="max-w-6xl mx-auto">

                <div className="mb-12 text-left" style={{ opacity: 1, transform: 'none' }}>
                    <h2 className="text-4xl sm:text-5xl font-bold text-text-primary">Experience</h2>
                </div>


                <div className="max-w-5xl mx-auto space-y-6">

                    <div className="group bg-card rounded-2xl border border-border overflow-hidden  hover:border-accent/50 transition-all duration-300 hover:shadow-2xl  hover:shadow-accent/10">


                        <div className="p-6 sm:p-10 relative">

                            <div className="absolute inset-0 bg-gradient-to-tr from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">


                                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 relative z-10">

                                    <div className="hidden sm:flex flex-shrink-0 mt-1" style={{ transform: 'rotate(2.66491deg)' }}>

                                        <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center text-xl font-bold text-text-primary shadow-sm group-hover:border-accent/40 transition-colors">
                                            G
                                        </div>

                                    </div>



                                    <div className="flex-grow">

                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">

                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                                                        Graphketing
                                                    </h3>
                                                    <span className="px-3 py-1 text-[11px] font-semibold text-blue-500 bg-blue-500/10 rounded-full border border-blue-500/20 uppercase tracking-wide">Internship</span>
                                                </div>

                                                <p className="text-lg font-medium text-text-secondary">
                                                    SDE Intern
                                                </p>
                                            </div>


                                            <div className="flex flex-col sm:items-end gap-1 text-sm text-text-secondary font-medium">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>Aug 2025 - Oct 2025
                                                </div>
                                                <p>Remote</p>
                                            </div>
                                        </div>




                                        <div className="mb-8">

                                            <p className="text-sm font-semibold text-text-primary mb-3">Technologies Used</p>

                                            <div className="flex flex-wrap items-center gap-3">
                                                {
                                                    ExperienceTechnology.map((tech, index) => (
                                                        <div key={index} className="inline-flex items-center gap-2 px-3 py-1.5 bg-background rounded-full border border-border  text-[13px] font-medium text-text-primary hover:border-accent/50 hover:shadow-md  hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default" style={{ opacity: 1, transform: 'none' }}>
                                                            <span className='text-sm'>{tech.icon}</span>{tech.name}
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </div>


                                        <ul className="space-y-4">

                                            {ExperienceDecription.map((desc, index) => (
                                                <li key={index} className="flex gap-3 text-sm text-text-secondary leading-relaxed group-hover:text-text-primary/90 transition-colors">
                                                    <span className="text-accent mt-1.5 flex-shrink-0 text-[10px] transform group-hover:scale-125 transition-transform duration-300">●</span>
                                                    {desc}
                                                </li>
                                            ))}


                                        </ul>





                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Experience
