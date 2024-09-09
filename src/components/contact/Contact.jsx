import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

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
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_oebnfom', 'template_e7lxf48', formRef.current, {
        publicKey: 'lh3B3YIdGSD364VOn',
      })
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        },
      );
  };
  return (
    <motion.div className="contact" variants={variants}>
      <motion.div
        ref={ref}
        className="wrapper"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
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
          <motion.div
            className="mailboxSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg
              width="450px"
              height="450px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                d="M7 6H17.2C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V18H11M7 6C9.20914 6 11 7.79086 11 10V18M7 6C4.79086 6 3 7.79086 3 10V18H11M17 3H14V12M10 18V21H14V18M7 12H7.01"
                stroke="#000000"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Emaill" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </motion.form> 
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
