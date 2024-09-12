import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
}
const About = () => {

  return (
    <motion.div className="about" variants={textVariants}>
      <motion.div className="me" variants={textVariants} initial='initial' animate='animate'>
        <motion.h1 variants={textVariants}>About me!</motion.h1>
        <motion.p variants={textVariants}>
          I&apos;m a web development enthusiast specialized in React Js and
          proficient Japanese learner. I&apos;ve passed JLPT-N2 Exam and took
          part in Microsoft National Competition. I&apos;m an active learner and
          eager to solve challenges. Beyond my professional expertise, I&apos;m
          highly adaptable to changes and got many positive reviews from my
          colleagues and seniors.
        </motion.p>
      </motion.div>
      <motion.div className="expert" variants={textVariants} initial='initial' animate='animate'>
        <motion.div className="left" variants={textVariants}>
          
            <motion.h2 variants={textVariants}>Skills</motion.h2>
            <motion.div variants={textVariants} className="skills">
            <motion.div variants={textVariants} className="languages">
              <motion.h3 variants={textVariants}>Languages</motion.h3>
              <motion.p variants={textVariants}>Burmese(Native or Bilingual)</motion.p>
              <motion.p variants={textVariants}>Japanese(JLPT-N2 passed)</motion.p>
            </motion.div>
            <motion.div variants={textVariants} className="tech">
              <motion.h3 variants={textVariants}>Tech Skills</motion.h3>
              <motion.p variants={textVariants}>React Js, Typescript, SCSS, Tailwind, Framer Motion</motion.p>
              <motion.p variants={textVariants}>Microsoft Word Specialist</motion.p>
            </motion.div>
          </motion.div>
          </motion.div>
          
        <motion.div className="right" variants={textVariants}>
          <motion.div className="edu" variants={textVariants}>
            <motion.h2 variants={textVariants}>Education</motion.h2>
            <motion.h3 variants={textVariants}>University of Computer Studies, Mandalay</motion.h3>
            <motion.p variants={textVariants}>2017-2020</motion.p>
            <motion.p variants={textVariants}>Quitted due to COVID-19</motion.p>
          </motion.div>
          <motion.div variants={textVariants} className="certify">
            <motion.h2 variants={textVariants}>Certificates</motion.h2>
            <motion.p variants={textVariants}>React 18: Intermediate Topics</motion.p>
            <motion.p variants={textVariants}>Japanese Language Proficiency Test - N2</motion.p>
            <motion.p variants={textVariants}>Microsoft Office Specialist Word 2013</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
