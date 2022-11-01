import type { NextPage } from 'next'
// import { useEffect, useState } from "react"
import Head from 'next/head'
import Headers from '../components/Headers'
import Hero from '../components/Hero'
import Informatie from '../components/Informatie'
import KlantenProducten from '../components/KlantenProducten'
import Products from '../components/Products'
import { motion, useScroll } from "framer-motion";
import ParticleArea from '../components/ParticleArea'
import OrgChart from '../components/OrgChart'

const Home: NextPage = () => {

  const { scrollYProgress } = useScroll();

  

  return (

    // <div className='h-screen'>
    //       <motion.div
    //     className="progress-bar"
    //     style={{ scaleX: scrollYProgress } as any}
    //   />

      
      <div className="bg-[#18232E] text-white h-screen snap-y snap-mandatory overflow-auto scrollbar scrollbar-thumb-[#7962FA] scrollbar-track-[#1f2c3a]">

      {/* <ParticleArea /> */}

        <Head>
          <title>BPV - Wirelab</title>
        </Head>

        <Headers />

        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        <section id='informatie' className='snap-center'>
          <Informatie />
        </section>

        <section id='klanten' className='snap-center'>
          <KlantenProducten />
        </section>

        <section id='products' className='snap-center'>
          <Products />
        </section>
{/* 
        <section className='snap-center'>
          <OrgChart />
        </section> */}

</div>
// </div>

  )
}
export default Home
