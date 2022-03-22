// import { Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.subnav}>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={styles.forYou}>FOR YOU</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/movie">
          <div className={styles.movies}>MOVIES</div>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/tv">
          <div className={styles.tvSeries}>TV SERIES</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
