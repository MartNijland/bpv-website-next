import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { CursorAnimation } from "./CursorAnimation";

import Laptop from "../components/three/Laptop";

type Props = {
  headingText: string;
  text: string;
  pageKopInfoWirelab: string;
  imageInfoWirelab: Array<{ url: string }>;
};

const imageHeight = 1000;

export const queryFragment = `
headingText
text
pageKopInfoWirelab

imageInfoWirelab {
    url(width:1000,height:1300)
}
`;

const Informatie = ({
  headingText,
  text,
  pageKopInfoWirelab,
  imageInfoWirelab,
}: Props) => {
  const [cursorVariants, setCursorVariants] = useState("default");

  const textEnter = () => setCursorVariants("text");
  const textLeave = () => setCursorVariants("default");

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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="invisible absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:visible">
        {pageKopInfoWirelab}
      </h3>

      <div className="hidden md:block md:w-[80%] md:h-[50%]">
        <Canvas
          style={{ height: "600px", width: "550px" }}
          className="hidden md:block -mb-20 md:mb-0 md:visible md:flex-shrink-0 w-0 h-0 rounded-full object-cover
            md:rounded-lg md:w-24 md:h-95 xl:w-[500px] xl:h-[650px] md:mt-20"
          camera={{}}
        >
          <Laptop />
        </Canvas>
      </div>

      <div className="space-y-10 px-0 md:px-10 md:pt-20 ">
        <h4
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-xl md:text-6xl md:leading-[50px] uppercase font-bold text-[#7962fa]"
        >
          {headingText}
        </h4>

        <p className="text-xs xl:text-base text-gray-300 font-light">{text}</p>
      </div>
    </motion.div>
  );
};

export default Informatie;
