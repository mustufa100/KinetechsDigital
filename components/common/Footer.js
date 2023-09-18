import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsTwitter } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { TbBrandWhatsapp,TbBrandUpwork } from "react-icons/tb";
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='TEK' caption='Pixel' className='logobg' />
              <br />
              <span>
                Reach Us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+92-333-019-5702</h3>
              <br />
              <button className='button-primary'>Join Us</button>
            </div>
            <ul>
              <h3>PixelTEK</h3>
              <li>
                <Link href='/'>About PixelTEK</Link>
              </li>
              <li>
                <Link href='/'>PixelTEK Team</Link>
              </li>
              <li>
                <Link href='/'>PixelTEK Projects</Link>
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
                  <Link href='https://twitter.com/PixellTek'>
                    <BsTwitter size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.upwork.com/agencies/1700891203159498752/'>
                    <TbBrandUpwork size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/pixelteksoftwares/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://www.linkedin.com/company/pixeltek-softwares/about/?viewAsMember=true'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='whatsapp://send?phone=+923330195702'>
                    <TbBrandWhatsapp size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 THE PixelTEK Software. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>PixelTEK Software COMPANY</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
