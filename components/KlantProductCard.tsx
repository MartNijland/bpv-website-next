/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import wavinLogo from "./img/wavin.png";

type Props = {};

const KlantProductCard = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-full xl:w-[50%] snap-center bg-[#1f2c3a] p-10
                        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <div className=" hidden md:flex justify-center w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] bg-slate-900">
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
        className="self-center"
        src={wavinLogo.src}
        alt="Wavin"
      />
      </div>

      <div className="px-0 md:px-10">
        <h4 className="md:text-4xl font-light">Campange voor Wavin</h4>
        <p className="font-bold font-serif text-sm md:text-2xl mt-1">Wavin</p>
        <div className="">
          <p className="uppercase py-5 text-gray-300 text-sm md:text-xl">
          Een unieke en gedurfde campagne om merkbekendheid, aanwezigheid en merkherinnering te stimuleren. En iedereen ervan te overtuigen dat Wavin de perfecte match is.
          </p>
          <p className="text-xs md:text-base pb-4">
          Wavin levert effectieve oplossingen voor essentiële behoeften van het dagelijks leven: een veilige distributie van drinkwater en gas, duurzaam beheer van regenwater en afvalwater, energie-efficiënte verwarming en koeling van gebouwen, elektro, telecom en industriële toepassingen. 
          </p>

          <motion.button
            className="bg-[#7962fa] p-2 rounded"

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <a 
                className="text-xs md:text-base uppercase font-bold mt-5"
                href="https://www.wavin.com/nl-nl">Check hier het project!
            </a>
        </motion.button>
        </div>
      </div>
    </article>
  );
};

export default KlantProductCard;
