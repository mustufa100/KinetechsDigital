import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { agency1 } from "@/assets/data/dummydata";

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button className='next' onClick={onClick}>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button className='prev' onClick={onClick}>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  )
}


const Agency = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

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
            <TitleSm title='Who We Are' /> <br />
            <br />
            <Title title='Welcome to Kinetechs Digital – Hub of Best Digital Marketing services Excellence!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='KINETECHS DIGITAL' />
              <p className='desc-p'>At Kinetechs Digital, collaboration is not just encouraged; it’s embedded in our DNA. Our creative team thrives on the synergy of diverse skills and perspectives, coming together to turn challenges into opportunities and grow your business. Our comprehensive services encompass everything from meticulous keyword research and on-page SEO to strategic off-page tactics and effective backlink building. We specialize in empowering local businesses with targeted local SEO, ensuring heightened visibility and online presence improvement. Whether you're a digital marketing enthusiast, a content creator, or a website owner, our commitment to transparency, innovative approaches, and adherence to SEO best practices will drive organic traffic and deliver measurable results.</p>
              {/* <p className='desc-p'>At Kinetechs Digital, we transcend boundaries to redefine digital success. Our comprehensive suite of services seamlessly integrates top-notch marketing and development solutions, propelling your brand to new heights.</p> */}

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


          {/* <div className='content flex1'>
            <div className='left w-50 ml'>
              <TitleSm title='' />
              <div className='heading-title'>
                <Title title='What Sets Us Apart' />
                <p>We don’t just follow trends; we set them. Our team of creative minds is dedicated to pushing the boundaries of digital possibilities, ensuring your brand stays ahead of the curve.</p>
              </div>
            </div>

            <div className='right w-50 ml'>
              <TitleSm title='' />
              <div className='heading-title'>
                <Title title='Our Values' />
                <p>We embrace change and continuously seek innovative ways to elevate our services and exceed client expectations.</p>
              </div>
            </div>
          </div> */}

<section className='testimonial'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='' />
          </div>
          <div className='cards'>
            <Slider {...settings}>
              {agency1.map((user) => (
                <div>
                  <div className='card'>
                    <div className='image'>
                      <div className='img'>
                        <img src={user.cover} alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>{user.name}</h3>
                        <span>{user.post}</span>
                      </div>
                    </div>
                    <div className='details'>
                      <p>{user.desc}</p>
                      {/* <Link href='/#'>
                        VIEW CASE <HiOutlineArrowRight className='link-icon' />
                      </Link> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
           
          </div>
        </div>
      </section>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/kd1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Kinetechs Mission' />
              <br />
              <p className='misson-p'> Our mission is simple yet profound – to empower successful businesses with the tools and strategies needed to thrive in the digital realm. We blend creativity with technical expertise, ensuring that every project we undertake is a masterpiece of innovation and functionality.</p>
              <br />
              <p className='misson-p'> As a one-stop destination, we also offer top-notch website development services, tailoring solutions for businesses of all sizes. Our skilled team collaborates with you to create visually appealing, user-friendly websites that align with your brand identity and business goals. </p>

            </div>
          </div>
         
        </div>
      </section>

      <Brand />
      {/* <Testimonial /> */}
      <div className='heading-title'>
                <Title title='Join Us on the Digital Journey' />
                <p>Embark on a digital journey with Kinetechs Digital – where ideas transform into digital realities. Let’s create something extraordinary together. Contact us today and let the innovation begin!</p>
              </div>
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
