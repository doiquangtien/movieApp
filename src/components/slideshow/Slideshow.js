import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import banner from "../../img/banner4.webp";
import Info from "./Info";

import "./slideshow.scss";
function Slideshow() {
  const listImage = [banner, banner, banner];
  const properties = {
    duration: 2000,
    easing: "ease",
  };
  return (
    <div style={{ marginBottom: "50px" }}>
      <Slide {...properties}>
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

        {/* <div className="each-slide">
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <span>Slide 1</span>
          </div>
          <div className="info">
            <img src={spider} alt="" />
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              adipisci repellendus eum quasi illo, velit numquam, maxime tempora
              sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic
              repudiandae temporibus eum earum?
            </span>
            <div className="buttons">
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
              <button className="more">
                <InfoOutlined />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div>
        <div className="each-slide">
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <span>Slide 1</span>
          </div>
          <div className="info">
            <img src={spider} alt="" />
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              adipisci repellendus eum quasi illo, velit numquam, maxime tempora
              sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic
              repudiandae temporibus eum earum?
            </span>
            <div className="buttons">
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
              <button className="more">
                <InfoOutlined />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div> */}
      </Slide>
    </div>
  );
}

export default Slideshow;
