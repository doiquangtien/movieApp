import styles from './castitem.module.scss'
import img from "../../img/avatar.jpg";

function Castitem() {
  return(
    <div className={styles.castItem}>
    <img src={img} alt="" />
    <span className={styles.castName}>Đới Quang Tiến</span>
  </div>
  )
}

export default Castitem;
