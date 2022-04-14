import styles from "./footer.module.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.coppyRight}>© 2022 Doi Quang Tien</div>

        <div className={styles.aboutMe}>
          <FacebookOutlinedIcon className={styles.iconfb} />
          <GitHubIcon className={styles.icongh} />
          <YouTubeIcon className={styles.iconyt} />
        </div>
      </div>
    </>
  );
}

export default Footer;
