/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import payLogo from "./img/pay.webp";

type Props = {};

const KlantenProductenDrie = (props: Props) => {
  return (
    <article
      className="overscroll-x-none flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full xl:w-[50%] snap-center bg-[#1f2c3a] p-10
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
        src={payLogo.src}
        alt="Grolsch"
      />
      </div>

      <div className="px-0 md:px-10">
        <h4 className="md:text-4xl font-light">Website voor Pay</h4>
        <p className="italic font-semibold text-sm md:text-2xl mt-4">Pay</p>
        <div className="">
          <p className="uppercase py-5 text-gray-300 text-xs md:text-xl">
          Pay. is één van de snelst groeiende Payment Service Providers van Nederland. Sinds 2011 bouwen ze aan hun ambitie om het beste omnichannel betaalplatform in de markt te zijn.
          </p>
          <p className="text-xs md:text-base pb-4">
          Een goede website laat content op een gemakkelijke, interactieve en memorabele manier zien. Daarom heeft iedere sectie een passende call to action om de bezoeker door de website te gidsen. Hierdoor kunnen bezoekers moeiteloos vinden wat ze zoeken en hebben ze een fijne beleving als ze door de website navigeren. 
          </p>
        <motion.button
            className="bg-[#7962fa] p-1 rounded"

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <a 
                className="text-xs md:text-base uppercase font-bold mt-5"
                href="https://pay.nl/">Check hier het project!
            </a>
        </motion.button>
        </div>
        
      </div>
    </article>

  );
};

export default KlantenProductenDrie;
