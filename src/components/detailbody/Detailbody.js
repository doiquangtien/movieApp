import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import clsx from "clsx";
import styles from "./detailbody.module.scss";
import Listmovie from "../body/listmovie/Listmovie";
import img from "../../img/avatar.jpg";
import Detailsub from "./detailsub/Detailsub";
function Detailbody() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.detailBody}>
      <Detailsub />
      <div className={styles.body}>
      <Box sx={{ width: "100%", typography: "body1"}}>
        <TabContext value={value} >
          <Box sx={{ borderBottom: '1px solid', borderColor: "#808080",margin:'0 60px'}}>
            <TabList onChange={handleChange} textColor="inherit" aria-label="lab API tabs example">
              <Tab className={styles.tab} label="Cast" value="1" />
              <Tab className={styles.tab} label="Recommended" value="2" />
              <Tab className={styles.tab} label="Trailer" value="3" />
              <Tab className={styles.tab} label="Episodes" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className={clsx("grid", "wide")}>
              <>
                <span style={{ marginLeft: "20px", fontSize: "22px", color:'var(--second-color)'}}>
                  Cast
                </span>
                <div className="row">
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                  <div className="col l-2 m-4 c-6 ">
                    <div className={styles.castItem}>
                      <img src={img} alt="" />
                      <span className={styles.castName}>Đới Quang Tiến</span>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className={clsx("grid", "wide")}>
              <>
                <span style={{ marginLeft: "20px", fontSize: "22px",color:'var(--second-color)' }}>
                  Similar
                </span>
                <Listmovie />
              </>
            </div>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
        </TabContext>
      </Box>
      </div>
      
    </div>
  );
}

export default Detailbody;
