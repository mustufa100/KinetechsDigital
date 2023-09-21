import { Team } from "@/sections"
import Head from "next/head"
import React from "react"
import TransitionEffect from "@/components/TransitionEffect"

const team = () => {
  return (
    <>
      <Head>
        <title>Team - Kinetechs Digital</title>
      </Head>
      <TransitionEffect/>
      <Team />
    </>
  )
}

export default team
