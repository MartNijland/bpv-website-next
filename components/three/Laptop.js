import { Text, rectAreaLight, Html, ContactShadows, Float, Environment, useGLTF, OrbitControls, PresentationControls } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>

    <Environment preset="city" />

    {/* <color args={ [ '#5b6069' ] } attach="background" /> */}



    <PresentationControls
        global
        rotation={ [0.23, 0.6, 0] }
        polar= { [ -0.4, 0.2 ] }
        // azimuth= { [ -2, 0.75 ] }
        azimuth={[-Math.PI / 6.4, Math.PI / 12.4]}
        config= { { mass: 2, tenstion: 2500 } }
        snap= { { mass: 8, tenstion: 2500 } }
        cursor= {false}
    >
        <Float rotationIntensity={ 0.7 }>
            <rectAreaLight 
                width={ 2.5 }
                height= { 1.65 }
                intensity= { 65 }
                color= { '#7962fa' }
                rotation= { [0.1, Math.PI, 0] }
                position= { [0, 0.55, - 1.15] }
            />
        <primitive
            object={ computer.scene }
            position-y={ -0.4 }
            position-x={ 0.5 }
            scale={ 1.5 }
        >
            <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={ 4 }
            position={ [ 0, 1.56, -1.42 ] }
            rotation-x= { - 0.256 }
            >
                <iframe 
                src='https://www.wirelab.nl/'
                />
            </Html>
        </primitive>
        </Float>
    </PresentationControls>

    <ContactShadows 
        position-y={ -1.4}
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2.4 }
    />
    </>
}