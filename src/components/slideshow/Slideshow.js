import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner from "../../img/banner4.webp";
import Info from "./Info";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./slideshow.scss";
function Slideshow() {
  const slideRef = useRef();
  const listImage = [banner, banner, banner];

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  const properties = {
    duration: 2000,
    easing: "ease",
    arrows: false,
  };
  return (
    <div style={{ marginBottom: "50px", width: "100%" }}>
      <Slide ref={slideRef} {...properties}>
        {listImage.map((item, i) => (
          <div className="each-slide" key={{ i }}>
            <div
              className="slide-img"
              style={{ backgroundImage: `url(${item})` }}
            >
              <span>Slide 1</span>
            </div>
            <Info />
          </div>
        ))}
      </Slide>
      <div className="btnBack" onClick={back}>
        <NavigateBeforeIcon className="iconBack" />
      </div>

      <div className="btnNext" onClick={next}>
        <NavigateNextIcon className="iconNext" />
      </div>
    </div>
  );
}

export default Slideshow;
