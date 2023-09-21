import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          {/* <TitleLogo title='TEK' caption='Pixel' className='logobg' /> */}
          {/* <p className='hero-title'>Embrace Digital Transformation,</p>
          <p className='hero-title'>Seize Global Opportunities!</p> */}
   
          {/* <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div> */}

        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Kinetechs Digital' />
            <p>Elevate your presence and prowess with our trusted software house. We offer a full spectrum of cutting-edge IT services tailored to empower your journey in the Tech-Savvy World. Let us be your catalyst for success!</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='gradient2'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      {/* <Testimonial /> */}
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='LATEST NEWS & ARTICLES' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
