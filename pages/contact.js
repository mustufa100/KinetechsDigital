import { Contact } from "@/sections"
import Head from "next/head"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Kinetechs Digital</title>
      </Head>
      <TransitionEffect/>
      <Contact />
    </>
  )
}

export default contact
