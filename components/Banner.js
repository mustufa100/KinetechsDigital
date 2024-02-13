import React from "react"
import { TitleLogo } from "./common/Title"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <TitleLogo title='Here we initiate your project with us' />
          </div>
          <div className="links">
            <Link href="/contact" className='button-primary'>Contact US</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
