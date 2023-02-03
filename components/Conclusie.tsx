import React from 'react'
import { motion } from 'framer-motion'


type Props = {
    conclusiePageTitle:string,
    conclusieHeader:string,
    conclusieTekst:string,
}

export const queryFragment = `
conclusiePageTitle
conclusieHeader
conclusieTekst
`

const Conclusie = ({conclusieHeader, conclusieTekst, conclusiePageTitle}: Props) => {
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
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row md:w-[50%] max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='invisible absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:visible'>{conclusiePageTitle}</h3>

    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-xl md:text-6xl md:leading-[50px] uppercase font-bold text-[#7962fa]'>{conclusieHeader}</h4>
        <p className='leading-relaxed text-xs xl:text-sm text-gray-300 font-light'>
            {conclusieTekst}
        </p>
    </div>

    </motion.div>
    
    )
}

export default Conclusie