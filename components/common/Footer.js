import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { AiFillGoogleSquare, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { TbBrandWhatsapp } from "react-icons/tb";
import Image from "next/image"
import image1 from "../../public/images/kinelogo-removebg-preview.png"
import { FaPhoneSquare } from "react-icons/fa";

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
              <h3>+1 707-370-4231</h3>
              <br />
              <Link href="tel:+17073704231" className='button-primary'>Contact</Link>
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
                <Link href='/showcase'>Projects</Link>
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
                <Link href='/services/1'>Website Development</Link>
              </li>
              <li>
                <Link href='/services/2'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services/3'>E-Commerce Solutions</Link>
              </li>
              {/* <li>
                <Link href='/services/4'>Brand Development</Link>
              </li> */}
              <li>
                <Link href='/services/5'>Mobile App Development</Link>
              </li>
              {/* <li>
                <Link href='/services/6'>Maintenance And Support</Link>
              </li>
              <li>
                <Link href='/services/7'>AI And Machine Learning</Link>
              </li>
              <li>
                <Link href='/services/8'>Consulting And Advisory</Link>
              </li> */}
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
                  <Link href='https://www.facebook.com/profile.php?id=61552884783681'target="_blank">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/kinetechsdigital/'target="_blank">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                {/* <li>
                  <Link href='https://www.linkedin.com/company/kinetechs-digital/'target="_blank">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li> */}
                <li>
                  <Link href='tel:+17073704231'target="_blank">
                    <FaPhoneSquare size={25}/>

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
