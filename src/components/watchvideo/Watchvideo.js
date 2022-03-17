import React from "react";
import { Container, createTheme, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import Tab from "@mui/material/Tab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Listmovie from "../../components/body/listmovie/Listmovie";
import StarIcon from "@mui/icons-material/Star";

import video from "../../img/video.mp4";
import styles from "./watchvideo.module.scss";
import img from "../../img/banner.jpg";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ThemeProvider } from "styled-components";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

function Watchvideo() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="1400px" className={styles.container}>
      <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={9.3}>
            <div className={styles.video}>
              <video src={video} controls poster={img} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2.7}>
            <div className={styles.rightBar}>
              <span className={styles.movieName}>Spider man no way home</span>
              <ThemeProvider theme={theme}>
                <TabContext value={value}>
                  <Box sx={{ width: "100%" }}>
                    <TabList
                      indicatorColor="secondary"
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab className={styles.tab} label="Episodes" value="1" />
                      <Tab className={styles.tab} label="Trailer" value="2" />
                    </TabList>
                  </Box>
                </TabContext>
              </ThemeProvider>
              <TabContext value={value}>
                <TabPanel
                  value="1"
                  sx={{
                    padding: "20px 0 0 20px",
                    height: "320px",
                    overflowY: "auto",
                  }}
                >
                  <div className={styles.tabTitleWrap}>
                    <div className={styles.tabTitlePlay}>
                      <div className={styles.playIcon}></div>
                      <span className={styles.tabTitle}>Episodes</span>
                    </div>
                    <FormatListBulletedIcon className={styles.tabTitleIcon} />
                  </div>
                  <div className={styles.scrollep}>
                    <Stack
                      direction="row"
                      className={styles.listEps}
                      style={{ display: "flex", flexWrap: "wrap" }}
                      spacing={0}
                    >
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                      <span>3</span>
                    </Stack>
                  </div>
                </TabPanel>
                <TabPanel value="2">Item 4</TabPanel>
              </TabContext>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, margin: "0 36px", color: "#fff" }}>
        <div className={styles.infoName}>Sprider man no way home</div>
        <div className={styles.infoTag}>
          <div className={styles.infoStar}>
            <StarIcon className={styles.start} />
            <span>9.3</span>
          </div>
          <div className={styles.brokenLine}></div>
          <span>C13</span>
          <div className={styles.brokenLine}></div>
          <span>2021</span>
          <div className={styles.brokenLine}></div>
          <span>1 h 59 m</span>
        </div>
        <div className={styles.infoType}>
          <span>Action</span>
          <span>Drama</span>
        </div>
        <div className={styles.region}>
          <h3>Region:</h3>
          <span>American</span>
          <div className={styles.brokenLine}></div>
          <h3>Dub:</h3>
          <span>English</span>
        </div>
        <div className={styles.desc}>
          <h3>Description:</h3>
          <span>
            Spider-Man: No Way Home is a 2021 American superhero film based on
            the Marvel Comics character Spider-Man, co-produced by Columbia
            Pictures and Marvel Studios and distributed by Sony Pictures
            Releasing. It is the sequel to Spider-Man: Homecoming (2017) and
            Spider-Man: Far From Home (2019), and the 27th film in the Marvel
            Cinematic Universe (MCU). The film was directed by Jon Watts and
            written by Chris McKenna and Erik Sommers. It stars Tom Holland as
            Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch,
            Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina,
            Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and
            Tobey Maguire. In the film, Parker asks Dr. Stephen Strange
            (Cumberbatch) to use magic to make his identity as
          </span>
        </div>
        <div className={styles.buttons}>
          <button className={styles.play}>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className={styles.more}>
            <InfoOutlined />
            <span>Info</span>
          </button>
          <button className={styles.more}>
            <InfoOutlined />
            <span>Info</span>
          </button>
          <button className={styles.more}>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </Box>
      <Box sx={{ flexGrow: 1, margin: "36px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: "1px solid", borderColor: "#808080" }}>
            <TabList
              onChange={handleChange}
              textColor="inherit"
              aria-label="lab API tabs example"
            >
              <Tab className={styles.tab} label="Cast" value="1" />
              <Tab className={styles.tab} label="Recommended" value="2" />
            </TabList>
          </Box>
        </TabContext>
        <TabContext value={value}>
          <TabPanel value="1">
            <span
              style={{
                marginLeft: "20px",
                fontSize: "22px",
                color: "var(--second-color)",
              }}
            >
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
          </TabPanel>
          <TabPanel value="2">
            <div>
              <span
                style={{
                  marginLeft: "20px",
                  fontSize: "22px",
                  color: "var(--second-color)",
                }}
              >
                Recommended
              </span>
              <Listmovie />
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}

export default Watchvideo;
