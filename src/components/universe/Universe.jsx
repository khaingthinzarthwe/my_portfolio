import './universe.scss';
import { motion } from 'framer-motion';

const Universe = () => {
  return (
    <div className='universe' style={{background: "linear-gradient(180deg, rgb(209, 209, 209), white)"}}>
        <motion.h1>My Universe</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets"></motion.div>
        <motion.div className="stars"></motion.div>
    </div>
  )
}

export default Universe