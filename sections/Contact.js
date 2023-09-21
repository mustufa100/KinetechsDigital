import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import React,{ useRef } from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook, BsTwitter } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import { TbBrandWhatsapp,TbBrandUpwork } from "react-icons/tb";
import emailjs from "@emailjs/browser"

const Contact = () => {

  const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_i9e6vop', 'template_4sgzgyo', form.current, '6q7UUQg6Qj5fz_hq-')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+92-333-300-8450</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Karachi</h3>
                  <span></span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>kinetechsdigital@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>kinetechsdigital@gmail.com</h3>
                  <span>Career at PixelTEK</span>
                </div>
              </div>
              <ul>

                <Link href="">
                <li className='icon'>
                  <BsTwitter size={25} />
                </li>
                </Link>


                <Link href="">
                <li className='icon'>
                  <TbBrandUpwork size={25} />
                </li>
                </Link>


                <Link href="">
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                </Link>


                <Link href="">
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
                </Link>


                <Link href="whatsapp://send?phone=+923333008450">
                <li className='icon'>
                  <TbBrandWhatsapp size={25} />
                </li>
                </Link>


              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form ref={form} onSubmit={sendEmail}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' name="user_name"/>
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' name="user_email"/>
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' name="user_budget"/>
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' name="user_timeframe"/>
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10'name="message"></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
