import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="me">
        <h1>About me!</h1>
        <p>
          I&apos;m a web development enthusiast specialized in React Js and
          proficient Japanese learner. I&apos;ve passed JLPT-N2 Exam and took
          part in Microsoft National Competition. I&apos;m an active learner and
          eager to solve challenges. Beyond my professional expertise, I&apos;m
          highly adaptable to changes and got many positive reviews from my
          colleagues and seniors.
        </p>
      </div>
      <div className="expert">
        <div className="left">
          <div className="skills">
            <h2>Skills</h2>
            <div className="languages">
              <h3>Languages</h3>
              <p>Burmese(Native or Billingual)</p>
              <p>Japanese(JLPT-N2 passed)</p>
            </div>
            <div className="tech">
              <h3>Tech Skills</h3>
              <p>React Js, Typescript, SCSS, Tailwind, Framer Motion</p>
              <p>Microsoft Word Specialis</p>
            </div>
          </div>
          </div>
          
          <div className="middle">
          <div className="experience">
            <div className="first">
              <h2>Data Entry</h2>
              <div className="company">
                <h3>Asian Unity Myanmar</h3>
                <span>August 2023 - January 2024</span>
                <p>
                  Data entry role for online shops and other businesses in Japan
                </p>
              </div>
            </div>
            <div className="second">
              <h2>Part-time Japanese Teacher</h2>
              <div className="company">
                <h3>Tsubasa Japanese Language Centre</h3>
                <span>January 2022 - June 2023</span>
                <p>Teaching N5 / N4 levels</p>
              </div>
            </div>
            <div className="third">
              <h2>Study Guide</h2>
              <div className="company">
                <h3>CMEC Private High School</h3>
                <span>March 2019 - June 2019</span>
                <p>Guide teacher for Grade-10 students</p>
              </div>
              <div className="company">
                <h3>CMEC Private High School</h3>
                <span>April 2017 - November 2017</span>
                <p>Guide teacher for Grade-10 students</p>
              </div>
            </div>
          </div>
          </div>
          
        <div className="right">
          <div className="edu">
            <h2>Education</h2>
            <h3>University of Computer Studies, Mandalay</h3>
            <span>2017-2020</span>
            <u>Quitted due to COVID-19</u>
          </div>
          <div className="certify">
            <h2>Certificates</h2>
            <p>React 18: Intermediate Topics</p>
            <p>Japanese Language Proficiency Test - N2</p>
            <p>Microsoft Office Specialist Word 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
