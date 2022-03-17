import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./item.module.scss";

function Item({ data }) {
  return (
    <>
      <div className={styles.list_item}>
        <div className={styles.listood_item}>
          <img src={data.img} alt="" />
          <span className={styles.odditem_name}>{data.name}</span>
          <div className={styles.hovered}>
            <div className={styles.itemVideo}>
              <video src={data.trailer} autoPlay muted loop />
              <div className={styles.icons}>
                <PlayCircleFilledWhiteIcon className={styles.icon} />
                <AddCircleIcon className={styles.icon} />
              </div>
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>{data.name}</div>
              <div className={styles.itemInfoTop}>
                <span>1 hour 14 mins</span>
                <span>+16</span>
                <span>1999</span>
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
              <div className={styles.desc}>{data.desc}</div>
              <div className={styles.more}>More
              <ArrowForwardIosIcon className={styles.iconMore} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
