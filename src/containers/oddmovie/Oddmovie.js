import Navigation from "../../components/navigation/Navigation";
import Slideshow from "../../components/slideshow/Slideshow";
import Listodd from "../../components/listodd/Listodd";
import Footer from "../../components/footer/Footer";
function Oddmovie() {
  return (
    <div>   
      <Navigation />
      <Slideshow />
      <Listodd />
      <Footer />
    </div>
  );
}

export default Oddmovie;
