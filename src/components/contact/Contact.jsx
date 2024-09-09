import './contact.scss';
import { motion } from 'framer-motion';

const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    },
};

const Contact = () => {
  return (
    <motion.div className='contact' variants={variants}> 
        <motion.div className="wrapper" variants={variants} initial='initial' whileInView='animate'>
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let&apos;s Work Together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>khaingthinzarthwe.dev@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Nonthaburi, Thailand</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type='text' required placeholder='Name' />
                <input type='email' required placeholder='Emaill' />
                <textarea rows={8} placeholder='Message' />
                <button>Submit</button>
            </form>
        </div>
        </motion.div>
    </motion.div>
  )
}

export default Contact