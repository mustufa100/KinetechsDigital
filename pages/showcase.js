import { ShowCase } from "@/sections"
import Head from "next/head"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"

const showcase = () => {
  return (
    <>
      <Head>
        <title>ShowCase - Kinetechs Digital</title>
      </Head>
      <TransitionEffect/>
      <ShowCase/>
    </>
  )
}

export default showcase
