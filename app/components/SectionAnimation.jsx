"use client"

import React from "react"
import { motion } from "motion/react"


const SectionAnimation = ({children, header=false}) => {

  return (

    <motion.div

      initial={{
        opacity:0,
        y: header ? 0 : 70,
        scale:0.96
      }}


      whileInView={{
        opacity:1,
        y:0,
        scale:1
      }}


      transition={{
        duration:1,
        ease:[0.25,0.1,0.25,1]
      }}


      viewport={{
        once:true,
        amount:0.15
      }}

    >

      {children}

    </motion.div>

  )

}


export default SectionAnimation