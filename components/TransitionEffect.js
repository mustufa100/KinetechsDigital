import React from 'react'
import{motion} from "framer-motion"

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='bla'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        exit={{x:["0%","100%"],width:["0%","100%"]}}
        transition={{duration:0.8,ease:"easeInOut"}}
        />
         <motion.div className='blac'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        transition={{delay:0.2,duration:0.8,ease:"easeInOut"}}
        />
         <motion.div className='black'
        initial={{x:"100%",width:"100%"}}
        animate={{x:"0%",width:"0%"}}
        transition={{delay:0.4,duration:0.8,ease:"easeInOut"}}
        />
    </>
  )
}

export default TransitionEffect
