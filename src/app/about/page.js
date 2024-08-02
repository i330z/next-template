"use client"
import React, { useState } from 'react'
import { delay, motion } from 'framer-motion'

const About = () => {

  const [isAnimate, setIsAnimate] = useState(true)

  const boxvarient  ={
      hidden:{
        x: "-100vw",
      },
      visible:{
        x: 0,
        transition:{
          delay: 0.5,
          when: "beforeChildren",
          staggerChildren: 0.09,
          delayChildren: 0.2
        }
      }
  }

  const listVariant = {
    hidden:{
      x: -10,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      
      // transition:{
      //   delay: 3
      // }
    }
  }


  return (
    <>
    
    <motion.div
      // initial={{ opacity: 0, scale: 0.5 , x: -100 }}
      animate={{ 
        opacity: isAnimate ? 1 : 0, 
        scale: 1 , 
        x: 400, 
        rotate: 360 }}
      // transition={{ duration: 0.5 }}
      transition={{
        type:"spring",
        stiffness:100,
        // damping: 10
      }}


      className=' bg-blue-500 h-96 w-96 text-white'>
      <div>About</div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio, cum a in sunt autem consequatur, minima aliquam possimus veniam nam ullam eveniet alias. Voluptate facilis maiores debitis, ipsum obcaecati aliquid illo possimus eius eligendi omnis, aliquam veniam accusamus illum officiis nulla laborum nemo quidem hic molestias rerum sint harum?</p>
    </motion.div>

    
    <motion.div
    variants={boxvarient}
    animate="visible"
    initial="hidden"
    className="bg-gray-500 h-96 w-96">

      {
        [1,2,3].map(item => (
          <motion.li
            variants={listVariant}
            // animate="visible"
            // initial="hidden"
          >{item}</motion.li>
        ))
      }

    </motion.div>


    </>

  )
}

export default About