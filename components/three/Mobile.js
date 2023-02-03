import { Text, rectAreaLight, Html, ContactShadows, Float, Environment, useGLTF, OrbitControls, PresentationControls } from '@react-three/drei'

export default function ReactThree()
{
    const reactLogo = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/left-hand-white-webxr-tracking-ready/model.gltf')

    return <>

    <Environment preset="city" />

    <PresentationControls
        global
        rotation={ [-0.15, 0.4, 0] }
        polar= { [ -0.5 , 0.2 ] }
        // azimuth= { [ -2, 0.75 ] }
        azimuth={[-Math.PI / 6.4, Math.PI / 6.4]}
        config= { { mass: 2, tenstion: 900 } }
        snap= { { mass: 8, tenstion: 2500 } }
        cursor= {false}
    >
        <Float rotationIntensity={ 2 }>
            <rectAreaLight 
                width={ 5.5 }
                height= { 1.65 }
                intensity= { 100 }
                color= { '#0000FF' }
                rotation= { [0.1, Math.PI, 0] }
                position= { [0, 0.25,  - 2.15] }
            />
        <primitive
            object={ reactLogo.scene }
            position-y={ 3.2 }
            position-x={ 0.5 }
            scale={ 20.30 }
            rotation-y={ 2.7 }
        >
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