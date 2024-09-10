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
          
            <h2>Skills</h2>
            <div className="skills">
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
