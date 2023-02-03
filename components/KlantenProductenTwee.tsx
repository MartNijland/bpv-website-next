/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import vredesteinLogo from "./img/vredestein.png";


type Props = {};

const KlantenProductenTwee = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full xl:w-[50%] snap-center bg-[#1f2c3a] p-10
                        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className="hidden md:flex justify-center w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] bg-slate-900">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="self-center p-8"
        src={vredesteinLogo.src}
        alt="Grolsch"
      />
      </div>
      

      <div className="px-0 md:px-10">
        <h4 className="md:text-4xl font-light">The Vredenstein Experience</h4>
        <p className="font-bold font-serif text-sm md:text-2xl mt-1">Apollo Vredenstein</p>
        <div className="">
          <p className="uppercase py-5 text-gray-300 text-sm md:text-xl">
            Ontzettende gave experience voor eventuele klanten.
          </p>
          <p className="text-xs md:text-base pb-4">
            Wirelab heeft de opdracht gekregen om een experience te maken voor Apollo Vredenstein. Dit is een bedrijf dat banden verkoopt. De experience is gemaakt voor de klanten die een band willen kopen. Hier in wordt de klant meegenomen in het proces van het kopen van een band. Dit is gedaan door middel van een VR experience.
          </p>
        <motion.button
            className="bg-[#7962fa] p-2 rounded"

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <a 
                className="text-xs md:text-base uppercase font-bold mt-5"
                href="https://vredestein-experience.com/">Check hier het project!
            </a>
        </motion.button>
        </div>
        
      </div>
    </article>
  );
};

export default KlantenProductenTwee;
