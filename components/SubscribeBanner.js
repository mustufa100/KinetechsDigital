import React from "react"
import { TitleLogo } from "./common/Title"
import Link from "next/link"
import { useRef,useState } from "react"
import emailjs from "@emailjs/browser"

const SubscribeBanner = () => {

  const form = useRef();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    // Basic email format validation
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const userEmail = form.current.querySelector("input[type='email']").value;

    if (!validateEmail(userEmail)) {
      setEmailError("Please provide a valid email address.");
      return;
    }

    // Reset the email error
    setEmailError("");

    emailjs
      .sendForm("service_ei51hur", "template_6lb5v9w", form.current, "6q7UUQg6Qj5fz_hq-")
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section className='banner'>
      <form ref={form} onSubmit={sendEmail}>

        <div className='container'>
          <div>
            <TitleLogo title='Subscribe To Our NewsLetter' />
            <br />
            <input type="email" className="subscribe-input" placeholder="Enter your email" name="user_email"/>
            {emailError && <div className="error2">{emailError}</div>}

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