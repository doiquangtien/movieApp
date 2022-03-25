import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import styles from "./item.module.scss";
import { Link } from "react-router-dom";
import Genre from "./Genre";
function Itemcard({ data, imgP, mediaType, imgD }) {
  return (
    <>
      <Link to={`/details/` + mediaType + `/` + data.id}>
        <div className={styles.list_item}>
          <div className={styles.listood_item}>
            <img
              className={styles.imgP}
              src={imgP}
              alt={data.title || data.name}
            />

            <span className={styles.odditem_name}>
              {data.title || data.name}
            </span>
            <div className={styles.hovered}>
              <div className={styles.itemVideo}>
                <img
                  className={styles.imgD}
                  src={imgD}
                  alt={data.title || data.name}
                />

                <div className={styles.icons}>
                  <PlayCircleFilledWhiteIcon className={styles.icon} />
                  <AddCircleIcon className={styles.icon} />
                </div>
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{data.title || data.name}</div>
                <div className={styles.itemInfoTop}>
                  <span className={styles.wrapVote}>
                    {data.vote_average && data.vote_average.toFixed(1)}
                    <StarIcon className={styles.start} />
                  </span>
                  <span>16 +</span>

                  {data.release_date && <span>{data.release_date}</span>}
                </div>
                <Genre genreId={data.genre_ids} />
                <div className={styles.desc}>{data.overview}</div>
                <div className={styles.more}>
                  More
                  <ArrowForwardIosIcon className={styles.iconMore} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Itemcard;
