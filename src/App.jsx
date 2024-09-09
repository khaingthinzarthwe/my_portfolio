import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Orange from "./components/orange/Orange";
import Universe from "./components/universe/Universe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Orange />
      </section>
      {/* <section id="Services"><Universe type='services' /></section>
      <section>Services</section> */}
      <section id="Projects"><Universe  /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section>
      <section id="About">Contact</section>
    </div>
  );
};

export default App;
