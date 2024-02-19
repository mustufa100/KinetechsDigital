import { Title, TitleSm } from "@/components/common/Title";
import Link from "next/link";
import React, { useRef, useState } from "react";
import {
  AiFillGoogleSquare,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPhoneSquare } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TbBrandWhatsapp, TbBrandUpwork, TbBrandFacebook } from "react-icons/tb";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css"; // Import the styles

const Contact = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (email) => {
    // Basic email format validation
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
  };

  const isGmail = (email) => {
    const domain = email.split("@")[1];
    return domain === "gmail.com";
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Validate that the phone number is not empty
    if (!phoneNumber) {
      setPhoneError("Phone number is required.");
      return false;
    }

    // You can add more sophisticated phone number validation here if needed

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current["user_email"].value;

    if (!validateEmail(userEmail)) {
      setEmailError("Please provide a valid email address.");
      return;
    }

    if (!isGmail(userEmail)) {
      setEmailError("Please use a Gmail email address.");
      return;
    }

    const userPhoneNumber = form.current["user_number"].value;

    if (!validatePhoneNumber(userPhoneNumber)) {
      // Phone number validation failed, don't proceed with sending the email
      return;
    }

    // Reset the email and phone number errors
    setEmailError("");
    setPhoneError("");

    emailjs
      .sendForm(
        "service_i9e6vop",
        "template_4sgzgyo",
        form.current,
        "6q7UUQg6Qj5fz_hq-"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="CONTACT" /> <br />
            <br />
            <Title title="Let's start right now!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <a href="tel:+17073704231">
                    <h3>(213) 928-1535</h3>
                  </a>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className="box">
                  <IoLocationOutline size={30} className="icons" />
                  <h3>Florida</h3>
                  <span>9631 Fountainebleau Blvd, #411, Miami, Florida, 33172</span>
                </div>
                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <a href="mailto:info@kinetechsdigital.com">
                    <h3>info@kinetechsdigital.com</h3>
                  </a>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className="box">
                  {/* <BiUserCircle size={30} className="icons" />
                  <a href="mailto:kinetechsdigital@gmail.com">
                    <h3>kinetechsdigital@gmail.com</h3>
                  </a>
                  <span>Career at KINETECHS DIGITAL</span> */}
                </div>
              </div>
              <ul>
                <Link href='https://twitter.com/kinetechDigital'target="_blank">
                  <li className="icon">
                    <BsTwitter size={25} />
                  </li>
                </Link>

                <Link href='https://www.facebook.com/profile.php?id=61552884783681'target="_blank">
                  <li className="icon">
                    <TbBrandFacebook size={25} />
                  </li>
                </Link>

                <Link href='https://www.instagram.com/kinetechsdigital/'target="_blank">
                  <li className="icon">
                    <AiFillInstagram size={25} />
                  </li>
                </Link>

                {/* <Link href='https://www.linkedin.com/company/kinetechs-digital/'target="_blank">
                  <li className="icon">
                    <AiFillLinkedin size={25} />
                  </li>
                </Link> */}

                <Link href="tel:(213) 928-1535"target="_blank">
                  <li className="icon">
                    <FaPhoneSquare size={25} />

                  </li>
                </Link>
              </ul>
            </div>
            <div className="right w-70">
              <TitleSm title="Make an online enquiry" />
              <p className="desc-p">
                Got questions? Ideas? Fill out the form below to get our
                proposal.
              </p>

              <form ref={form} onSubmit={sendEmail} autoComplete="off">
                <div className="grid-2">
                  <div className="inputs">
                    <span>Name</span>
                    <input type="text" name="user_name" required />
                  </div>
                  <div className="inputs">
                    <span>Email</span>
                    <input type="text" name="user_email" required />
                    {emailError && <div className="error">{emailError}</div>}
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Your Budget</span>
                    <input type="number" name="user_budget" required />
                  </div>
                  <div className="inputs">
                    <span>Phone Number</span>
                    <input
                      type="text"
                      name="user_number"
                      required
                      placeholder="E.g., (213) 928-1535"
                    />
                    {phoneError && <div className="error">{phoneError}</div>}
                  </div>
                </div>
                <div className="inputs">
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols="30" rows="10" name="message"></textarea>
                </div>
                <button className="button-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
