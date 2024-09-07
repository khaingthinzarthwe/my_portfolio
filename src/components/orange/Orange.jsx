import "./orange.scss";
import { PiMouseScrollThin } from "react-icons/pi";
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

const Orange = () => {
  return (
    <div className="orange">
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
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.div variants={textVariants} animate="scrollButton">
            <PiMouseScrollThin size="3em" />
          </motion.div>
        </motion.div>
      </div>
      <div className="slidingContainer">Writer Content Creator Influencer</div>
      <div className="imageContainer">
        <img src="./lavender.png" />
      </div>
    </div>
  );
};

export default Orange;
