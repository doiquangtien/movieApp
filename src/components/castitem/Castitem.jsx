import styles from "./castitem.module.scss";

function Castitem({ data }) {
  return (
    <>
      <div className={styles.castItem}>
        {data.profile_path ? (
          <div className={styles.castImg}>
            <img
              src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
              alt=""
            />
          </div>
        ) : (
          <div className={styles.castImg}></div>
        )}

        <div className={styles.castTitle}>
          <span className={styles.castName}>
            {data.name || data.original_name}
          </span>
          <span className={styles.castCharacter}>{data.character}</span>
        </div>
      </div>
    </>
  );
}

export default Castitem;
