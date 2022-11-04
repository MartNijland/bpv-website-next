import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BpvTaakEen = (props: Props) => {
    return (
//         <div className='relative p-10 h-screen flex overflow-hidden flex-col items-center text-left'>
//             <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>BPV taak &eacute;&eacute;n</h3>
//             <div className='h-screen w-screen flex flex-wrap justify-center items-center md:flex-row'>
//                 <div className='max-w-[700px] w-full h-[30%] relative'>
//                     <div className='absolute inset-y-0 left-3 right-7 p-3'>
// Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, sapiente. Ratione deserunt numquam, vero saepe totam culpa autem obcaecati. Illo hic itaque architecto at ad aspernatur modi fugiat saepe explicabo!
//                     </div>
//                 </div>
//                 <div className='max-w-[700px] w-full h-[30%] relative'>
//                     <div className='absolute inset-y-0 left-3 right-7 p-3'>
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio voluptatum quos, fugit libero placeat? Commodi velit enim quod rem similique voluptatum delectus? Rerum, doloribus suscipit esse mollitia ab animi.
//                     </div>
//                 </div>
//             </div>
//         </div>

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
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
    <h3 className='invisible absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:visible'>BPV taak 1</h3>

    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-xl md:text-4xl font-semibold'>Informatie <span className='underline decoration-purple-500/50'>over</span> Wirelab</h4>
        <p className='text-xs md:text-sm xl:text-base'>
        In het laatste kwartaal van 2008 zijn Maurice van Lier en Twan Pastoor naar de KVK gegaan om het bedrijf ‘Wirelab’ in te schrijven. Ze waren zelf al begonnen met het maken van drukwerk, websites en campagnes. Vaak waren de betalingen in vorm van contant geld, VIP-Tickets en kratjes bier. Maurice en Twan zaten beiden nog op school en het bijverdienen met digital was een leuk zakcentje. Na een tijdje vroeg een klant voor het eerst naar een btw-nummer, op dat moment was 
        ‘Wirelab Creative” officieel een bedrijf. In het jaar 2014 besloot Maurice om verder te gaan als freelance illustrator en liet zich uit kopen van Wirelab. Het bedrijf was destijds al behoorlijk gegroeid, ze zijn drie keer verhuisd van de zolderkamer naar de Spinnerij, en in de Spinnerij naar een grotere ruimte. Het grootste deel van de aandelen gingen naar Twan en een overig deel naar strategische partnerships in Amsterdam. Op deze manier werden de 
        bedrijven Dorst & Lesser en Socialreblz compagnons en werd voor het eerst een vesteging in Amsterdam geopend, op dat moment kregen ze ook grotere klanten zoals Dacia, Renault en Transavia
        In 2019 zijn ze verhuist naar de locatie waar ze op dit moment gevestigd zijn, op het Wilminkplein. Sinds 2020 hebben ze ook de benedenverdieping in gebruik, en zijn ze doorgegroeid naar +- 25 mensen. In dit jaar is ook het initiatief ‘Brandstof’ opge-richt waarbij waardevolle verbindingen gelegd worden met de creatieve industrie.
        Maar nu is het 2022 en Niek Pots is na 5 jaar trouwe dienst toegetreden als com-pagnon samen met Twan Pastoor. Niek heeft een significant deel van de aandelen van de strategische partnerships uit Kamsterdam en een deel van de aandelen van Twan gekocht. Daarbij is Niek verantwoordelijk geworden voor de financiële en or-ganisatorische kant van het bedrijf.
        Door de creativiteit van Twan en de business skills van Niek draait Wirelab als nooit tevoren, daarbij zien ze een mooie toekomst voor het bedrijf!
        </p>
    </div>

    <motion.img 
    initial={{
        x: 200,
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
        x: 0,
    }}
    viewport={{
        once: true
    }}
    transition={{
        duration: 1.2,
    }}
    src="https://westontwerp.com/wp-content/uploads/2020/01/15082_MCB_LOGO_Merchandise_RGB_WT.png" 
    alt=""
    className='invisible -mb-20 md:mb-0 md:visible flex-shrink-0 w-0 h-0 rounded-full object-cover
    md:rounded-lg md:w-72 md:h-96 xl:w-[500px] xl:h-[650px]'
    />
    </motion.div>
    )
}

export default BpvTaakEen 