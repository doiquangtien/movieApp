import Navigation from "../../components/navigation/Navigation";
import Slideshow from "../../components/slideshow/Slideshow";
import Listseries from "../../components/listseries/Listseries";
import Footer from "../../components/footer/Footer";

function Seriesmovie() {
  return (
    <div className="app-seri">
      <Navigation />
      <Slideshow />
      <span style={{color:'#fff',marginLeft:'70px',fontSize:'24px'}}>Danh sách phim bộ</span>
      <Listseries />
      <Footer />
    </div>
  );
}

export default Seriesmovie;
