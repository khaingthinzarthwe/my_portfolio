import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Game Hub Version 1",
    img: "https://images.pexels.com/photos/25568845/pexels-photo-25568845/free-photo-of-couple-standing-and-reading-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus, inventore dolores asperiores distinctio nesciunt obcaecati deserunt dolorum voluptatum quasi molestiae nulla esse saepe voluptatibus fuga exercitationem. Exercitationem, dolor ad.",
  },
  {
    id: 2,
    title: "Game Hub Version 2",
    img: "https://images.pexels.com/photos/3855560/pexels-photo-3855560.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus, inventore dolores asperiores distinctio nesciunt obcaecati deserunt dolorum voluptatum quasi molestiae nulla esse saepe voluptatibus fuga exercitationem. Exercitationem, dolor ad.",
  },
  {
    id: 3,
    title: "Evo Gym",
    img: "https://images.pexels.com/photos/28197211/pexels-photo-28197211/free-photo-of-a-person-riding-a-horse-on-a-dirt-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellendus, inventore dolores asperiores distinctio nesciunt obcaecati deserunt dolorum voluptatum quasi molestiae nulla esse saepe voluptatibus fuga exercitationem. Exercitationem, dolor ad.",
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
