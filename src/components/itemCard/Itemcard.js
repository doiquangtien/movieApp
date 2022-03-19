import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import styles from "./item.module.scss";

function Itemcard({ data, imgP, imD }) {
  return (
    <>
      <div className={styles.list_item}>
        <div className={styles.listood_item}>
          <img src={imgP} alt="" />
          <span className={styles.odditem_name}>{data.title || data.name}</span>
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
                {data.adult === true ? <span>18 +</span> : <span>18 -</span>}

                {data.release_date && <span>{data.release_date}</span>}
              </div>
              <div className={styles.genre}>
                <span>Action</span>
                <span>Movie</span>
                <span>Movie</span>

                <span>Movie</span>

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
    </>
  );
}

export default Itemcard;
