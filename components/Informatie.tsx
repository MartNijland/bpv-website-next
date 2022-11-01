import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Informatie({}: Props) {
    return (
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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Over Wirelab</h3>
            <motion.img 
            initial={{
                x: -200,
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
            src="https://pbs.twimg.com/media/DnXx4qHXcAI29qX?format=jpg&name=4096x4096" 
            alt=""
            className='invisible -mb-20 md:mb-0 md:visible flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[650px]'
            />

            

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Informatie <span className='underline decoration-purple-500/50'>over</span> Wirelab</h4>
                <p className='text-sm xl:text-base'>
                In het laatste kwartaal van 2008 zijn Maurice van Lier en Twan Pastoor naar de KVK gegaan om het bedrijf ‘Wirelab’ in te schrijven. Ze waren zelf al begonnen met het maken van drukwerk, websites en campagnes. Vaak waren de betalingen in vorm van contant geld, VIP-Tickets en kratjes bier. Maurice en Twan zaten beiden nog op school en het bijverdienen met digital was een leuk zakcentje. Na een tijdje vroeg een klant voor het eerst naar een btw-nummer, op dat moment was 
                ‘Wirelab Creative” officieel een bedrijf. In het jaar 2014 besloot Maurice om verder te gaan als freelance illustrator en liet zich uit kopen van Wirelab. Het bedrijf was destijds al behoorlijk gegroeid, ze zijn drie keer verhuisd van de zolderkamer naar de Spinnerij, en in de Spinnerij naar een grotere ruimte. Het grootste deel van de aandelen gingen naar Twan en een overig deel naar strategische partnerships in Amsterdam. Op deze manier werden de 
                bedrijven Dorst & Lesser en Socialreblz compagnons en werd voor het eerst een vesteging in Amsterdam geopend, op dat moment kregen ze ook grotere klanten zoals Dacia, Renault en Transavia
                In 2019 zijn ze verhuist naar de locatie waar ze op dit moment gevestigd zijn, op het Wilminkplein. Sinds 2020 hebben ze ook de benedenverdieping in gebruik, en zijn ze doorgegroeid naar +- 25 mensen. In dit jaar is ook het initiatief ‘Brandstof’ opge-richt waarbij waardevolle verbindingen gelegd worden met de creatieve industrie.
                Maar nu is het 2022 en Niek Pots is na 5 jaar trouwe dienst toegetreden als com-pagnon samen met Twan Pastoor. Niek heeft een significant deel van de aandelen van de strategische partnerships uit Kamsterdam en een deel van de aandelen van Twan gekocht. Daarbij is Niek verantwoordelijk geworden voor de financiële en or-ganisatorische kant van het bedrijf.
                Door de creativiteit van Twan en de business skills van Niek draait Wirelab als nooit tevoren, daarbij zien ze een mooie toekomst voor het bedrijf!
                </p>
            </div>
        </motion.div>
    )
}

export default Informatie