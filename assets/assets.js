import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { CodeXml, Database, Languages, Mail, PanelsTopLeftIcon, ServerIcon, Wrench, MapPin, TwitterIcon, Linkedin, LinkedinIcon, GithubIcon } from 'lucide-react';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: "QuickShow",
        description: "A full-stack movie ticket booking system with browsing, seat selection, and payment processing.",
        details: [
            "Implemented movie browsing, showtime selection, and seat booking workflows",
            "Built REST APIs for movies, bookings, and user authentication",
            "Designed MongoDB schema for users, shows, and booking records",
            "Implemented seat selection and booking flow with availability handling"
        ],
        bgImage: "/quickshow.png",
        github: "https://github.com/yourrepo",
        live: "https://quickshow-client-delta.vercel.app/",
        AboutApp: 'Movie Ticket Booking Platform',


        tech: [
            { name: "React.js", icon: "/react.svg" },
            { name: "Node.js", icon: "/nodejs.svg" },
            { name: "Express.js", icon: "/express.svg" },
            { name: "MongoDB", icon: "/mongodb.svg" },
            { name: "Stripe", icon: "/stripe.png" },
            { name: "Clerk", icon: "/clerk.png" }
        ]

    },
    {
        title: 'Chatify',
        description: 'A full-stack messaging platform with instant communication, presence tracking, and media sharing.',
        details: [
            "Implemented real-time messaging using Socket.io for instant communication between users",
            "Built user authentication and chat session management",
            "Designed database schema for users, conversations, and message history",
            "Implemented media sharing and real-time user presence tracking features"
        ],
        bgImage: '/chatify.png',
        github: "https://github.com/yourrepo",
        live: "https://quickshow-client-delta.vercel.app/",
        AboutApp: 'Real-time Chat Application',

        tech: [
            { name: "React.js", icon: "/react.svg" },
            { name: "Node.js", icon: "/nodejs.svg" },
            { name: "Express.js", icon: "/express.svg" },
            { name: "MongoDB", icon: "/mongodb.svg" },
            { name: "Socket.IO", icon: "/socketio.svg" },


        ]

    },
    {
        title: 'Forever',
        description: 'A MERN stack e-commerce website with shopping, payments, and admin management.',
        details: [
            "Built full-stack e-commerce app using MongoDB, Express, React, and Node.js",
            "Implemented product search, filtering, sorting, and collection pages",
            "Added user authentication, cart system, COD and Stripe payments",
            "Developed admin panel for product and price management"
        ],
        bgImage: '/Ecommerce.png',
        github: "https://github.com/yourrepo",
        live: "https://quickshow-client-delta.vercel.app/",
        AboutApp: 'Full-Stack E-Commerce Platform`',



        tech: [
            { name: "React.js", icon: "/react.svg" },
            { name: "Node.js", icon: "/nodejs.svg" },
            { name: "Express.js", icon: "/express.svg" },
            { name: "MongoDB", icon: "/mongodb.svg" },
            { name: "Stripe", icon: "/stripe.png" }
        ]
    },

]








export const skills_technology = [

    {
        title: "Language",
        bgImage: <CodeXml />,
        bgcolor: "bg-gradient-to-br from-violet-500 to-purple-600 text-white",

        tech: [
            { name: "JavaScript", icon: "/javascript.svg" },
            { name: "TypeScript", icon: "/typescript.svg" },
            { name: "C++", icon: "/cplusplus.svg" },
            { name: "C", icon: "/c.svg" },
            { name: "SQL", icon: "/sql.svg" },
            { name: "HTML", icon: "/html.svg" },
            { name: "CSS", icon: "/css.svg" }

        ]

    },


    {
        title: "Frontend",
        bgImage: <PanelsTopLeftIcon />,
        bgcolor: "bg-gradient-to-br from-blue-500 to-cyan-500 text-white",

        tech: [
            { name: "React.js", icon: "/react.svg" },
            { name: "Next.js", icon: "/nextjs.svg" },
            { name: "Tailwind CSS", icon: "/tailwinds.svg" },
            { name: "DaisyUI", icon: "/daisyuinew.png" },
            { name: "Zustand", icon: "" }
        ]

    },


    {
        title: "Backend",
        bgImage: <ServerIcon />,
        bgcolor: "bg-gradient-to-br from-orange-500 to-amber-500 text-white",

        tech: [

            { name: "Node.js", icon: "/nodejs.svg" },
            { name: "Express.js", icon: "/express.svg" },
            { name: "Socket.IO", icon: "/socketio.svg" },
            { name: "REST APIs", }
        ]

    },

    {
        title: "Database",
        bgImage: <Database />,
        bgcolor: "bg-gradient-to-br from-green-500 to-emerald-500 text-white",

        tech: [
            { name: "MongoDB", icon: "/mongodb.svg" },
            { name: "Mongoose", icon: "" },
            { name: "SQL", icon: "/sql.svg" },

        ]

    },
    {
        title: "Tools & Cloud",
        bgImage: <Wrench />,
        bgcolor: "bg-gradient-to-br from-rose-500 to-pink-500 text-white",

        tech: [
            { name: "Git", icon: "/git.svg" },
            { name: "Postman", icon: "/postman.svg" },
            { name: "Vercel", icon: "/vercel.svg" },
            { name: "Render", icon: "/render.png" },
            { name: "AWS", icon: "/amazonwebservices.svg" },
            { name: "Docker", icon: "/docker.svg" }
        ]

    },

]




