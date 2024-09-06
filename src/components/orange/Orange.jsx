import "./orange.scss";
import { PiMouseScrollThin } from "react-icons/pi";

const Orange = () => {
  return (
    <div className="orange">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Khaing Thinzar Thwe</h2>
          <h1>Web Developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
          <PiMouseScrollThin size="2em" />
        </div>
      </div>
      {/* <div className="imageContainer">
        <img src="./hero.png"/>
      </div> */}
    </div>
  );
};

export default Orange;
