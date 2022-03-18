import Navigation from "../../components/navigation/Navigation";
import Slideshow from "../../components/slideShow/Slideshow";
import Listmovie from "../../components/listMovie/Listmovie";
import Footer from "../../components/footer/Footer";

function Seriesmovie() {
  return (
    <div className="app-seri">
      <Navigation />
      <Slideshow />
      <Listmovie />
      <Footer />
    </div>
  );
}

export default Seriesmovie;
