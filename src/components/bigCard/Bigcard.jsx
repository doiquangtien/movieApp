import styles from "./bigcard.module.scss";
function Bigcard(data) {
  return (
    <div className={styles.episodesWrap}>
      <div className={styles.episodesItem}>
        <img
          src={`https://image.tmdb.org/t/p/w500${
            data.data.poster_path || data.data.backdrop_path
          }`}
          alt=""
        />
      </div>
      <span className={styles.episodesNumber}>
        {data.data.title || data.data.original_title || data.data.name}
      </span>
    </div>
  );
}

export default Bigcard;
