import styles from "./castitem.module.scss";

function Castitem({ data }) {
  return (
    <>
      {data.profile_path && (
        <div className={styles.castItem}>
          <img
            src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
            alt={data.name || data.original_name}
          />

          <div className={styles.castTitle}>
            <span className={styles.castName}>
              {data.name || data.original_name}
            </span>
            <span className={styles.castCharacter}>{data.character}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Castitem;
