import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsTwitter } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { TbBrandWhatsapp,TbBrandUpwork } from "react-icons/tb";
import Image from "next/image"
import image1 from "../../assets/images/logo-white-removebg-preview.png"

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
              <h3>+92-333-300-8450</h3>
              <br />
              <Link href="whatsapp://send?phone=+923333008450" className='button-primary'>Contact</Link>
            </div>
            <ul>
              <h3>KINETECHS DIGITAL</h3>
              <li>
                <Link href='/'>About</Link>
              </li>
              <li>
                <Link href='/'>Team</Link>
              </li>
              <li>
                <Link href='/'>Showcase</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              {/* <li>
                <Link href='/'>Demo design system</Link>
              </li> */}
              <li>
                <Link href='/'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Web Design & Development</Link>
              </li>
              <li>
                <Link href='/'>Mobile App Development</Link>
              </li>
              <li>
                <Link href='/'>Ecommerce Solutions</Link>
              </li>
              <li>
                <Link href='/'>DevOps</Link>
              </li>
              <li>
                <Link href='/'>IT Resource Outsourcing</Link>
              </li>
            </ul>
            
            <ul>
              <h3>CONNECT</h3>
              <div className='connect'>
                <li>
                  <Link href=''>
                    <BsTwitter size={25} />
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <TbBrandUpwork size={25} />
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href=''>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='whatsapp://send?phone=+923333008450'>
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
