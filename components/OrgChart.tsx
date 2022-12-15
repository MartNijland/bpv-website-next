import React from 'react'
import { motion } from "framer-motion"

type PersonProps = {
    name:string,
    job:string,
    cx:number, //center van C-as
    cy:number //center van Y-as
}
const Person = ({name, job, cx, cy}:PersonProps)=>{
    return <>
        <motion.rect 
                whileHover={{
                    scale: 0.9,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.3
                }}fill="#7962fa" x={cx-100} y={cy-50} rx="10" width="200" height="100" opacity="0.8"/>
        <text x={cx} y={cy-10} fill="white" textAnchor='middle' fontWeight="bold" pointerEvents="none" >{name}</text>
        <text x={cx} y={cy+20} fill="white" textAnchor='middle' pointerEvents="none">{job}</text>
    </>
}

type Props = {}


const OrgChart = (props: Props) => {
    return (
        <div className='p-10 h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto my-auto items-center z-0'>
                <h3 className='absolute  top-24 uppercase tracking-[20px] text-gray-500 md:text-2xl'>Organogra<span className='tracking-[0px]'>m</span></h3>
            <div className="h-screen relative  flex overflow-hidden flex-row max-w-full justify-center mx-auto items-center top-36 xl:top-64">
                <svg className=" w-full h-full" viewBox='0 0 1000 1000'>
                    <Person cx={650} cy={100} name="Harry" job="Eindbaas" />
                    <Person cx={350} cy={100} name="Harry" job="Eindbaas" />
                    <Person cx={900} cy={300} name="Twan Pastoor" job="CTO" />
                    <Person cx={900} cy={500} name="Twan Pastoor" job="CTO" />
                    <Person cx={500} cy={300} name="Mark Reinderink" job="Creative Director" />
                    <Person cx={500} cy={500} name="Mark Reinderink" job="Creative Director" />
                    <Person cx={100} cy={300} name="Niek Pots" job="Managing Director" />
                    <Person cx={100} cy={500} name="Niek Pots" job="Managing Director" />
                    <motion.path initial={{ stroke:"grey"  }}
                                transition={{ duration:0.1 }}
                                whileInView={{ stroke:"purple" }}
                                stroke='grey' fill="none" strokeWidth="2" d="M350 150 v25 h150 v50, h400 v25" />
                    <path stroke='grey' fill="none" strokeWidth="2" d="M650 150 v25 h-150 v75 v-25 h-400 v25" />
                    <path stroke='grey' fill="bone" strokeWidth="2" d="M900 350 v100"/>
                    <path stroke='grey' fill="bone" strokeWidth="2" d="M100 350 v100"/>
                    <path stroke='grey' fill="bone" strokeWidth="2" d="M500 350 v100"/>
                </svg>
            </div>
        </div>
    )
}

export default OrgChart