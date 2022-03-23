import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import styles from "./bigcard.module.scss";
function Bigcard(data) {
  return (
    <div className={styles.episodesWrap}>
      <div className={styles.episodesItem}>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.data.backdrop_path}`}
          alt=""
        />
      </div>
      <div className={styles.icons}>
        <PlayCircleFilledWhiteIcon className={styles.icon} />
      </div>
      <span className={styles.episodesNumber}>
        {data.data.title || data.data.original_title}
      </span>
    </div>
  );
}

export default Bigcard;
