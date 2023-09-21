import { Hero } from "@/sections"
import Head from "next/head"
import TransitionEffect from "@/components/TransitionEffect"

export default function Home() {
  return (
    <>
      <Head>
        <title>Kinetechs Digital</title>
      </Head>
      <TransitionEffect/>
      <Hero />
    </>
  )
}
