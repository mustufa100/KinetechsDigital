import Services from "@/sections/Services"
import Head from "next/head"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"
import Maintenance from "@/components/Maintenance"
const maintenance = () => {
  return (
    <>
      <Head>
        <title>unavalaible - Kinetechs Digital</title>
      </Head>
      <TransitionEffect/>
      <Maintenance />
    </>
  )
}

export default maintenance
