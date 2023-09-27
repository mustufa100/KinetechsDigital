import { blog } from "@/assets/data/dummydata"
import BlogCard from "@/components/BlogCard"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import SubscribeBanner from "@/components/SubscribeBanner"

import React from "react"

const Blog = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='BLOG' /> <br />
            <br />
            <Title title='Our views on marketing, design & technology' />
          </div>
          <BlogCard />
          <SubscribeBanner/>
          
        </div>
      </section>
    </>
  )
}

export default Blog
