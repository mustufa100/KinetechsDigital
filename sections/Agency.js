import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT PixelTEK' /> <br />
            <br />
            <Title title='Your Vision, Our Code.' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2021' />
              <p className='desc-p'>Founded by a team of seasoned professionals, PixelTEK was born out of a shared vision to make technology accessible and impactful. Over the years, we've grown into a dynamic and agile software development company known for our creativity and technical expertise.</p>
              <p className='desc-p'>What sets us apart is our client-centric approach. We believe in collaboration, communication, and a deep understanding of your goals. Our team works tirelessly to craft solutions that not only meet your needs but also exceed your expectations.</p>

              <div className='grid-3'>
                <div className='box'>
                  <h1 className='orange'>1+</h1>
                  <h3>Years Of Experience</h3>
                </div>
                <div className='box'>
                  <h1 className='orange'>50+</h1>
                  <h3>Satisfied Clients</h3>
                </div>
                <div className='box'>
                  <h1 className='orange'>40+</h1>
                  <h3>Projects Completed</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>At PixelTEK, we are passionate about technology and committed to delivering innovative software solutions. With a mission to simplify complexities and drive digital transformation, we've been serving businesses and individuals since 2022.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      {/* <Banner /> */}
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
