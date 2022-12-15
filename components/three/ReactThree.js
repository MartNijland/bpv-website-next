import { Text, rectAreaLight, Html, ContactShadows, Float, Environment, useGLTF, OrbitControls, PresentationControls } from '@react-three/drei'

export default function ReactThree()
{
    const reactLogo = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/react-logo/model.gltf')

    return <>

    <Environment preset="city" />

    <PresentationControls
        global
        rotation={ [0.23, -0.3, 0] }
        polar= { [ -0.4, 0.2 ] }
        // azimuth= { [ -2, 0.75 ] }
        azimuth={[-Math.PI / 6.4, Math.PI / 12.4]}
        config= { { mass: 2, tenstion: 900 } }
        snap= { { mass: 8, tenstion: 2500 } }
        cursor= {false}
    >
        <Float rotationIntensity={ 1 }>
            <rectAreaLight 
                width={ 5.5 }
                height= { 1.65 }
                intensity= { 100 }
                color= { '#0000FF' }
                rotation= { [0.1, Math.PI, 0] }
                position= { [0, 0.55, - 1.15] }
            />
        <primitive
            object={ reactLogo.scene }
            position-y={ -0.4 }
            position-x={ 0.5 }
            scale={ 1.30 }
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