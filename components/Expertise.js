import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='OUR EXPERTISE' />
            <p>Our team comprises talented developers, designers, and strategists with a wealth of experience in diverse industries.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' path='services' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise


