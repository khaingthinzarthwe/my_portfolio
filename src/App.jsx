import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Orange from "./components/orange/Orange";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Orange />
      </section>
      <section id="Services">Parallex</section>
      <section>Services</section>
      <section id="Portfolio">Parallex</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
