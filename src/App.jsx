import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Orange from "./components/orange/Orange";
import Universe from "./components/universe/Universe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import About from "./components/about/About";

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
      {/* <section id="About"><About /></section> */}
      {/* <section id="Contact"><Contact /></section> */}
    </div>
  );
};

export default App;
