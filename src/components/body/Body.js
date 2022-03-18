import React from "react";
import Listslider from "./listSlider/Listslider";
import styles from "./body.module.scss";
import { Box, Container } from "@mui/material";

function Body() {
  return (
    <Container maxWidth="1400px" className={styles.body}>
      <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
        <span>Continue</span>
        <Listslider />
        <span>Popular movies</span>
        <Listslider />
        <span>Popular TV-series123</span>
        <Listslider />
      </Box>
    </Container>
  );
}

export default Body;
