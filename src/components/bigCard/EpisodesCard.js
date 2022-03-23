import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import styles from "./bigcard.module.scss";

function EpisodesCard() {
  return (
    <div className={styles.episodesWrap}>
      <div className={styles.episodesItem}>
        <img src="" alt="" />
      </div>
      <div className={styles.icons}>
        <PlayCircleFilledWhiteIcon className={styles.icon} />
      </div>
      <span className={styles.episodesNumber}>Tiến</span>
    </div>
  );
}

export default EpisodesCard;
