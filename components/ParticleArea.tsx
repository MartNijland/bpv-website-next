import React from 'react'
import Particles from 'react-tsparticles'
import particles from '../components/particles.json'

type Props = {}



const ParticleArea = (props: Props) => {
    
    return (
        
            <div className='z-99 h-full w-full'>
                    <Particles
            options={{
        background: {
            color: '#white',
        },
        fpsLimit: 40,
        interactivity: {
            detectsOn: 'canvas',
            events: {
            resize: true
            },
        },
        particles: {
            color: {
            value: "#f1f1f1"
            },
            number: {
            density: {
                enable: true,
                area: 1080
            },
            limit: 0,
            value: 500,
            },
            opacity: {
            animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 1,
                sync: false,
            },
            random: {
                enable: true,
                minimumValue: 0.1,
            },
            value: 1,
            },
            shape: {
            type: 'circle',
    
            },
            size: {
            random: {
                enable: true,
                minimumValue: 0.5
            },
            value: 1
            }
        }
        }}
    />  
            </div>
    )
}

export default ParticleArea