import React from "react"
import { Title, TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <TitleLogo title='Ready to Take the Lead in Your Industry?' />
          </div>
          <div className="links">
            <Link href="mailto:kinetechsdigital@gmail.com" className='button-primary'>Mail Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
