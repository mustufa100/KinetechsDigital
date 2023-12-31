import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react';



const Agency = () => {

  const AnimatedNumbers = ({value})=>{
    const ref =  useRef(null);
    
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000})
    const isInView = useInView(ref,{once:true});
    
    
    useEffect(() => {
      if(isInView)
      motionValue.set(value);
    }, [isInView,value,motionValue])
    
    useEffect(() => {
     
      springValue.on("change",(latest)=>{
        if(ref.current && latest.toFixed(0) <= value){
          ref.current.textContent = latest.toFixed(0);
        }
      })
    
    
    
    }, [springValue,value])
    
      return <span ref={ref}></span>
    }
    

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='Unleash Possibilities with Kinetechs Digital Your Bespoke Software Partner' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='KINETECHS DIGITAL' />
              <p className='desc-p'>Welcome to Kinetechs Digital, where software development becomes an art form.At Kinetechs Digital, we fuel startups and enterprises with groundbreaking IT services. Our team of software development experts is renowned for delivering unparalleled IT consultation that optimizes your operations and propels your revenues to new heights.</p>
              <p className='desc-p'>Beyond software, we're your comprehensive digital hub. From crafting unique logos and captivating website designs to providing scalable hosting solutions and assessing your existing code, we cater to all your needs. Our innovation extends to mobile app development, bringing your ideas to life.</p>

              <div className='grid-3'>
                <div className='box'>
                  <h1 className='orange'><AnimatedNumbers value={7}/>+</h1>
                  <h3>Years Of Experience</h3>
                </div>
                <div className='box'>
                  <h1 className='orange'><AnimatedNumbers value={500}/>+</h1>
                  <h3>Satisfied Clients</h3>
                </div>
                <div className='box'>
                  <h1 className='orange'><AnimatedNumbers value={750}/>+</h1>
                  <h3>Projects Completed</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/kinelogo-removebg-previews.png' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/about2.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Kinetechs Mission' />
              <br />
              <p className='misson-p'> Our mission is to revolutionize the development process, making it personal, seamless, and inspiring. We align with your vision, challenge conventions, and deliver innovative software solutions that redefine limits.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      {/* <Testimonial /> */}
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
