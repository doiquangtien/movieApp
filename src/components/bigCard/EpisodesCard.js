import styles from "./bigcard.module.scss";

function EpisodesCard({ data, data1 }) {
  return (
    <div className={styles.episodesWrap}>
      <div className={styles.episodesItem}>
        {data.poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt=""
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/w500${data1.poster_path}`}
            alt=""
          />
        )}
      </div>

      <span className={styles.episodesNumber}>Season {data.season_number}</span>
    </div>
  );
}

export default EpisodesCard;
