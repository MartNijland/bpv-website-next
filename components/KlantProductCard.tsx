/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const KlantProductCard = (props: Props) => {
    return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full xl:w-[50%] snap-center bg-[#1f2c3a] p-10
                        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1, y:0
        }}
        viewport={{ once:true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://wirelab2018.s3.amazonaws.com/Brands/Wirelab_Client_grolsch.svg" alt="Grolsch" />

        <div className='px-0 md:px-10'>
            <h4 className='md:text-4xl font-light'>Beugelprinter</h4>
            <p className='font-bold font-serif text-sm md:text-2xl mt-1'>GROLSCH</p>
            <div className=''>
            <p className='uppercase py-5 text-gray-300 text-sm md:text-xl'>Optimalisatie en crieeren van een nieuw design</p>
            <p className='text-xs md:text-base'>Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            <p className='text-xs md:text-base'>Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
            </div>
        </div>
    </article>
    )
}

export default KlantProductCard