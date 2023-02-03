import React from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import Mobile from '../components/three/Mobile'

type Props = {
    bpvTaakTweePageTitle:string,
    bpvTaakTweeHeader:string,
    bpvTaakTweeTekst:string,
}

export const queryFragment = `
bpvTaakTweePageTitle
bpvTaakTweeHeader
bpvTaakTweeTekst
`

const BpvTaakTwee = ({bpvTaakTweeHeader, bpvTaakTweeTekst, bpvTaakTweePageTitle}: Props) => {
    return (

    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5,
    }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='invisible absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:visible'>{bpvTaakTweePageTitle}</h3>

    <div className="hidden md:block md:w-[40%] md:h-[50%]">
            <Canvas
            style={{ height: "600px", width: "400px"}}
            className='hidden md:block -mb-20 md:mb-0 md:visible md:flex-shrink-0 w-0 h-0 rounded-full object-cover
            md:rounded-lg md:w-24 md:h-95 xl:w-[500px] xl:h-[650px] md:mt-20'
            >        
                <Mobile />
            </Canvas>
            </div>

    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-xl md:text-6xl md:leading-[50px] uppercase font-bold text-[#7962fa]'>{bpvTaakTweeHeader}</h4>
        <p className='leading-relaxed text-xs xl:text-sm text-gray-300 font-light'>
            {bpvTaakTweeTekst}
        </p>
    </div>



    </motion.div>
    
    )
}

export default BpvTaakTwee 