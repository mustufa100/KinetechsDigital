import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import { IoMailOutline , IoChevronForwardCircle , IoStar } from "react-icons/io5"
import { IconContext } from "react-icons"
import { motion } from "framer-motion"


let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const fadeInUp = {
  initial:{
    y:-60,
    opacity:0,
    transition:{
      duration:0.6, ease:easeing
    }
  },

  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      delay:0.5,
      ease:easeing
    }
  }
};


const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};

const firstName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}


const lastName = {
  initial:{
    y:-20,
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}


const letter = {
  initial:{
    y:400,
  },
  animate:{
    y:0,
    transition:{duration:1, ...transition}
  }
};

const btnGroup = {
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.6,ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
  
};

const star = {
  initial:{
    y:60,
    opacity:0,
    transition:{duration:0.8, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};

// const header = {
//   initial:{
//     y:-60,
//     opacity:0,
//     transition:{duration:0.05,ease:easeing}
//   },
//   animate:{
//     y:0,
//     opacity:1,
//     animation:{
//       duration:0.6,
//       ease:easeing
//     }
//   }
// }







const Hero = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <motion.h2 className="heroh1">
      <motion.span variants={firstName} initial="initial" animate="animate" className="first">
        <motion.span variants={letter}>W</motion.span>
        <motion.span variants={letter}>e</motion.span>
        <motion.span variants={letter}>l</motion.span>
        <motion.span variants={letter}>c</motion.span>
        <motion.span variants={letter}>o</motion.span>
        <motion.span variants={letter}>m</motion.span>
        <motion.span variants={letter}>e</motion.span>

        <motion.span variants={letter} className="second">T</motion.span>
        <motion.span variants={letter}>o</motion.span>
       

      </motion.span>



      <motion.span variants={lastName} initial="initial" animate="animate" className="last">
      <motion.span variants={letter}>K</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>N</motion.span>
        <motion.span variants={letter}>E</motion.span>
        <motion.span variants={letter}>T</motion.span>
        <motion.span variants={letter}>E</motion.span>
        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>H</motion.span>
        <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter} className="second">D</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>G</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>T</motion.span>
        <motion.span variants={letter}>A</motion.span>
        <motion.span variants={letter}>L</motion.span>
        

      </motion.span>



      </motion.h2>
<motion.section className="hero" initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5,ease:easeing}}>
  <motion.div className="content_wrapper"initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5,ease:easeing}}>
    <div className="left_content_wrapper">
      <motion.h2>

      <motion.span variants={firstName} initial="initial" animate="animate" className="first">
        <motion.span variants={letter}>W</motion.span>
        <motion.span variants={letter}>e</motion.span>
        <motion.span variants={letter}>l</motion.span>
        <motion.span variants={letter}>c</motion.span>
        <motion.span variants={letter}>o</motion.span>
        <motion.span variants={letter}>m</motion.span>
        <motion.span variants={letter}>e</motion.span>

        <motion.span variants={letter} className="second">T</motion.span>
        <motion.span variants={letter}>o</motion.span>
       

      </motion.span>



      <motion.span variants={lastName} initial="initial" animate="animate" className="last">
      <motion.span variants={letter}>K</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>N</motion.span>
        <motion.span variants={letter}>E</motion.span>
        <motion.span variants={letter}>T</motion.span>
        <motion.span variants={letter}>E</motion.span>
        <motion.span variants={letter}>C</motion.span>
        <motion.span variants={letter}>H</motion.span>
        <motion.span variants={letter}>S</motion.span>
        <motion.span variants={letter} className="second">D</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>G</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>T</motion.span>
        <motion.span variants={letter}>A</motion.span>
        <motion.span variants={letter}>L</motion.span>
        

      </motion.span>


        {/* <span>Design <span className="second">Focused</span></span>
        <span>Startup, <span className="second">For</span> Startups.</span> */}
      </motion.h2>
      <motion.p variants={fadeInUp}>Your Gateway to Digital Excellence! <br /> Provide top noche marketing services and development services.</motion.p>

      <motion.div className="btn_group" variants={stagger}>
        <motion.a href="/Kinetechs Digital - Business Proposal .pdf" target="_blank" className="btn btn_primary"variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Proposal
          <IconContext.Provider value={{color:"#f97316",size:"25px"}}>
            <IoChevronForwardCircle/>
          </IconContext.Provider>
        </motion.a>
        <motion.a href="tel:(213) 928-1535" target="_blank" className="btn btn_second"variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Contact
        <IconContext.Provider value={{color:"#f97316",size:"25px"}}>
        <IoChevronForwardCircle/>
          </IconContext.Provider>
        </motion.a>
      </motion.div>



      <motion.div className="review_container" variants={stagger}>
        {/* <motion.p className="total_review"variants={star}>64+ Reviews</motion.p> */}
        <IconContext.Provider value={{color:"#fff",size:"18px"}}>
          <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
          <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
          <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
          <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
          <motion.span variants={star} whileHover={{scale:1.2, rotate:180, borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
        </IconContext.Provider>
        <motion.p variants={star}>More than 58+ people taking services.</motion.p>
      </motion.div>
    </div>

    <motion.div className="right_content_wrapper">
      <motion.img src={process.env.PUBLIC_URL + '../../images/sidebar-removebg-preview.png'} alt="bg" initial={{x:200, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5,delay:0.8}}/>
    </motion.div>
  </motion.div>
</motion.section>




      {/* <section className='hero'>
        <div className='container'>
          <TitleLogo title='TEK' caption='Pixel' className='logobg' />
          <p className='hero-title'>Embrace Digital Transformation,</p>
          <p className='hero-title'>Seize Global Opportunities!</p>
   
          <div className='sub-heading'>
            <TitleSm title='WEBSITES' /> <span>.</span>
            <TitleSm title='BRANDING' /> <span>.</span>
            <TitleSm title='DIGITAL MARKETING' />
          </div>

        </div>
      </section> */}
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Unlock Your Potential with Kinetechs Digital' />
            <p>At Kinetechs Digital, we transcend boundaries to redefine digital success. Our comprehensive suite of services seamlessly integrates top-notch marketing and development solutions, propelling your brand to new heights.</p>
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
      {/* <Expertise /> */}
      <Banner />
      <Testimonial />
      {/* <ShowCase /> */}
      <Brand />

      <div className='text-center'>
        <Title title='LATEST NEWS & ARTICLES' />
      </div>
      <BlogCard />
    </motion.div>
  )
}

export default Hero
