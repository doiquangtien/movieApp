// import { Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch } from "react-redux";
import { getType } from "../../../redux/typeSlice";

function Navbar() {
  const listType = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];
  const dispatch = useDispatch();
  return (
    <div className={styles.navbar}>
      <div className={styles.subnav}>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className={styles.forYou}>FOR YOU</div>
        </Link>
        <Link
          onClick={() => {
            dispatch(getType("movie"));
          }}
          style={{ textDecoration: "none" }}
          to="/movie"
        >
          <div className={styles.movies}>MOVIES</div>
        </Link>
        <Link
          onClick={() => {
            dispatch(getType("tv"));
          }}
          style={{ textDecoration: "none" }}
          to="/tv"
        >
          <div className={styles.tvSeries}>TV SERIES</div>
        </Link>
      </div>
      <div className={styles.styleMovie}>
        <span>TYPES</span>
        <ArrowDropUpIcon className={styles.iconup} />
        <ArrowDropDownIcon className={styles.icondown} />
        <div className={styles.usermenu}>
          {listType.map((type, i) => (
            <Link
              style={{ textDecoration: "none" }}
              key={i}
              to={`/` + type.name.toLowerCase()}
            >
              <span>{type.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
