import React from 'react'
import ProductCards from '../components/ProductCards'

type Props = {}

const Products = (props: Props) => {
    // const projects = [1, 2, 3, 4, 5];
    return (
        <div className='p-10 h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Producten</h3>

            <div className='relative w-full flex snap-x snap-mandatory z-20 justify-center'>
            <ProductCards />
            </div>

            <div className='w-full absolute top-[30%] bg-[#7962FA]/10 left-0 h-[500px] -skew-y-12'></div>
        </div>
    )
}

export default Products