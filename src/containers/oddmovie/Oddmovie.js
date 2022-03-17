import Navigation from "../../components/navigation/Navigation";
import Slideshow from "../../components/slideshow/Slideshow";
import Listodd from "../../components/listodd/Listodd";
import Footer from "../../components/footer/Footer";
function Oddmovie() {
  return (
    <div>
      
      <Navigation />
      <Slideshow />
      <span style={{color:'#fff',marginLeft:'70px',fontSize:'24px'}}>Danh sách phim lẻ</span>
      <Listodd />
      <Footer />
    </div>
  );
}

export default Oddmovie;
