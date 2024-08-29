import { motion } from "framer-motion";

const Test = () => {

  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 0.5 },
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul variants={variants} initial='hidden' animate='visible'>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
