import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsById } from "../../redux/callApi";
import { Box } from "@mui/system";
import Tab from "@mui/material/Tab";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import DetailGenre from "../detailbody/detailsub/DetailGenre";
import StarIcon from "@mui/icons-material/Star";
import Bigcard from "../bigCard/Bigcard";
import Castitem from "../castItem/Castitem";
import Smallcard from "../smallCard/Smallcard";
import styles from "./watchVideoSeries.module.scss";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// import { InfoOutlined, PlayArrow } from "@mui/icons-material";

function WatchVideoMovie() {
  const { id_details, id_season, id_esp } = useParams();
  const state = useSelector((state) => state.infoMovie);
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");
  const [icon, setIcon] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    getDetailsById(dispatch, "tv", id_details);
  }, [dispatch, id_details]);
  console.log(state.detailMovie);
  return (
    <>
      {state.detailMovie && (
        <Container maxWidth="1400px" className={styles.container}>
          <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={9.3}>
                <div className={styles.video}>
                  <iframe
                    id="iframe"
                    src={`https://www.2embed.ru/embed/tmdb/tv?id=60574&s=${id_season}&e=${id_esp}`}
                    width="100%"
                    height="100%"
                    frameborder="0"
                  ></iframe>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={2.7}>
                <div className={styles.rightBar}>
                  <span className={styles.movieName}>
                    {state.detailMovie.original_title ||
                      state.detailMovie.title ||
                      state.detailMovie.name}
                  </span>
                  <TabContext value={value}>
                    <Box sx={{ width: "100%" }}>
                      <TabList
                        indicatorColor="secondary"
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab
                          className={styles.tab}
                          label="Episodes"
                          value="1"
                        />
                        <Tab
                          className={styles.tab}
                          label="Recommend"
                          value="2"
                        />
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
                          {state.detailMovie.similar.results
                            .slice(0, 10)
                            .map((similar, i) => {
                              return <Bigcard key={i} data={similar} />;
                            })}
                        </div>
                      </div>
                    </TabPanel>
                  </TabContext>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "0 36px", color: "#fff" }}>
            <div className={styles.infoName}>
              {state.detailMovie.original_title ||
                state.detailMovie.title ||
                state.detailMovie.name}
            </div>
            <div className={styles.infoTag}>
              <div className={styles.infoStar}>
                <StarIcon className={styles.start} />
                <span>{state.detailMovie.vote_average}</span>
              </div>
              <div className={styles.brokenLine}></div>
              <span>C16</span>
              <div className={styles.brokenLine}></div>
              <span>{state.detailMovie.last_air_date}</span>
              <div className={styles.brokenLine}></div>
              <span>{state.detailMovie.number_of_episodes} episodes</span>
              <div className={styles.brokenLine}></div>
              <span>{state.detailMovie.number_of_seasons} seasons</span>
            </div>
            <div className={styles.infoType}>
              <DetailGenre data={state.detailMovie.genres} />
            </div>
            <div className={styles.region}>
              <h3>Region:</h3>
              <span>{state.detailMovie.production_countries[0].name}</span>
              <div className={styles.brokenLine}></div>
              <h3>Dub:</h3>
              <span>{state.detailMovie.spoken_languages[0].english_name}</span>
            </div>
            <div className={styles.desc}>
              <h3>Description:</h3>
              <span>{state.detailMovie.overview}</span>
            </div>
          </Box>
          <Box
            sx={{ flexGrow: 1, margin: "36px", borderTop: "1px solid #808080" }}
          >
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
              {state.detailMovie.credits.cast.slice(0, 12).map((cast, i) => {
                return (
                  <Grid key={i} item md={2}>
                    <Castitem data={cast} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}

export default WatchVideoMovie;
