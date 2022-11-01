import React from 'react'

type Props = {}

const OrgChart = (props: Props) => {
    return (
        <div className='p-10 h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Organogram</h3>
            <div className="bg-red-500 h-50 w-50"></div>
            
        </div>
    )
}

export default OrgChart