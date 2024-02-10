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
            <Title title='Why Choose Kinetechs Digital?' />
            <p>Strategic Marketing: Harness the power of strategic marketing tailored to your unique goals. Our team crafts compelling campaigns to amplify your online presence.</p>
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


