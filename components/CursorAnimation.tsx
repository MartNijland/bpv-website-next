import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export const CursorAnimation = ({}) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariants, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorVariants}
      className="bg-[#7962FA] h-[32px] w-[32px] rounded-full fixed top-0 left-0 z-50 pointer-events-none"
    ></motion.div>
  );
};
export default CursorAnimation;
