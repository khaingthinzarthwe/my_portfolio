import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Orange from "./components/orange/Orange";
import Universe from "./components/universe/Universe";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Orange />
      </section>
      {/* <section id="Services"><Universe type='services' /></section>
      <section>Services</section> */}
      <section id="Portfolio"><Universe  /></section>
      <Portfolio />
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
