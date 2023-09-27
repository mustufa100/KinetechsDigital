import { showcase } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"

const TripplePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = showcase.find((post) => post.id === parseInt(id))

  if (!post) {
    // Handle the case where the post is not found
    return (
      <>
        <Head>
          <title>Post Not Found</title>
        </Head>
        <section>
          <div className='container'>
            <p>Post not found</p>
          </div>
        </section>
      </>
    );
  }
// Define content for each id
let content;
if (id === "1") {
  content = (
    <div>
      {/* Content for id 1 */}
      <Head>
        <title>{post.title}</title>
      </Head>
      <TransitionEffect/>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
          <Title title={post.title} className='title-bg' /><br />
            <br />
            <TitleSm title='Fueling fitness through a dynamic online hub for the FitClub community' /> 
         
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='FitClub Website' />
              <p className='desc-p'>FitClub frontend website built on the cutting-edge technology of ReactJS. Designed with your health and fitness in mind, this user-friendly platform offers a seamless experience to explore our fitness programs, track your progress, and connect with fellow fitness enthusiasts. Whether you're a seasoned athlete or just starting your fitness journey, our FitClub website is your trusted companion on the path to a healthier you. Explore our innovative features, personalized workout plans, and a supportive community that motivates you every step of the way. Join us in embracing a healthier lifestyle with our FitClub website, where your fitness goals become a reality.</p>
             
              <a href="https://fitclub-3ev.pages.dev/" className='button-primary' target="_blank">Explore FitClub</a>

              {/* Other common content */}
            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='' />
              {/* Other common content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} else if (id === "2") {
  content = (
    <div>
      {/* Content for id 2 */}
      <Head>
        <title>{post.title}</title>
      </Head>
      <TransitionEffect/>

      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
          <Title title={post.title} className='title-bg' /><br />
            <br />
            <TitleSm title='Each project is a chapter in our success story, and our portfolio is the book that defines our journey' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Client Portfolio' />
              <p className='desc-p'>Explore our diverse client portfolio, a testament to our expertise in web development using the power of HTML, CSS, and JavaScript. Our handcrafted websites showcase the fusion of creativity and technical prowess, delivering engaging user experiences. With clean and responsive designs, we've transformed our clients' visions into captivating digital realities. From e-commerce platforms to stunning corporate websites, our portfolio reflects our commitment to excellence in every line of code. Discover how we've leveraged the versatility of HTML, the styling finesse of CSS, and the interactivity of JavaScript to bring our clients' brands to life, making a lasting impact in the digital landscape.</p>
              {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
            <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
            <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
            <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
            
              {/* Other common content */}

              <a href="https://glowing-souffle-b2068f.netlify.app/" className='button-primary' target="_blank">Explore Client Portfolio</a>

            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
             
              <TitleSm title='' />

              <p className='desc-p'></p>
              {/* Other common content */}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  else if (id === "3") {
    content = (
      <div>
        {/* Content for id 1 */}
          {/* Content for id 2 */}
          <Head>
        <title>{post.title}</title>
      </Head>
      <TransitionEffect/>

      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
          <Title title={post.title} className='title-bg' /><br />
            <br />
            <TitleSm title='Unlock the road to adventure with our wheels of convenience' />
        
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Rent A Car Website' />
              <p className='desc-p'>For our valued client, we've developed a cutting-edge frontend for their Rent-a-Car website using React.js. This innovative and user-centric website provides an effortless browsing experience for customers looking to rent vehicles. With a sleek and intuitive design, our frontend solution offers easy navigation, real-time availability updates, and a seamless booking process. We've harnessed the power of React.js to create a dynamic and responsive platform that adapts flawlessly to various devices and screen sizes. Our commitment to delivering top-notch frontend experiences is evident in this Rent-a-Car website, where we've combined functionality, aesthetics, and performance to help our client drive their rental business forward.</p>
              {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
            <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
            <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
            <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
            
              {/* Other common content */}

              <a href="https://rentacar-16o.pages.dev/" className='button-primary' target="_blank">Explore Rent A Car</a>

            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
             
              <TitleSm title='' />

              <p className='desc-p'></p>
              {/* Other common content */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
    else if (id === "4") {
      content = (
        <div>
        {/* Content for id 1 */}
        <Head>
        <title>{post.title}</title>
      </Head>
      <TransitionEffect/>

      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
          <Title title={post.title} className='title-bg' /><br />
            <br />
            <TitleSm title='Building Dreams, One Brick at a Time' /> 
           
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Construction Company' />
              <p className='desc-p'>For our esteemed client in the construction industry, we've meticulously crafted a state-of-the-art frontend website using HTML, CSS, and JavaScript. This visually striking and user-friendly website embodies the essence of their brand and showcases their projects, services, and expertise. From dynamic animations to intuitive navigation, we've employed the latest frontend technologies to create a digital presence that not only captures the essence of our client's business but also engages and informs visitors effectively. Our commitment to delivering exceptional frontend solutions shines through in this construction company website, and we're proud to have played a part in enhancing our client's online presence.</p>
              {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
            <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
            <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
            <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
            
              {/* Other common content */}

              <a href="https://construction-710e2.web.app/" className='button-primary' target="_blank">Explore Construction Company</a>

            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
             
              <TitleSm title='' />

              <p className='desc-p'></p>
              {/* Other common content */}
              </div>
            </div>
          </div>
        </section>
      </div>
      );
    }
      else if (id === "5") {
        content = (
          <div>
            {/* Content for id 1 */}
            <Head>
        <title>{post.title}</title>
      </Head>
      <TransitionEffect/>

      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
          <Title title={post.title} className='title-bg' /><br />
            <br />
            <TitleSm title='Bringing Freshness to Your Doorstep' />
            
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Grocery Store' />
              <p className='desc-p'>Exclusively focusing on the frontend, we've designed a captivating and user-centric grocery store website for our client using HTML, CSS, and JavaScript. Our goal was to create a visually appealing and highly responsive platform that elevates the online shopping experience. From stunning product showcases to seamless navigation and intuitive user interfaces, our frontend development expertise shines through. This website is a testament to our commitment to delivering aesthetically pleasing and functional digital solutions that help businesses thrive in the ever-evolving online marketplace.</p>
              {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
            <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
            <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
            <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
            
              {/* Other common content */}

              <a href="https://grocery-shop-f47b3.web.app/" className='button-primary' target="_blank">Explore Grocery Store</a>

            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
             
              <TitleSm title='' />

              <p className='desc-p'></p>
              {/* Other common content */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
}
else if (id === "6") {
  content = (
    <div>
      {/* Content for id 1 */}
      <Head>
  <title>{post.title}</title>
</Head>
<TransitionEffect/>

<section className='post-details bg-top'>
  <div className='container'>
    <div className='heading-title'>
    <Title title={post.title} className='title-bg' /><br />
      <br />
      <TitleSm title='Unlocking Knowledge, Empowering Future' />
      
      <div className='img py'>
        <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
      </div>
      <div className='desc'>
        <TitleSm title='Online Education' />
        <p className='desc-p'>We're thrilled to showcase our frontend work for an Online Education platform, developed entirely using HTML, CSS, and JavaScript. Our team has meticulously crafted a user-friendly interface that facilitates easy navigation and a visually appealing learning experience. By combining the power of these technologies, we've ensured cross-browser compatibility and responsive design, allowing students to access educational content on various devices. From interactive lessons to engaging multimedia, our frontend brings the world of online education to life. With a focus on intuitive design and seamless interactivity, this frontend represents our dedication to transforming traditional learning into a digital journey for our client.</p>
        {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
      <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
      <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
      <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
      
        {/* Other common content */}

        <a href="https://onlinetution-64499.web.app/" className='button-primary' target="_blank">Explore Education</a>

      </div>
    </div>
    <Banner />
    <div className='heading-title'>
      <div className='desc'>
       
        <TitleSm title='' />

        <p className='desc-p'></p>
        {/* Other common content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 else {
  content = (
    <div>
      {/* Default content for other ids */}
      <Head>
        <title>{post.title}</title>
      </Head>
      <TransitionEffect/>

      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Services / Web Development' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Architects of Digital Success: Unleashing Cutting-Edge Web Development Solutions' />
              <p className='desc-p'>At Kinetechs Digital, we're more than developers we're architects of your digital success. Our web development services are designed to harness the latest technology trends, creating websites that resonate with your audience and drive conversions.</p>
              {/* Other common content */}
            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='Elevating Businesses through Innovative Web Development Solutions' />

              <p className='desc-p'>As a dedicated web development team, we take pride in crafting innovative and impactful digital solutions tailored to our clients' unique needs. With a team of highly skilled developers, designers, and digital strategists, we deliver web experiences that not only meet but exceed expectations. Our expertise spans across a wide spectrum of technologies and platforms, allowing us to create websites and web applications that are not only visually stunning but also highly functional and user-friendly. We understand that the digital landscape is ever-evolving, and we stay at the forefront of industry trends to ensure that our clients stay ahead of the competition. Whether you're a startup looking to establish an online presence or a well-established business seeking to revamp your digital strategy, our web development agency is here to turn your vision into a reality.</p>
              {/* Other common content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

return content;
}

export default TripplePost
