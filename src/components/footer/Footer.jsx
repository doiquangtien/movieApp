import styles from "./footer.module.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.coppyRight}>Copyright © 2022 Doi Quang Tien</div>
        <div className={styles.contractMe}>
          <span>Contact me:</span>
          <a href="mailto:qangtien27999@gmail.com">qangtien27999@gmail.com</a>
        </div>

        <div className={styles.aboutMe}>
          <a href="https://www.facebook.com/profile.php?id=100005295108910">
            <FacebookOutlinedIcon className={styles.iconfb} />
          </a>
          <a href="https://github.com/doiquangtien">
            <GitHubIcon className={styles.icongh} />
          </a>
          <a href="https://www.youtube.com">
            <YouTubeIcon className={styles.iconyt} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
