import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Orange from "./components/orange/Orange";
import Universe from "./components/universe/Universe";

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
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
