import { Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./navbar.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
function Navbar() {
  const [value, setValue] = React.useState(() => {
    let localtab = JSON.parse(localStorage.getItem("tab"));
    return localtab || 0;
  });

  const listType = [
    "Action",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Thriller",
    "Western",
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    document.documentElement.scrollTop = 0;
    localStorage.setItem("tab", newValue);
  };

  return (
    <div className={styles.navbar}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          aria-label="secondary tabs example"
        >
          <Tab
            className={styles.navbarItem}
            label="For you"
            to="/"
            component={Link}
          />
          <Tab
            className={styles.navbarItem}
            label="Movies"
            to="/movies"
            component={Link}
          />
          <Tab
            className={styles.navbarItem}
            label="TV Series"
            to="/series"
            component={Link}
          />
        </Tabs>
      </Box>
      <div className={styles.styleMovie}>
        <span>TYPES</span>
        <ArrowDropUpIcon className={styles.iconup} />
        <ArrowDropDownIcon className={styles.icondown} />
        <div className={styles.usermenu}>
          {listType.map((type, i) => (
            <Link
              style={{ textDecoration: "none" }}
              key={i}
              to={`/` + type.toLowerCase()}
            >
              <span>{type}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
