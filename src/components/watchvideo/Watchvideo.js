import React from "react";
import { Container, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import Tab from "@mui/material/Tab";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import StarIcon from "@mui/icons-material/Star";
import Bigcard from "../bigCard/Bigcard";
import Castitem from "../castItem/Castitem";
// import video from "../../img/video.mp4";
import Smallcard from "../smallCard/Smallcard";
import styles from "./watchvideo.module.scss";
// import img from "../../img/banner.jpg";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

function Watchvideo() {
  const [value, setValue] = React.useState("1");
  const [icon, setIcon] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const api = "https://www.2embed.ru/embed/tmdb/movie?id=691683";
  console.log(api);
  return (
    <Container maxWidth="1400px" className={styles.container}>
      <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={9.3}>
            <div className={styles.video}>
              {/* <video src={api} /> */}
              <iframe
                width="100%"
                frameboder="0"
                height="100%"
                src="https://www.2embed.ru/embed/tmdb/movie?id=634649"
                title="YouTube video player"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={2.7}>
            <div className={styles.rightBar}>
              <span className={styles.movieName}>Spider man no way home</span>
              <TabContext value={value}>
                <Box sx={{ width: "100%" }}>
                  <TabList
                    indicatorColor="secondary"
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab className={styles.tab} label="Episodes" value="1" />
                    <Tab className={styles.tab} label="Recommend" value="2" />
                  </TabList>
                </Box>
              </TabContext>
              <TabContext value={value}>
                <TabPanel
                  value="1"
                  sx={{
                    padding: "0",
                  }}
                >
                  <div className={styles.tabTitleWrap}>
                    <div className={styles.tabTitlePlay}>
                      <div className={styles.playIcon}></div>
                      <span className={styles.tabTitle}>Episodes</span>
                    </div>
                    <div
                      className={styles.tabIcons}
                      onClick={() => {
                        setIcon(!icon);
                      }}
                    >
                      {icon ? (
                        <ViewListIcon className={styles.listIcon} />
                      ) : (
                        <ViewModuleIcon className={styles.moduleIcon} />
                      )}
                    </div>
                  </div>
                  <div className={styles.scrollWrap}>
                    <div className={styles.scrollEps}>
                      {icon ? (
                        <Stack
                          direction="row"
                          className={styles.listEps}
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            marginLeft: "20px",
                          }}
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
                        </Stack>
                      ) : (
                        <div className={styles.listEpsVideo}>
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                          <Smallcard />
                        </div>
                      )}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel
                  value="2"
                  sx={{
                    padding: "0",
                  }}
                >
                  <div className={styles.scrollRecomend}>
                    <div className={styles.listRecomendVideo}>
                      <Bigcard />
                      <Bigcard />
                      <Bigcard />
                      <Bigcard />
                      <Bigcard />
                      <Bigcard />
                    </div>
                  </div>
                </TabPanel>
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
      <Box sx={{ flexGrow: 1, margin: "36px", borderTop: "1px solid #808080" }}>
        <div
          style={{
            marginLeft: "20px",
            fontSize: "22px",
            color: "var(--second-color)",
            marginTop: "20px",
          }}
        >
          Cast
        </div>
        <Grid container spacing={2}>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
          <Grid item md={2}>
            <Castitem />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Watchvideo;
