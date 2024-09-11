import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialInstagram } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Yoh Yoh
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/khaing-thinzar-thwe/">
            <SlSocialLinkedin size="2em" />
          </a>
          <a href="https://github.com/khaingthinzarthwe">
            <VscGithubAlt size="2em" />
          </a>
          <a href="https://www.instagram.com/im_yohyoh/">
            <SlSocialInstagram size="2em" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
