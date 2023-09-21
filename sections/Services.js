import { expertise } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            {/* <p className='desc-p'>As a pioneer in Custom Application Development, we specialize in creating SaaS products tailored precisely to businesses like yours. Our team of seasoned custom application development experts brings years of experience, ensuring excellence in bespoke software development services.</p> */}
            <br />
            <Title title='Unique technologies & modern approach' className='title-bg' />
          </div>
          <div className='grid-2 py'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true} path="services" />
            ))}
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
