"use client"
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact.jsx";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Work from "./components/Work";
import SectionAnimation from "./components/SectionAnimation";
import { useTheme } from "next-themes";


export default function Home() {

const { resolvedTheme } = useTheme();

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

const isDarkMode = resolvedTheme === "dark";

  return (
    <>

<div className={ `fixed inset-0 -z-10 overflow-hidden pointer-events-none ${isDarkMode ? ' dark:bg-darkTheme' : 'bg-lightHover'} `}>


  <span className="absolute top-[15%] left-[5%] text-5xl opacity-15 animate-float2">
    📨
  </span>


  <span className={`absolute top-[40%] left-[22%] text-5xl ${isDarkMode ? "opacity-15" : "opacity-25"} animate-float2 `} >
    🚀
  </span>


  <span className= {`absolute top-[35%] right-[18%] text-5xl ${isDarkMode ? "opacity-15" : "opacity-25"} animate-float1 `}>
    ☕
  </span>


  <span className="absolute top-[60%] right-[5%] text-4xl opacity-20 animate-float4">
    ⭐
  </span>


  <span className= {`absolute top-[90%] right-[30%] text-5xl ${isDarkMode ? "opacity-15" : "opacity-25"} animate-float2`}>
    🪐
  </span>


  <span className={`absolute top-[90%] left-[80%] text-4xl ${isDarkMode ? "opacity-10" : "opacity-30"} animate-float1`}>
  ⚙️
</span>

<span className={`absolute top-[0%] right-[28%] text-3xl ${isDarkMode ? "opacity-15" : "opacity-25 text-gray-400/80"} animate-float4`}>
  &lt;/&gt;
</span>

<span className={`absolute top-[85%] left-[15%] text-5xl ${isDarkMode ? "opacity-15" : "opacity-25 text-gray-400/80"} animate-float4 `}>
  {"{  }"}
</span>

 <span className={`absolute top-[15%] left-[20%] text-5xl ${isDarkMode ? "opacity-15" : "opacity-25"}  animate-float1`}>
  🧠
</span>

 <span className={`absolute top-[30%] left-[2%] text-4xl ${isDarkMode ? "hidden" : "opacity-25"}  animate-float1`}>
  💻
</span>
 <span className="absolute top-[45%] left-[0%] text-3xl opacity-6 animate-float1">
  ✒️
</span>
 <span className={`absolute  left-[30%] text-4xl ${isDarkMode ? "opacity-7 top-[95%]" : "opacity-40 top-[90%]"} animate-float1`}>
  📈
</span>
 <span className={`absolute top-[92%] left-[95%] text-5xl ${isDarkMode ? "opacity-10" : "opacity-25"} animate-float1`}>
  💼
</span>
 <span className="absolute top-[15%] left-[35%] text-5xl opacity-10 animate-float2">
  ☕
</span>

 <span className={`absolute top-[55%] left-[55%] text-4xl ${isDarkMode ? "opacity-10" : "opacity-20"} animate-float3`}>
  ⏰
</span>
 <span className="absolute top-[35%] left-[65%] text-4xl opacity-10 animate-float1">
  📐
</span>

 <span className= {`absolute top-[75%] left-[3%] text-3xl ${isDarkMode ? "opacity-10" : "opacity-25"} animate-float1`}>
  📍
</span>
 <span className= {`absolute top-[10%] left-[85%] text-4xl ${isDarkMode ? "opacity-10" : "opacity-20"} animate-float1`}>
  🗓️
</span>

</div>




<Navbar />

    
<SectionAnimation header>

  <Header isDarkMode={isDarkMode} />

</SectionAnimation>


    <SectionAnimation>
      <Work isDarkMode={isDarkMode} />
    </SectionAnimation>


    <SectionAnimation>
      <Skills isDarkMode={isDarkMode} />
    </SectionAnimation>


    {/* <Services/> */}
    {/* <Experience/> */}


    <SectionAnimation>
      <Education isDarkMode={isDarkMode} />
    </SectionAnimation>


    <SectionAnimation>
      <About isDarkMode={isDarkMode} />
    </SectionAnimation>


    <SectionAnimation>
      <Contact isDarkMode={isDarkMode} />
    </SectionAnimation>


    <Footer isDarkMode={isDarkMode} />



    </>
  );
}
