



import { social_links } from '@/assets/assets'
import React from 'react'

const Footer = ({isDarkMode}) => {
    return (
        <footer className={`py-8 px-4 ${isDarkMode ? 'border-t border-gray-500/50' : 'border-t border-gray-300/50'}`}>

            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                <p className="text-sm font-semibold text-gray-500 flex items-center gap-1.5">Built with ❤️ by <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Eslavath Uday</span></p>



                <div className='flex gap-3'>
                    {
                        social_links.map((link, index) => (
                            <a key={index} href={link.links} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-text-secondary  hover:bg-gray-400/10  transition-all duration-200">
                                <div>
                                    {link.just_logo}
                                </div>
                            </a>
                        ))}
                </div>

                <p className='text-[15px] font-ovo text-gray-400'> © 2026 Your Company. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer





























