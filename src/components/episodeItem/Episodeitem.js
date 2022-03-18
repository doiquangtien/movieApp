import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import img1 from "../../img/banner.jpg";
import styles from './episodeitem.module.scss'
function Episodeitem() {
  return (
    <div className={styles.episodesWrap}>
      <div className={styles.episodesItem}>
        <img src={img1} alt="" />
      </div>
      <div className={styles.icons}>
        <PlayCircleFilledWhiteIcon className={styles.icon} />
      </div>
      <span className={styles.episodesNumber}>Đới Quang Tiến</span>
    </div>
  );
}

export default Episodeitem;
