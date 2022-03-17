import React from "react";
import img from "../../../img/detail.jpg";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import img1 from "../../../img/banner4.webp";
import styles from "./detailsub.module.scss";
import StarIcon from "@mui/icons-material/Star";
function Detailsub() {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${img1})` }}>
      <div className={styles.container}>
        <div className={styles.info}>
        <div className={styles.imgsub}>
          <img src={img} alt="" />
        </div>
        <div className={styles.infoRight}>
          <div className={styles.infoName}>Sprider man no way home</div>
          <div className={styles.infoTag}>
            <div className={styles.infoStar}>
              <StarIcon className={styles.start} />
              <span>9.3</span>
            </div>
            <div className={styles.brokenLine}></div>
            <span>C13</span>
            <div className={styles.brokenLine}></div>
            <span>2021</span>
            <div className={styles.brokenLine}></div>
            <span>1 h 59 m</span>
          </div>
          <div className={styles.infoType}>
            <span>Action</span>
            <span>Drama</span>
          </div>
          <div className={styles.region}>
            <h3>Region:</h3>
            <span>American</span>
            <div className={styles.brokenLine}></div>
            <h3>Dub:</h3>
            <span>English</span>
          </div>
          <div className={styles.cast}>
            <h3>Cast:</h3>
            <span>Tien,</span>
            <span>Quan,</span>
            <span>Tuan,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
            <span>Tiến Quang,</span>
          </div>
          <div className={styles.desc}>
            <h3>Description:</h3>
            <span>
              Spider-Man: No Way Home is a 2021 American superhero film based on
              the Marvel Comics character Spider-Man, co-produced by Columbia
              Pictures and Marvel Studios and distributed by Sony Pictures
              Releasing. It is the sequel to Spider-Man: Homecoming (2017) and
              Spider-Man: Far From Home (2019), and the 27th film in the Marvel
              Cinematic Universe (MCU). The film was directed by Jon Watts and
              written by Chris McKenna and Erik Sommers. It stars Tom Holland as
              Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch,
              Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred
              Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew
              Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen
              Strange (Cumberbatch) to use magic to make his identity as
            </span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.play}>
              <PlayArrow />
              <span>Play</span>
            </button>
            <button className={styles.more}>
              <InfoOutlined />
              <span>Info</span>
            </button>
            <button className={styles.more}>
              <InfoOutlined />
              <span>Info</span>
            </button>
            <button className={styles.more}>
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Detailsub;
