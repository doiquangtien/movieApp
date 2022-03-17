import React from "react";
import Listmovie from "./listmovie/Listmovie";
import styles from "./body.module.scss";
import clsx from "clsx";
function Body() {
  return (
    <div className={styles.body}>
      <div className={clsx("grid", "wide")}>
        <span>Continue</span>
        <Listmovie />
        <span>Popular movies</span>
        <Listmovie />
        <span>Popular TV-series123</span>
        <Listmovie />
      </div>
    </div>
  );
}

export default Body;
