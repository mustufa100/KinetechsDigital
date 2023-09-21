import { Blog } from "@/sections"
import Head from "next/head"
import TransitionEffect from "@/components/TransitionEffect"

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog - Kinetechs Digital</title>
      </Head>
      <TransitionEffect/>
      <Blog />
    </>
  )
}

export default Blogs
