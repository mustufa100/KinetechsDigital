import { blogdata } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query
  const post = blogdata.find((post) => post.id === parseInt(id))

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
            <TitleSm title='In the world of tech, choosing the right stack is like picking the perfect tool for crafting your digital masterpiece' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='Choosing The Right Technology Stack For Your Project' />
              <p className='desc-p'>Selecting the appropriate technology stack for your project is a crucial decision that can significantly impact its success. The technology stack comprises programming languages, frameworks, libraries, and tools used to develop a software application. Making the right choices can streamline development, improve scalability, and enhance the overall user experience. In this blog, we'll guide you through the process of choosing the right technology stack for your project.</p>
             
              <TitleSm title='Define Your Project Goals' />
              <p className="desc-p">Before delving into technology choices, it's essential to clearly define your project's goals and requirements. Consider factors such as the project's scale, complexity, target audience, and desired features. Are you building a web application, a mobile app, or a desktop software? Knowing your project's objectives will help you narrow down your technology options.</p>

              <TitleSm title="Conclusion"/>
              <p className="desc-p">Choosing the right technology stack for your project is a critical step in its development journey. It involves a thorough assessment of your project's goals, team expertise, scalability requirements, security considerations, and budget constraints. By carefully considering these factors, you can make informed decisions that lead to a successful and sustainable project. Keep in mind that technology stack choices are not set in stone, and it's possible to adapt and evolve your stack as your project grows and changes.</p>
              {/* Other common content */}

            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
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
            <TitleSm title='User-centered design is the compass that guides software to success by putting users at the center of innovation' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='The Importance Of User-Centered Design In Software' />
              <p className='desc-p'>User-centered design (UCD) is a fundamental approach to software development that prioritizes the end user's needs, preferences, and experiences. It places users at the heart of the design process, ensuring that software solutions are intuitive, efficient, and enjoyable to use. In this short blog, we'll explore the significance of user-centered design and its positive impact on software development.</p>

              <TitleSm title='Enhanced User Experience' />
              <p className='desc-p'>User-centered design starts by understanding the target audience and their requirements. This knowledge informs the design process, resulting in software that aligns with users' expectations. When users find an application easy to navigate and use, their overall experience is significantly improved.</p>

              <TitleSm title='Improved Usability' />
              <p className='desc-p'>Usability is a key aspect of UCD. It focuses on making software intuitive and straightforward. Through iterative testing and feedback, UCD identifies and addresses usability issues early in the development cycle. This ensures that users can perform tasks efficiently, reducing frustration and increasing productivity.</p>

              <TitleSm title='Higher User Satisfaction' />
              <p className='desc-p'>When software caters to users' needs and preferences, it leads to higher levels of satisfaction. Satisfied users are more likely to continue using the software, recommend it to others, and provide valuable feedback for further improvement.</p>

              <TitleSm title='Reduced Development Costs' />
              <p className='desc-p'>While user-centered design may involve upfront research and testing, it ultimately saves development costs in the long run. By identifying and fixing usability issues early, you avoid costly redesigns and redevelopments that can arise from user dissatisfaction.</p>

              <TitleSm title='Conclusion' />
              <p className='desc-p'>User-centered design is not a one-time activity but an ongoing process that should evolve alongside user needs and technological advancements. By placing users at the center of your software development efforts, you create products that are more efficient, user-friendly, and successful in the market. The importance of user-centered design cannot be overstated, as it ultimately leads to happier users and more successful software projects.</p>

              {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
            <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
            <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
            <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
            
              {/* Other common content */}

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
            <TitleSm title='DevOps bridges the gap between software development and deployment, accelerating innovation and reliability' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='The Impact Of DevOps On Software Development And Deployment' />
              <p className='desc-p'>DevOps, a combination of "development" and "operations," is a transformative approach to software development and deployment that has gained immense popularity in recent years. It emphasizes collaboration, automation, and continuous feedback between development and IT operations teams. In this short blog, we'll explore the significant impact DevOps has on the software development and deployment process.</p>

              <TitleSm title='Accelerated Development Cycles' />
              <p className='desc-p'>DevOps promotes shorter development cycles by fostering a culture of collaboration and automation. This means that new features and updates can be delivered to users more rapidly, keeping the software competitive and aligned with evolving user needs.</p>

              <TitleSm title='Continuous Integration and Continuous Delivery (CI/CD)' />
              <p className='desc-p'>One of the cornerstones of DevOps is CI/CD pipelines, which automate the building, testing, and deployment of software. This automation reduces the likelihood of human errors and ensures that code changes can be quickly and reliably delivered to production environments.</p>

              <TitleSm title='Improved Collaboration' />
              <p className='desc-p'>DevOps breaks down the traditional silos between development and operations teams. Collaboration is encouraged, leading to better communication, shared responsibilities, and a deeper understanding of each other's roles. This collaboration ultimately results in smoother software development and deployment processes.</p>

              <TitleSm title='Enhanced Stability and Reliability' />
              <p className='desc-p'>While DevOps focuses on speed and agility, it also places a strong emphasis on stability and reliability. Automation and rigorous testing help identify and resolve issues early in the development process, leading to more robust software.</p>

              <TitleSm title='Faster Issue Resolution' />
              <p className='desc-p'>DevOps practices often include monitoring and feedback loops that provide real-time insights into software performance. This allows teams to detect and address issues quickly, minimizing downtime and ensuring a better user experience.</p>

              <TitleSm title='Conclusion' />
              <p className='desc-p'>The impact of DevOps on software development and deployment is profound. It streamlines processes, accelerates delivery, enhances quality, and fosters collaboration between development and operations teams. Embracing DevOps is no longer an option but a necessity for organizations looking to stay competitive in the fast-paced world of software development. Its benefits extend beyond the development phase, positively influencing the entire software lifecycle and the end-user experience.</p>
              {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
            <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
            <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
            <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
            
              {/* Other common content */}


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
            <TitleSm title='The future of software development is intertwined with AI and machine learning, unlocking new realms of possibilities' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='The Future Of AI And Machine Learning In Software Development' />
              <p className='desc-p'>Artificial Intelligence (AI) and Machine Learning (ML) are revolutionizing the software development landscape. These technologies are no longer confined to science fiction; they are rapidly becoming integral tools for developers and organizations worldwide. In this blog, we'll explore the exciting future of AI and ML in software development.</p>

              <TitleSm title='Enhanced Code Quality' />
              <p className='desc-p'>AI and ML algorithms can analyze existing codebases, identify vulnerabilities, and suggest improvements. Developers can rely on AI-driven code reviews to enhance code quality, reduce bugs, and ensure adherence to best practices.</p>

              <TitleSm title='Predictive Analytics' />
              <p className='desc-p'>AI can predict software bugs, performance bottlenecks, and even user behavior. Developers can proactively address potential issues before they impact the end-users, resulting in a smoother user experience.</p>

              <TitleSm title='Automation of Routine Tasks' />
              <p className='desc-p'>AI-driven tools can automate repetitive development tasks, such as code generation, testing, and deployment. This automation frees up developers to focus on more creative and complex aspects of software development.</p>

              <TitleSm title='Natural Language Processing (NLP)' />
              <p className='desc-p'>NLP algorithms enable developers to create software interfaces that understand and respond to human language. Chatbots, virtual assistants, and voice-activated applications are examples of how NLP is transforming user interactions.</p>

              <TitleSm title='Personalized User Experiences' />
              <p className='desc-p'>AI and ML enable software to adapt and personalize user experiences based on individual preferences and behaviors. This personalization enhances user engagement and satisfaction.</p>

              <TitleSm title='Improved Testing' />
              <p className='desc-p'>AI-powered testing tools can perform comprehensive testing scenarios at speeds impossible for humans. This results in more thorough and efficient software testing, reducing the likelihood of post-release issues.</p>

              <TitleSm title='Conclusion' />
              <p className='desc-p'>The future of AI and Machine Learning in software development is incredibly promising. These technologies are poised to reshape how software is created, tested, and deployed. As AI and ML continue to mature, developers and organizations that embrace these advancements will gain a competitive edge, delivering higher-quality software with greater efficiency and innovation. The journey into this AI-driven future has just begun, and the possibilities are limited only by our imaginations.</p>
              {/* <TitleSm title='COLD HARD DATA, COLD HARD RESULTS.' />
            <p className='desc-p'>At Kinetechs Digital, we embark on a journey to amplify your business's impact. By assessing your industry and target market, we curate a tailored selection of digital marketing solutions that fortify your market presence, amplify visibility, and culminate in enhanced ROI. Our all-encompassing approach to digital marketing spans key domains, including Search Engine Optimization, Social Media Marketing, and Content Writing.</p>
            <TitleSm title='Recognize the Signs: Your Business Requires Our Digital Marketing Services' />
            <p className='desc-p'>Are you eager to expand your reach globally?</p> */}
            
              {/* Other common content */}

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
            <TitleSm title='' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <div className='desc'>
              <TitleSm title='' />
              <p className='desc-p'></p>
              {/* Other common content */}
            </div>
          </div>
          <Banner />
          <div className='heading-title'>
            <div className='desc'>
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


export default SinglePost
