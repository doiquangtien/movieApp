import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import styles from "./item.module.scss";
import { Link } from "react-router-dom";

function Itemcard({ data, imgP, imD }) {
  return (
    <>
      <Link to={`/details/` + data.id}>
        <div className={styles.list_item}>
          <div className={styles.listood_item}>
            <img src={imgP} alt={data.title || data.name} />

            <span className={styles.odditem_name}>
              {data.title || data.name}
            </span>
            <div className={styles.hovered}>
              <div className={styles.itemVideo}>
                <div className={styles.icons}>
                  <PlayCircleFilledWhiteIcon className={styles.icon} />
                  <AddCircleIcon className={styles.icon} />
                </div>
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.itemName}>{data.title || data.name}</div>
                <div className={styles.itemInfoTop}>
                  <span>
                    <StarIcon className={styles.start} />
                    {data.vote_average}
                  </span>
                  <span>16 +</span>

                  {data.release_date && <span>{data.release_date}</span>}
                </div>
                <div className={styles.genre}>
                  <span>Science Fiction</span>
                  <span>Movieasd</span>
                  <span>Movieda</span>

                  <span>Movie</span>

                  <span>Movie</span>

                  <span>Movie</span>

                  <span>Movie</span>
                </div>
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
