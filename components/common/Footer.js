import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsTwitter } from "react-icons/bs"
import { AiFillGoogleSquare, AiFillLinkedin } from "react-icons/ai"
import { TbBrandWhatsapp,TbBrandUpwork } from "react-icons/tb";
import Image from "next/image"
import image1 from "../../public/images/kinelogo-removebg-preview.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
            <Link href='/'>
              {/* <TitleLogo title='TEK' caption='Pixel' className='logomin' /> */}
              <Image src={image1} alt="Logo" width={200} height={70}/>
            </Link>

              <br />
              <span>
                Reach Us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+44-7708-579388</h3>
              <br />
              <Link href="whatsapp://send?phone=+447708579388" className='button-primary'>Contact</Link>
            </div>
            <ul>
              <h3>KINETECHS DIGITAL</h3>
              <li>
                <Link href='/agency'>About</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services/1'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/services/2'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services/3'>Ecommerce Solutions</Link>
              </li>
              <li>
                <Link href='/services/4'>IT Resource Outsourcing</Link>
              </li>
              <li>
                <Link href='/services/5'>Mobile App Development</Link>
              </li>
              <li>
                <Link href='/services/6'>Maintenance And Support</Link>
              </li>
              <li>
                <Link href='/services/7'>AI And Machine Learning</Link>
              </li>
              <li>
                <Link href='/services/8'>Consulting And Advisory</Link>
              </li>
            </ul>
            
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href='https://twitter.com/kinetechDigital'target="_blank">
                    <BsTwitter size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.upwork.com/agencies/1705282770786992128/'target="_blank">
                    <TbBrandUpwork size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='mailto:info@kinetechsdigital.com'target="_blank">
                    <AiFillGoogleSquare size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/kinetechs-digital/'target="_blank">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='whatsapp://send?phone=+447708579388'target="_blank">
                    <TbBrandWhatsapp size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 THE KINETECHS DIGITAL. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>KINETECHS DIGITAL COMPANY | TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
