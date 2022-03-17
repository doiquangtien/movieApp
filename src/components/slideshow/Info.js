import React from "react";
import spider from "../../img/spider.png";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import './info.scss'
function Info() {
  return (
    <div className="info">
      <img src={spider} alt="" />
      <span className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae adipisci
        repellendus eum quasi illo, velit numquam, maxime tempora sint deleniti,
        aliquid qui? Facilis, adipisci! Ratione hic repudiandae temporibus eum
        earum?
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
  );
}

export default Info;
