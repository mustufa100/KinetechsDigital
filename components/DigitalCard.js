import React from "react"
import { Card } from "./common/Card"
import { expertise2 } from "@/assets/data/dummydata"

const DigitalCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {expertise2.map((item) => (
          <Card data={item} key={item.id} path='blogs' />
        ))}
      </div>
    </>
  )
}

export default DigitalCard
