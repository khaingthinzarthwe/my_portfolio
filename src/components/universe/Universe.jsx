import { useRef } from "react";
import "./universe.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Universe = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="universe"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, rgb(209, 209, 209), white)",
      }}
    >
      <motion.h1 style={{ y: yText }}>Projects</motion.h1>
      <motion.div className="flowers"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Universe;
