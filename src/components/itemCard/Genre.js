import styles from "./genre.module.scss";
import { allGenres } from "../../dataGenre/DataGenre";

function Genre({ genreId }) {
  var result = allGenres.filter(function (o1) {
    return genreId.some(function (o2) {
      return o1.id === o2; // return the ones with equal id
    });
  });
  //   console.log(allGenres);
  return (
    <div className={styles.genre}>
      {result.length > 0 &&
        result.map((gen, i) => {
          return (
            <span className={styles.genreItem} key={i}>
              {gen.name}
            </span>
          );
        })}
    </div>
  );
}

export default Genre;
