import { useEffect, useState } from "react";
import clsx from "clsx";
import Search from "./search/Search";
import Navbar from "./navbar/Navbar";
import Myaccount from "./myaccount/Myaccount";
import Toggledarkmode from "./toggledarkmode/Toggledarkmode";
import styles from "./navigation.module.scss";
import logo from "../../img/logo192.png";
import { Link, useLocation } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";

function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, [location.pathname]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // console.log(isScrolled);
  return (
    <Container
      maxWidth="1400px"
      className={
        isScrolled ? clsx(styles.container, styles.scrolled) : styles.container
      }
    >
      <Box sx={{ flexGrow: 1, margin: "0 36px" }} className={styles.navigalist}>
        <Grid item md={5} className={styles.navigaitem}>
          <div
            className={styles.logo}
            onClick={() => {
              document.documentElement.scrollTop = 0;
            }}
          >
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Navbar />
        </Grid>
        <Grid item md={3} className={styles.navigaitem}>
          <Search />
        </Grid>
        <Grid item md={4} className={styles.right}>
          <Toggledarkmode />
          <Myaccount />
        </Grid>
      </Box>
    </Container>
  );
}

export default Navigation;
