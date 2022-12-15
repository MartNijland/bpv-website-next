import React from "react";
import { motion } from "framer-motion";
import KlantProductCard from "./KlantProductCard";

type Props = {};

const KlantenProducten = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px]  md:tracking-[20px] text-gray-500 text-sm text-center  md:text-2xl">
        Klanten en Procute<span className="tracking-[0px]">n</span>
      </h3>

      <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scroll-auto scrollbar scrollbar-thumb-[#7962FA] scrollbar-track-[#1f2c3a]">
        <KlantProductCard />
        <KlantProductCard />
        <KlantProductCard />
        <KlantProductCard />
        <KlantProductCard />
        <KlantProductCard />
        <KlantProductCard />
        <KlantProductCard />
      </div>
    </motion.div>
  );
};

export default KlantenProducten;
