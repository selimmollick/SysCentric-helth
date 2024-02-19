import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Galley from "./gallery/Gallery";
import Header from "./header/Header";
import Header1 from "./header1/Header1";
import Header2 from "./header2/Header2";
import HeroSection from "./herosection/HereSection";
import Home from "./home/Home";
import Services from "./services/Services";
import Team from "./team/Team";
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div>
      <Header />
      <Routes >
        <Route path="/"  element={<Home />} />
        <Route path="/about-us"  element={<About />} />
        <Route path="/services"  element={<Services />} />
        <Route path="/gallery"  element={<Galley />} />
        <Route path="/blog"  element={<Blog />} />
        <Route path="/contact"  element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
