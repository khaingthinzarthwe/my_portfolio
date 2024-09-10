import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Game Hub Version 1",
    img: "./gamehubv1.png",
    desc: "",
  },
  {
    id: 2,
    title: "Game Hub Version 2",
    img: "./gamehubv2.png",
    desc: "",
  },
  {
    id: 3,
    title: "Evo Gym",
    img: "./evogym.png",
    desc: "",
  },
];

const Single = ({ p }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section>
      <div className="container">
        <motion.div className="wrapper">
          <motion.div className="imageContainer" ref={ref}>
            <img src={p.img} />
          </motion.div>
          <motion.div className="textContainer" style={{ y: y, opacity: opacity }}>
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {projects.map((p) => (
        <Single key={p.id} p={p} />
      ))}
    </div>
  );
};

export default Portfolio;
