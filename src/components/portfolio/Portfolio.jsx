import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Game Hub Version 1",
    img: "./gamehubv1.png",
    git: "https://github.com/khaingthinzarthwe/game-hub",
    gitName: "game-hub",
    desc: "A video game discovery app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more.",
    demo: "https://game-hub-kappa-rose.vercel.app/",
  },
  {
    id: 2,
    title: "Game Hub Version 2",
    img: "./gamehubv2.png",
    git: "https://github.com/khaingthinzarthwe/game-hub-v2",
    gitName: "game-hub-v2",
    desc: "Game Hub Version 2 enhances with more features such as game details, game trailers and screenshots using React Router.",
    demo: "https://game-hub-v2-rose.vercel.app/",
  },
  {
    id: 3,
    title: "Evo Gym",
    img: "./evogym.png",
    git: "https://github.com/khaingthinzarthwe/gym",
    gitName: "gym",
    desc: "Evo Gym is a fitness application using React, Typescript, Vite, Tailwind, Framer Motion, Hero Icons, Form Submit, React Anchor Link Smooth Scroll",
    demo: "https://evogym-gray.vercel.app/",
  },
];

const Single = ({ p }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <motion.div className="wrapper">
          <motion.div className="imageContainer" ref={ref}>
            <img src={p.img} />
          </motion.div>
          <motion.div
            className="textContainer"
            style={{ y: y }}
          >
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
            <p>
              Github Repo: <a href={p.git}>{p.gitName}</a>
            </p>
            <a href={p.demo}><button>See Demo</button></a>
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
