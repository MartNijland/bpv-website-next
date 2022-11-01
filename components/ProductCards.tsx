/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion"
import React from 'react'

type Props = {}

const ProductCards = (props: Props) => {
    return (

        <motion.div 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity:1,
            }}
            transition={{
                duration:1.5,
            }}
            className="max-w-61xl">
            <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[50rem]">
                <div className="group rounded-md relative h-[35rem] w-[50rem] overflow-hidden cursor-pointer shadow-lg shadow-black/30 transition-all duration-1000">
                    <img src="https://wirelab2018.s3.amazonaws.com/Cases/Grolsch-BeugelPrinter/Wirelab_client_Grolsch_06.png" alt="" className="h-full object-cover group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                    <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                        <div className="absolute inset-x-5 bottom-6">
                            <div className="flex flex-col  text-white">
                                <p className='font-semibold text-xl text-gray-100'>Grolsch Beugelsysteem</p>
                                <p className="text-gray-300">Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                            </div>
                            <div className="flex justify-end gap-3 text-gray-200">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="group rounded-md relative h-[35rem] w-16 overflow-hidden cursor-pointer shadow-lg shadow-black/30 transition-all duration-500">
                    <img src="https://wirelab2018.s3.amazonaws.com/Case-Image-3.png" alt="" className="h-full object-cover group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                    <div className="invisible absolute inset-0 bg-gradient-to-b from-blue-500/20 to-black group-hover:visible">
                        <div className="absolute inset-x-5 bottom-6">
                            <div className="flex flex-col text-white">
                                <p className='font-semibold text-xl text-gray-100'>Grolsch Beugelsysteem</p>
                                <p className="text-gray-300">Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </div>
                            <div className="flex justify-end gap-3 text-gray-200">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="group rounded-md relative h-[35rem] w-16 overflow-hidden cursor-pointer shadow-lg shadow-black/30 transition-all duration-500">
                    <img src="https://wirelab2018.s3.amazonaws.com/Cases/Renault/Wirelab_client_Renault-Clio.jpg" alt="" className="h-full object-cover group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                    <div className="invisible absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-black group-hover:visible">
                        <div className="absolute inset-x-5 bottom-6">
                            <div className="flex flex-col text-white">
                                <p className='font-semibold text-xl text-gray-100'>Grolsch Beugelsysteem</p>
                                <p className="text-gray-300">Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            </div>
                            <div className="flex justify-end gap-3 text-gray-200">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="group rounded-md relative h-[35rem] w-16 overflow-hidden cursor-pointer shadow-lg shadow-black/30 transition-all duration-500">
                    <img src="https://wirelab2018.s3.amazonaws.com/Wirelab_client_segway-header.jpg" alt="" className="h-full object-cover group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                    <div className="invisible absolute inset-0 bg-gradient-to-b from-grey-500/20 to-black group-hover:visible">
                        <div className="absolute inset-x-5 bottom-6">
                            <div className="flex flex-col text-white">
                                <p className='font-semibold text-xl text-gray-100'>Grolsch Beugelsysteem</p>
                                <p className="text-gray-300">Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Aenean lacinia bibendum nulla sed consectetur.</p>
                            </div>
                            <div className="flex justify-end gap-3 text-gray-200">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>










        // <article className='group flex flex-col m-10 rounded items-center space-y-7 flex-shrink-0 w-full xl:w-[45%] snap-center 
        //      cursor-pointer transition-opacity duration-200 overflow-hidden'>
        //     <div className='relative h-full w-full'>
        //         <img  className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform' src="https://wirelab2018.s3.amazonaws.com/Cases/Grolsch-BeugelPrinter/Wirelab_client_Grolsch_06.png" alt="" />
        //         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-cover"></div>
        //         <div className="absolute overflow-hidden opacity-0 inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[25%] group-hover:translate-y-0 transition-all group-hover:opacity-100">
        //             <h4 className='text-3xl font-bold text-white'>Grolsch</h4>
        //             <p className='text-lg italic mb-3'>Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.</p>
        //         </div>
        //     </div>
        // </article>
    )
}

export default ProductCards