export const social_links = [

    {
        social_name: 'Email',
        social_links_me_name: "eslavathuday@gmail.com",
        links: 'eslavathuday@gmail.com',

        social_logo: <div className="p-3 rounded-xl bg-red-500/10 group-hover:scale-110 transition-transform duration-300">
            <Mail width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-5 h-5 text-red-600" aria-hidden="true" />
        </div>,
        just_logo: <Mail width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-4 h-4 text-gray-500 hover:text-blue-500" aria-hidden="true" />

    },
    {
        social_name: 'GitHub',
        social_links_me_name: "eslavathuday2005",
        links: 'https://github.com/eslavathuday2005',
        social_logo: <div className="p-3 rounded-xl bg-gray-500/10 group-hover:scale-110 transition-transform duration-300">
            <GithubIcon width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-5 h-5 text-gray-600" aria-hidden="true" />
        </div>,

        just_logo: <GithubIcon width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-4 h-4 text-gray-500 hover:text-blue-500" aria-hidden="true" />

    },
    {
        social_name: 'Linkedin',
        social_links_me_name: "eslavath_uday",
        links: 'https://www.linkedin.com/in/eslavathuday/',
        social_logo: <div className="p-3 rounded-xl bg-blue-500/10 group-hover:scale-110 transition-transform duration-300">
            <LinkedinIcon width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-5 h-5 text-blue-600" aria-hidden="true" />
        </div>,
        just_logo: <LinkedinIcon width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-4 h-4 text-gray-500 hover:text-blue-500" aria-hidden="true" />

    },
    {
        social_name: 'Twitter',
        social_links_me_name: "@eslavathuday",
        links: 'https://x.com/EslavathUday',
        social_logo: <div className="p-3 rounded-xl bg-sky-500/10 group-hover:scale-110 transition-transform duration-300">

            <TwitterIcon width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-5 h-5 text-sky-600" aria-hidden="true" />
        </div>,
        just_logo: <TwitterIcon width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-4 h-4 text-gray-500 hover:text-blue-500" aria-hidden="true" />

    },
    {
        social_name: 'Location',
        social_links_me_name: "Telengana, India",
        links: 'https://www.google.com/maps/place/Dornakal,+Telangana+506381/@17.4458588,80.1409496,15z/data=!3m1!4b1!4m15!1m8!3m7!1s0x3a34601eba458c49:0x9bf40068956f636c!2sUyyalawada,+Telangana!3b1!8m2!3d17.4395456!4d80.1037721!16s%2Fg%2F12hmtp7t8!3m5!1s0x3a346090143e5183:0xad617939dc4f3e39!8m2!3d17.444383!4d80.1506998!16s%2Fm%2F02px9rc?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D',

        social_logo:

            <div className="p-3 rounded-xl bg-green-500/10 group-hover:scale-110 transition-transform duration-300">
                <MapPin width={24} height={24} stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" className="lucide lucide-mail w-5 h-5 text-green-600" aria-hidden="true" />
            </div>,

    },

]







export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];






export const GraduateAchievements = [

    "CGPA: 6.55/10",
    "Secured runner-up in college level Hackathon",
    "Received the 'Best Performer' award for outstanding academic performance",
    "Team lead for a successful project in the third year, demonstrating leadership and technical skills"
]

export const GraduationCourses = [

    { sub: "DSA", icon: "💻" },
    { sub: "OS", icon: "⚙️" },
    { sub: "DBMS", icon: "🗄️" },
    { sub: "CN", icon: "🌐" },
    { sub: "OOPs", icon: "🧩" },
    { sub: "System Design Basics", icon: "📐" },
    { sub: "Digital Electronics", icon: "🔌" },
    { sub: "Signals and Systems", icon: "📡" },
    { sub: "Microprocessors", icon: "🖲️" },

]

export const SchoolingAchievements = [

    "86% in 12th Boards",
    "92% in 10th Boards — School Topper",
]



export const SchoolingCourses = [

    { sub: "Physics", icon: "⚛️" },
    { sub: "Chemistry", icon: "🧪" },
    { sub: "Mathematics", icon: "📐" },
    { sub: "Computer Science", icon: "💻" },

]




export const ExperienceTechnology = [

    { name: "React.js", icon: "/react.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Express.js", icon: "/express.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "Socket.IO", icon: "/socketio.svg" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },


]

export const ExperienceDecription = [

    "Built and shipped admin dashboard features enabling real-time visualization of operational metrics through scalable REST API integrations",
    "Improved frontend performance and reliability by identifying and resolving critical UI issues, optimizing data-fetching workflows, and ensuring cross-browser compatibility",
    "Delivered production-ready, reusable UI components by translating product requirements into scalable frontend architecture",
    "Collaborated with backend engineers to integrate APIs and ensure consistent data flow across the application",

]








