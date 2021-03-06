import { useRef } from "react";
import { Slide } from "react-slideshow-image";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "react-slideshow-image/dist/styles.css";
import styles from "./listSlider.module.scss";
import Loading from "../../loading/Loading";
import Itemcard from "../../itemCard/Itemcard";
function Listslider({ data, type, load }) {
  const slideRef = useRef();
  const properties = {
    duration: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    indicators: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  return (
    <div
      style={{ margin: "-16px", position: "relative", marginBottom: "20px" }}
    >
      {load ? (
        <Slide ref={slideRef} {...properties}>
          {data !== null &&
            data.length > 0 &&
            data.map((item, i) => {
              if (item.poster_path && item.backdrop_path !== null) {
                let imagePost = `https://image.tmdb.org/t/p/original${item.poster_path}`;
                let imageDrop = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
                return (
                  <div key={i} style={{ padding: "0 16px" }}>
                    <Itemcard
                      imgP={imagePost}
                      imgD={imageDrop}
                      data={item}
                      mediaType={item.media_type || type}
                    />
                  </div>
                );
              }
            })}
        </Slide>
      ) : (
        <Loading />
      )}

      <div className={styles.btnBack} onClick={back}>
        <NavigateBeforeIcon className={styles.iconBack} />
      </div>
      <div className={styles.btnNext} onClick={next}>
        <NavigateNextIcon className={styles.iconNext} />
      </div>
    </div>
  );
}

export default Listslider;
