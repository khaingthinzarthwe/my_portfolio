import "./orange.scss";
import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Orange = () => {
  return (
    <div className="orange">
      <motion.div
        className="slidingContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        日本語学習者 日本語学習者
      </motion.div>
      <div className="wrapper">
      
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Khaing Thinzar Thwe</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <a href="#Projects"><motion.button variants={textVariants}>
              See the Latest Works
            </motion.button></a>
            <a href="#Contact"><motion.button variants={textVariants}>Contact Me</motion.button></a>
          </motion.div>
          <motion.div variants={textVariants} animate="scrollButton">
            <a href="#Projects"><RiScrollToBottomLine size="2em" /></a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="imageContainer">
        <img src="./lavender.png" />
      </div>
    </div>
  );
};

export default Orange;
