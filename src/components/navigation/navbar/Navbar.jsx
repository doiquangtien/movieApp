// import { Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useDispatch } from "react-redux";
import { getPage } from "../../../redux/typeSlice";
function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className={styles.navbar}>
      <div className={styles.subnav}>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={styles.forYou}>FOR YOU</div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/movie"
          onClick={() => {
            dispatch(getPage(2));
          }}
        >
          <div className={styles.movies}>MOVIES</div>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/tv"
          onClick={() => {
            dispatch(getPage(2));
          }}
        >
          <div className={styles.tvSeries}>TV SERIES</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
