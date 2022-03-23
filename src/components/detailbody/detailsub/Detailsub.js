import DetailGenre from "./DetailGenre";
import DetaileCast from "./DetaileCast";
import { PlayArrow } from "@mui/icons-material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ShareIcon from "@mui/icons-material/Share";
import styles from "./detailsub.module.scss";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
function Detailsub({ data, type }) {
  const [value, setValue] = useState(5);
  console.log(data);
  return (
    <>
      {data && (
        <div
          className={styles.banner}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.imgsub}>
                <img
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt=""
                />
              </div>
              <div className={styles.infoRight}>
                <div className={styles.infoName}>
                  {data.original_title || data.title || data.name}
                </div>
                <div className={styles.infoTag}>
                  <div className={styles.infoStar}>
                    <StarIcon className={styles.start} />
                    <span>{data.vote_average}</span>
                  </div>
                  <div className={styles.brokenLine}></div>
                  <span>C16</span>
                  <div className={styles.brokenLine}></div>

                  {type === "movie" && (
                    <span>{data.release_date || data.first_air_date}</span>
                  )}
                  {type === "tv" && (
                    <>
                      <span>
                        {data.first_air_date} to {data.last_air_date}
                      </span>
                    </>
                  )}
                  <div className={styles.brokenLine}></div>
                  {type === "movie" && <span>{data.runtime} minutes</span>}
                  {type === "tv" && (
                    <>
                      <span>{data.number_of_episodes} episodes</span>
                      <div className={styles.brokenLine}></div>
                      <span>{data.number_of_seasons} seasons</span>
                    </>
                  )}
                </div>
                <div className={styles.infoType}>
                  <DetailGenre data={data.genres} />
                </div>
                <div className={styles.region}>
                  <h3>Region:</h3>
                  <span>{data.production_countries[0].name}</span>
                  <div className={styles.brokenLine}></div>
                  <h3>Dub:</h3>
                  <span>{data.spoken_languages[0].english_name}</span>
                </div>
                <div className={styles.cast}>
                  <h3>Cast:</h3>
                  <DetaileCast data={data.credits.cast} />
                  ...
                </div>
                <div className={styles.desc}>
                  <h3>Description:</h3>
                  <span>{data.overview}</span>
                </div>
                <div className={styles.rating}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <span>({data.vote_count} vote)</span>
                </div>
                <div className={styles.buttons}>
                  {type === "movie" && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/watch/movie/` + data.id}
                    >
                      <button className={styles.play}>
                        <PlayArrow />
                        <span>Play</span>
                      </button>
                    </Link>
                  )}
                  {type === "tv" && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/watch/tv/` + data.id + `/season/` + 1 + `/esp/` + 1}
                    >
                      <button className={styles.play}>
                        <PlayArrow />
                        <span>Play</span>
                      </button>
                    </Link>
                  )}

                  <button className={styles.more}>
                    <BookmarkAddIcon />
                    <span>Add to favorites</span>
                  </button>
                  <button className={styles.more}>
                    <ShareIcon />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Detailsub;
