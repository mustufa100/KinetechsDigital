import React from "react"
import { TitleLogo } from "./common/Title"
import Link from "next/link"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

const SubscribeBanner = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3kp1yga', 'template_gk1hgxi', form.current, '6q7UUQg6Qj5fz_hq-')
          .then((result) => {
              console.log(result.text);
              form.current.reset();

          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <>
      <section className='banner'>
      <form ref={form} className='email-container' onSubmit={sendEmail}>

        <div className='container'>
          <div>
            <TitleLogo title='Subscribe To Our NewsLetter' />
            <br />
            <input type="text" className="subscribe-input" placeholder="Enter your email" name="user_email" />
            
          </div>
          <div className="links">
            <button className='button-primary'>Subscribe</button>
          </div>
          
        </div>
        </form>
      </section>
      <style jsx>{`
        .banner{
            margin-bottom:20px;
        }
        .subscribe-input {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          font-size: 20px;
        }

        .subscribe-input::placeholder {
          color: #fff;
        }

        
       
      `}</style>
    </>
  )
}

export default SubscribeBanner