import { expertise } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"
import Link from "next/link"

const DoublePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = expertise.find((post) => post.id === parseInt(id))

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
            <TitleSm title={post.title} className='title-bg' /><br />
              <br />
              <Title title='In the world of web development, every line of code is a brushstroke on the canvas of the internet' />
              <div className='img py'>
                <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
              </div>
              <div className='desc'>
                <TitleSm title='Architects of Digital Success: Unleashing Cutting-Edge Web Development Solutions' />
                <p className='desc-p'>At Kinetechs Digital, we're more than developers we're architects of your digital success. Our web development services are designed to harness the latest technology trends, creating websites that resonate with your audience and drive conversions.</p>
                <TitleSm title='Navigating the Digital Landscape' />
              <p className='desc-p'>But we don't stop at development. We understand the intricacies of the digital realm. Our holistic approach extends to crafting seamless user experiences, optimizing for search engines, and ensuring your web platform stands out in a crowded digital arena.</p>
              <TitleSm title='Shape Your Digital Destiny' />
              <p className='desc-p'>Join hands with Kinetechs Digital and transform your online presence into a powerhouse. Let us redefine your web development journey, empowering your business to reach new heights of success.</p>
                {/* Other common content */}
              </div>
            </div>
            <Banner />
            <div className='heading-title'>
              <div className='desc'>
                <TitleSm title='Elevating Businesses through Innovative Web Development Solutions' />

                <p className='desc-p'>As a dedicated web development team, we take pride in crafting innovative and impactful digital solutions tailored to our clients' unique needs. With a team of highly skilled developers, designers, and digital strategists, we deliver web experiences that not only meet but exceed expectations. Our expertise spans across a wide spectrum of technologies and platforms, allowing us to create websites and web applications that are not only visually stunning but also highly functional and user-friendly. We understand that the digital landscape is ever-evolving, and we stay at the forefront of industry trends to ensure that our clients stay ahead of the competition. Whether you're a startup looking to establish an online presence or a well-established business seeking to revamp your digital strategy, our web development agency is here to turn your vision into a reality.</p>
                {/* Other common content */}
                <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>              
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
            <TitleSm title={post.title} className='title-bg' /><br />
              <br />
              <Title title='START WITH A RIPPLE' /> <br />
              <Title title='END WITH A WAVE' /> 

              <div className='img py'>
                <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
              </div>
              <div className='desc'>
                <TitleSm title='Affordable Digital Marketing Agency for Small Businesses' />
                <p className='desc-p'>More exposure, more leads, and more sales, at a low expense—That's what you get when you partner with Aciano Technologies, the right digital marketing agency for small businesses. Our digital marketing strategies are successful because they are powered by data analytics, market research, and a bunch of creative minds delivering unrivaled results.</p>
                <TitleSm title='COLD HARD DATA,' />
                <TitleSm title='COLD HARD RESULTS.' />
              <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
              <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
              <p className='desc-p'>Are you eager to expand your reach globally?</p>
              <p className='desc-p'>Do you aim to attract precise clientele and engage key decision-makers?</p>
              <p className='desc-p'>Are your sales and revenues experiencing a decline?</p>
              <p className='desc-p'>Do you seek a transparent digital marketing agency?</p>
              <p className='desc-p'>Is securing the top-ranking spot your aspiration?</p>
              <p className='desc-p'>If the answer to each of these questions is a resounding 'yes,' then it's time to embrace the trusted digital marketing services of Kinetechs Digital.</p>

                {/* Other common content */}
              </div>
            </div>
            <Banner />
            <div className='heading-title'>
              <div className='desc'>
                <TitleSm title='Take the Leap and Elevate Your Business!' />
                <br />
                <TitleSm title='Why Choose Kinetechs Digital as Your Digital Marketing Partner?' />

                <p className='desc-p'>Because selecting a digital marketing company demands a track record of excellence. Our team is fueled by a blend of experience, expertise, and genuine enthusiasm for digital marketing services. Our client-centric approach drives us to prioritize only the services that truly benefit your business. With crystal-clear strategies and result-driven digital marketing solutions tailored to your industry's unique demands, we aim to bolster client retention rates, attract fresh leads, and ultimately optimize your revenue stream.</p>
                {/* Other common content */}

                <TitleSm title='GIVE US THE DETAILS. WE’LL GIVE YOU A BRAND.' />
                <p className="desc-p">Our recipe for success – a strategic approach backed by data which positions your brand to reach for the skies!</p>

                <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>

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
          <Head>
            <title>{post.title}</title>
          </Head>
          <TransitionEffect/>

          <section className='post-details bg-top'>
            <div className='container'>
              <div className='heading-title'>
              <TitleSm title={post.title} className='title-bg' /><br />
                <br />
                <Title title='Empowering your e-commerce dreams with cutting-edge solutions' /> 
                <div className='img py'>
                  <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
                </div>
                <div className='desc'>
                  <TitleSm title='E-commerce Website Development Services to Boost your Online Sales' />
                  <p className='desc-p'>Looking for visually appealing and robust e-commerce websites that sell? Try Us! We offer secure and scalable e-commerce website development and maintenance services with unrivaled customization and seamless integrations. Our e-commerce solutions excellently tailored to your business needs and expectations. Whether you want to build a brand new store or modify the existing one into robust, sales-driven, and Intuitive online store, discuss with us!</p>
                  <TitleSm title='Elevate Your Web Presence : Faster, Superior, and Budget-Friendly' />
                <p className='desc-p'>Welcome to Kinetechs Digital, where web development takes on a new dimension. Our web development consultancy is built upon cutting-edge technologies, advanced frameworks, and a wealth of expertise. With our services, your business will not only have a digital face but a lead-generating engine that propels your revenues to unprecedented heights.</p>
                
                <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>
                </div>
              </div>
              <Banner />
              <div className='heading-title'>
                <div className='desc'>
                  <TitleSm title='' />
  
                  <p className='desc-p'></p>
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
              <TitleSm title={post.title} className='title-bg' /><br />
                <br />
                <Title title='Unlocking efficiency through IT resource outsourcing, so you can thrive in your core business' />
                <div className='img py'>
                  <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
                </div>
                <div className='desc'>
                  <TitleSm title='IT Resource Outsourcing' />
                  <p className='desc-p'>At Kinetechs Digital, we understand that managing an in-house IT department can be a significant challenge for many businesses. That's where our IT Resource Outsourcing services come into play. We specialize in providing highly skilled and dedicated IT professionals who can seamlessly integrate with your team, helping you overcome IT resource gaps and ensuring the smooth operation of your digital infrastructure.</p>
                  <TitleSm title='Unlocking the Potential of IT Resource Outsourcing' />
                <p className='desc-p'>Our IT Resource Outsourcing solutions are designed to cater to the specific needs of your organization. Whether you require expertise in software development, system administration, cybersecurity, or IT support, we have a team of experts ready to assist you.</p>
                
                </div>
              </div>
              <Banner />
              <div className='heading-title'>
                <div className='desc'>
                  <TitleSm title='Tailored Solutions for Your Success' />
  
                  <p className='desc-p'>At Kinetechs Digital, we recognize that every business is unique. That's why our IT Resource Outsourcing solutions are highly customizable. We work closely with you to understand your specific requirements, goals, and challenges, tailoring our services to meet your exact needs.</p>
                  <p className='desc-p'>Whether you need short-term IT assistance, long-term IT partnership, or project-specific support, we have the expertise and flexibility to deliver exceptional results. Let us be your trusted IT resource partner, allowing you to focus on achieving your business objectives while we handle the technology that drives your success.</p>
                  {/* Other common content */}
                  <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>
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
                  <TitleSm title={post.title} className='title-bg' /><br />
                    <br />
                    <Title title='Unlock the potential of your business with seamless mobile experiences' /> 
                    <div className='img py'>
                      <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
                    </div>
                    <div className='desc'>
                      <TitleSm title='Mobile App Development' />
                      <p className='desc-p'>Experience Excellence in Mobile App Development with Kinetechs Digital. We create custom apps that are secure, scalable, and user-friendly, catering to startups, SMEs, and multinational enterprises.</p>
                      <TitleSm title='User-Centric Design' />
                    <p className='desc-p'>User experience is at the core of our mobile app development philosophy. Our design and development teams collaborate to create intuitive, visually appealing, and user-friendly apps that keep your audience engaged and coming back for more.</p>
                    <TitleSm title='Cutting-Edge Technology' />
                    <p className='desc-p'>Staying at the forefront of technological advancements is our commitment. We leverage the latest tools and frameworks to ensure your mobile app is not only functional but also future-ready, offering a seamless experience across devices.</p>
                      {/* Other common content */}
                      <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>
                    </div>
                  </div>
                  <Banner />
                  
                  <div className='heading-title'>
                    <div className='desc'>
                      {/* <TitleSm title='' />
      
                      <p className='desc-p'></p> */}
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
            <TitleSm title={post.title} className='title-bg' /><br />
              <br />
              <Title title='Maintenance and support are the pillars that uphold the longevity of digital success' /> 
              <div className='img py'>
                <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
              </div>
              <div className='desc'>
                <TitleSm title='Maintenance and Support' />
                <p className='desc-p'>At kinetechs Digital, we understand that launching a software solution is just the beginning of your digital journey. To ensure your technology investments continue to perform at their best and adapt to evolving needs, we offer comprehensive Maintenance and Support Services that guarantee the longevity and reliability of your software applications.</p>
                <TitleSm title='What We Offer :' />
                <br />
                <TitleSm title='Regular Updates and Enhancements' />
              <p className='desc-p'>Our dedicated team of experts stays vigilant, continuously monitoring your software for potential improvements. We provide timely updates to keep your application secure, compatible with the latest technologies, and equipped with new features to stay ahead of the curve.</p>

              <TitleSm title='Bug Fixes and Issue Resolution' />
              <p className='desc-p'>Software issues can arise unexpectedly, causing disruptions to your operations. We are here to promptly identify, troubleshoot, and resolve any glitches or bugs that may affect your software's performance, ensuring minimal downtime.</p>

              <TitleSm title='Performance Optimization' />
              <p className='desc-p'>We employ performance tuning techniques to enhance the speed and efficiency of your software. This includes optimizing database queries, improving code efficiency, and addressing bottlenecks to deliver a seamless user experience.</p>

              <TitleSm title='Security Updates' />
              <p className='desc-p'>Protecting your data and users is our top priority. We stay vigilant against emerging security threats and vulnerabilities. Our team proactively applies security patches and updates to keep your software safe from potential breaches.</p>

              <TitleSm title='24/7 Technical Support' />
              <p className='desc-p'>Issues can arise at any time, which is why we offer round-the-clock technical support. Our responsive team is available to address your concerns and provide solutions whenever you need them.</p>

              <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>
                {/* Other common content */}
              </div>
            </div>
            <Banner />
            <div className='heading-title'>
              <div className='desc'>
                {/* <TitleSm title='' />

                <p className='desc-p'></p> */}
                {/* Other common content */}
               
              </div>
            </div>
          </div>
        </section>
      </div>
    );
} 
else if (id === "7") {
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
          <TitleSm title={post.title} className='title-bg' /><br />

            <br />
            <Title title='AI and Machine Learning: Where data transforms into intelligence' /> 
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
            <TitleSm title='AI and Machine Learning' />
              <p className='desc-p'>Unlock the power of data-driven decision-making with kinetechs digital AI and Machine Learning Services. In an era where data is abundant, making sense of it and extracting valuable insights can be a game-changer for your business. Our team of experts specializes in harnessing the potential of artificial intelligence (AI) and machine learning (ML) to drive innovation, efficiency, and growth.</p>  
              
              <TitleSm title='Our AI and Machine Learning Offerings :' />
              <br />

              <TitleSm title='Custom Machine Learning Solutions' />
              <p className='desc-p'>Tailored to Your Needs: We develop custom machine learning models that are designed specifically for your business challenges. Whether it's predictive analytics, image recognition, natural language processing, or recommendation systems, we've got you covered.</p> 
              
              <TitleSm title='Data Analytics and Visualization' />
              <p className='desc-p'>Data-Driven Decision Making: We help you transform raw data into actionable insights. Our analytics and visualization services enable you to understand trends, identify opportunities, and make informed decisions.</p> 
              
              <TitleSm title='AI-Powered Automation' />
              <p className='desc-p'>Streamline Operations: Automate repetitive tasks and processes with AI-driven solutions. Improve efficiency, reduce errors, and free up your team's time for more strategic work.</p> 
              
              <TitleSm title='Predictive Maintenance' />
              <p className='desc-p'>Minimize Downtime: Predictive maintenance solutions leverage AI to anticipate equipment failures before they happen, allowing you to schedule maintenance at the right time and avoid costly disruptions.</p> 

              <TitleSm title='Natural Language Processing (NLP)' />
              <p className='desc-p'>Understand and Engage: Harness the power of NLP to analyze and understand text data. Improve customer interactions, sentiment analysis, chatbots, and content summarization.</p> 

              <TitleSm title='AI Consulting and Strategy' />
              <p className='desc-p'>Guidance at Every Step: We don't just build AI solutions; we provide consulting and strategy services to help you navigate the complex landscape of AI adoption. We ensure your AI initiatives align with your business objectives.</p> 
              
              <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>
              
              {/* Other common content */}
            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
              {/* <TitleSm title='' />

              <p className='desc-p'></p> */}
              {/* Other common content */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
else if (id === "8") {
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
          <TitleSm title={post.title} className='title-bg' /><br />
            <br />
            <Title title='Guiding businesses towards success through strategic insights' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Consulting and Advisory' />
              <p className='desc-p'>At kinetechs digital we believe that strategic guidance and expert advice are the cornerstones of success in the ever-evolving business landscape. Our Consulting and Advisory Services are designed to empower your organization with the insights and strategies needed to thrive, innovate, and achieve your goals.</p>

              <TitleSm title='What Sets Us Apart :' />
              <br />

              <TitleSm title='Industry Expertise'/>
              <p className='desc-p'>Our team of seasoned professionals possesses deep industry knowledge across various sectors. We understand the unique challenges and opportunities your business faces, enabling us to provide relevant and practical advice.</p>

              <TitleSm title='Tailored Solutions' />
              <p className='desc-p'>One size does not fit all. We work closely with you to develop customized solutions that align with your specific objectives, ensuring that our recommendations are both actionable and effective.</p>

              <TitleSm title='Strategic Vision' />
              <p className='desc-p'>Our consulting services extend beyond short-term fixes. We help you develop a long-term strategic vision that positions your organization for sustainable growth and success.</p>

              <TitleSm title='Digital Transformation' />
              <p className='desc-p'>In today's digital age, staying competitive requires embracing technology. We provide guidance on digital transformation strategies, helping you leverage the latest tools and trends to drive innovation.</p>

              <TitleSm title='Operational Efficiency' />
              <p className='desc-p'>Efficiency is the key to profitability. Our consultants analyze your processes and operations to identify areas for improvement, cost savings, and enhanced productivity.</p>

              <TitleSm title='Risk Management' />
              <p className='desc-p'>Effective risk management is crucial for sustainable growth. We help you identify, assess, and mitigate risks, ensuring your business remains resilient in a dynamic environment.</p>
              {/* Other common content */}
              <div className="links">
                  <Link href="mailto:kinetechsdigital@gmail.com" className='button-primary'>Join Us</Link>
                </div>
            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
              {/* <TitleSm title='' />

              <p className='desc-p'></p> */}
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
                  <div className="links">
                  <Link href="/contact" className='button-primary'>Join Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return content;
}

export default DoublePost;
