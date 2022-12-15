import React from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import ReactThree from '../components/three/ReactThree'

type Props = {
    bpvTaakEenPageTitle:string,
    bpvTaakEenHeader:string,
    bpvTaakEenTekst:string,
}

export const queryFragment = `
bpvTaakEenPageTitle
bpvTaakEenHeader
bpvTaakEenTekst
`

const BpvTaakEen = ({bpvTaakEenHeader, bpvTaakEenTekst, bpvTaakEenPageTitle}: Props) => {
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
    <h3 className='hidden absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:visible'>{bpvTaakEenPageTitle}</h3>

    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-xl md:text-6xl md:leading-[50px] uppercase font-bold text-[#7962fa]'>{bpvTaakEenHeader}</h4>
        <p className='text-xs xl:text-base text-gray-300 font-light'>
            {bpvTaakEenTekst}
        </p>
    </div>

    <div className="hidden md:w-[80%] md:h-[50%]">
            <Canvas
            style={{ height: "600px", width: "550px"}}
            className='hidden -mb-20 md:mb-0 md:visible md:flex-shrink-0 w-0 h-0 rounded-full object-cover
            md:rounded-lg md:w-24 md:h-95 xl:w-[500px] xl:h-[650px] md:mt-20'
                camera={{ 
                    
                }}
            >        
                <ReactThree />
            </Canvas>
            </div>

    </motion.div>
    
    )
}

export default BpvTaakEen 