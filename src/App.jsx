import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Orange from "./components/orange/Orange";
import Universe from "./components/universe/Universe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Orange />
      </section>
      <section id="Projects"><Universe  /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section>
      <section id="About">About</section>
    </div>
  );
};

export default App;
