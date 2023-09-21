import Services from "@/sections/Services"
import Head from "next/head"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"

const services = () => {
  return (
    <>
      <Head>
        <title>Team - Kinetechs Digital</title>
      </Head>
      <TransitionEffect/>
      <Services />
    </>
  )
}

export default services
