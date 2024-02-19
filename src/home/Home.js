import Footer from "../footer/Footer";
import Galley from "../gallery/Gallery";
import Header1 from "../header1/Header1";
import Header2 from "../header2/Header2";
import HeroSection from "../herosection/HereSection";
import Team from "../team/Team";

const Home =() =>{
return(
    <>
     <HeroSection/>
       <Header1 />
       <Header2 />
       <Galley />
       <Team />
      <Footer />
    </>
)
}
export default Home;