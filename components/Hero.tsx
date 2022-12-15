/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { motion } from "framer-motion";
import { useQuery, gql } from "@apollo/client";

type Props = {
  heroTitles: { text: string }[];
  heading: string;
};
export const queryFragment = `
    heroTitles{
        ... on heroTitles_item_BlockType {
        text
        }
    }
    heading
`;

export default function Hero({ heroTitles, heading }: Props) {
  const [text, count] = useTypewriter({
    words: heroTitles.map((i) => i.text),
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD////c3NylpaXm5ubh4eGysrKioqLNzc309PT6+vpRUVGVlZXx8fHZ2dnFxcWOjo4wMDBhYWE8PDyZmZmrq6ttbW0fHx97e3vIyMi9vb0LCwsWFhbS0tIoKCiCgoI2NjZDQ0NbW1szMzNLS0tnZ2eGhobSZgqaAAADw0lEQVR4nO3Y63aqOACG4WAFFEHr2Xqs3btz/5c45ByOdc3OzJof7/OnMcUkH8QEEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/bTtR0m/54bpU5a36z02VSyFW+oisrntPJ84se1+bRnZBtbRStbkvhvb64HTvasJWb1l5jxyxSBQ5frHQ5YeKrssHIaa6NKsr35Km6UK1kbWrZWWlimmnQ3eUq2m3ulx3vvQnZrrVmyzvdPksyw9dvo8mTJLTUMI86U94ckcdbFXeafUYM+EuOKMmbeVHLYujCeUp6E24HEg4c0e5CdxN2J3bf8DMzOQq3IxVaXWu7MeE+4GEk/6ER39UcWklXE5S+7+YF/FqYp18WFm+FLbUl/D6+dwnPoJJWORvWjmc8BGciFMz4Vz4ObyNmNAOJa/XNNt1feU2urTuTyi/t/LlzA+x3Ww74S1IOOsmtNMoakIz6qUQH7brepaVtjCYsPwnCX/pA02O41DC4hoz4UG3X/mfoexaX6HVSMJgibIJnwvp90hCPU1ycyUfnYTmh/IRM6DboO7BIrARc/X3fSThzV371kpTjCTUtb9L36RPWOwzM/PdGhSJSbBRi4BezPcm9udAwq/vb7vqnzoJq+GE5iSKz+BMdXaLKo+bT4izbninxnlSC/ZkE4xgdLdQ8/jlhLn9jmnzr76E8/N35IRmhV6pMR3VRJm/uVDjCfXpbiacDyfUTdWX3ew1t76ESeQd392BKlO/ZdTKnxKau2ebcKosBxM+VVXhSno3cr/DxdfBzKfkLW7Eyg/5o5H3ayhhYZfdS5jwx91CRymyWngOw93CrF9F3IR2707U4uk/mG56El7u4SPJywmDU2lM2gltD4uoCUvf4za865gMJnQ/JHXj/WrCr05AvVqHCe1dxyZqwqfvUPixu19Zb8JLElzE9n3pfusSVqZuJ7o36FLZTLix9c+oCS9z265McXC9b0YSuuH2PT3Jb06aNXLGz9uHJfoa27U0Tae2uooaMJiY8oyuXe/HRsKPZsK7KWavJazc9THnzT5krPt2C30zFZG9xdSLp10P7E9o6jsN79rswn55NeHZfzc4kfl/sB/62a8XTzv0rJFQzZsw4dYf9kLCuX3ivNlOzdPutLvLFrGvoAyhX3SpFzTiZF6G2fco8l3bTW/+5q2YeqgSmf6wvHbetaX1Wn9uVs3EQnWS2sde8TBt/Wq8a1ued3GXUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgH/H3yinIwduOAMyAAAAAElFTkSuQmCC"
        alt="Wirelab Logo"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {heading}
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold px-10 italic">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="purple" />
        </h1>
        <div className="pt-5">
          <Link href="#informatie">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.1,
              }}
              className="hero-btn"
            >
              Bedrijfsinformatie
            </motion.button>
          </Link>
          <Link href="#taken">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.1,
              }}
              className="hero-btn"
            >
              Klanten van Wirelab
            </motion.button>
          </Link>
          <Link href="#taken">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.1,
              }}
              className="hero-btn"
            >
              Organogram van het bedrijf
            </motion.button>
          </Link>
          <Link href="#taken">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.1,
              }}
              className="hero-btn"
            >
              BPV taken
            </motion.button>
          </Link>
          <Link href="#conclusie">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.1,
              }}
              className="hero-btn"
            >
              Conclusie
            </motion.button>
          </Link>
          <Link href="#slotwoord">
            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.1,
              }}
              className="hero-btn"
            >
              Slotwoord
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
