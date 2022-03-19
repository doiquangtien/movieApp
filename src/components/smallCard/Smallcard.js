import styles from "./smallcard.module.scss";
import img from "../../img/banner.jpg";

function Smallcard() {
  return (
    <div className={styles.smallCard}>
      <div className={styles.cardImg}>
        <img src={img} alt="" />
      </div>
      <div className={styles.cardDesc}>
        <span>Spider Man noway home tap 1</span>
      </div>
    </div>
  );
}

export default Smallcard;
