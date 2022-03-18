import Navigation from "../../components/navigation/Navigation";
import Slideshow from "../../components/slideshow/Slideshow";
import Listseries from "../../components/listseries/Listseries";
import Footer from "../../components/footer/Footer";

function Seriesmovie() {
  return (
    <div className="app-seri">
      <Navigation />
      <Slideshow />
      
      <Listseries />
      <Footer />
    </div>
  );
}

export default Seriesmovie;
