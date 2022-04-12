import { useEffect, useRef, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailsById } from "../../redux/callApi";
import { Box } from "@mui/system";
import { getSeasons } from "../../redux/callApi";
import Tab from "@mui/material/Tab";
import Loading from "../loading/Loading";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import DetailGenre from "../detailbody/detailsub/DetailGenre";
import StarIcon from "@mui/icons-material/Star";
import Bigcard from "../bigCard/Bigcard";
import styles from "./watchVideoSeries.module.scss";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Seasons from "./seasons/Seasons";
import clsx from "clsx";

function WatchVideoMovie() {
  const { id_details, id_season, id_esp } = useParams();
  const state = useSelector((state) => state.infoMovie);
  const dispatch = useDispatch();
  const [value, setValue] = useState("1");
  const [icon, setIcon] = useState(true);
  const [load, setLoad] = useState(false);
  const refScroll = useRef();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const loadDetails = async () => {
      await getDetailsById(dispatch, "tv", id_details);
      setLoad(true);
    };
    loadDetails();
    return () => {
      abortController.abort();
    };
  }, [dispatch, id_details]);
  useEffect(() => {
    const abortController = new AbortController();
    const loadSeason = async () => {
      await getSeasons(dispatch, id_details, id_season);
      setLoad(true);
    };
    loadSeason();

    return () => {
      abortController.abort();
    };
  }, [dispatch, id_details, id_season]);

  return (
    <>
      {state.detailMovie && state.seasonsMovie && (
        <Container maxWidth="1400px" className={styles.container}>
          <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={9.3}>
                <div className={styles.video}>
                  <iframe
                    title="Movie"
                    src={`https://www.2embed.ru/embed/tmdb/tv?id=${id_details}&s=${id_season}&e=${id_esp}`}
                    width="100%"
                    height="100%"
                    frameborder="0"
                    allowFullScreen
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
                        indicatorColor="primary"
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
                          <span className={styles.tabTitle}>
                            Episodes {id_esp}
                          </span>
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
                      <Seasons
                        data={state.detailMovie.seasons}
                        season={id_season}
                        details={id_details}
                      />
                      <div className={styles.scrollEps}>
                        {icon ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                margin: "0 15px",
                              }}
                            >
                              {state.seasonsMovie.episodes !== null &&
                                state.seasonsMovie.episodes.length > 0 &&
                                state.seasonsMovie.episodes.map((eps, i) => {
                                  return (
                                    <div
                                      key={i}
                                      style={{
                                        backgroundColor: "#2d2f34",
                                        margin: "8px",
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "5px",
                                      }}
                                    >
                                      <Link
                                        style={{
                                          textDecoration: "none",
                                          display: "flex",
                                          justifyContent: "center",
                                        }}
                                        to={
                                          `/watch/tv/` +
                                          id_details +
                                          `/season/` +
                                          id_season +
                                          `/esp/` +
                                          eps.episode_number
                                        }
                                      >
                                        <span
                                          style={
                                            eps.episode_number ===
                                            parseInt(id_esp)
                                              ? {
                                                  color: "#e7b524",
                                                  fontWeight: "700",
                                                  lineHeight: "40px",
                                                }
                                              : {
                                                  color: "#fff",
                                                  fontWeight: "700",
                                                  lineHeight: "40px",
                                                }
                                          }
                                        >
                                          {eps.episode_number}
                                        </span>
                                      </Link>
                                    </div>
                                  );
                                })}
                            </div>
                          </>
                        ) : (
                          <div className={styles.listEpsVideo}>
                            {state.seasonsMovie.episodes &&
                              state.seasonsMovie.episodes.map((data, i) => {
                                return (
                                  <Link
                                    key={i}
                                    style={{
                                      textDecoration: "none",
                                    }}
                                    to={
                                      `/watch/tv/` +
                                      id_details +
                                      `/season/` +
                                      id_season +
                                      `/esp/` +
                                      data.episode_number
                                    }
                                  >
                                    {data.episode_number ===
                                    parseInt(id_esp) ? (
                                      <div
                                        ref={refScroll}
                                        className={clsx(
                                          styles.smallCard,
                                          `${data.episode_number}`
                                        )}
                                        style={{
                                          backgroundColor: "#2d2f34",
                                          color: "#e7b524",
                                        }}
                                      >
                                        <div className={styles.cardImg}>
                                          {data.still_path !== null ? (
                                            <img
                                              src={`https://image.tmdb.org/t/p/w400${data.still_path}`}
                                              alt=""
                                            />
                                          ) : (
                                            <img
                                              src={`https://image.tmdb.org/t/p/w300${state.detailMovie.backdrop_path}`}
                                              alt=""
                                            />
                                          )}
                                        </div>
                                        <div className={styles.cardDesc}>
                                          <span>{data.name}</span>
                                        </div>
                                      </div>
                                    ) : (
                                      <div
                                        className={styles.smallCard}
                                        style={{
                                          backgroundColor: "#1a1c22",
                                          color: "#fff",
                                        }}
                                      >
                                        <div className={styles.cardImg}>
                                          {data.still_path !== null ? (
                                            <img
                                              src={`https://image.tmdb.org/t/p/w400${data.still_path}`}
                                              alt=""
                                            />
                                          ) : (
                                            <img
                                              src={`https://image.tmdb.org/t/p/w300${state.detailMovie.backdrop_path}`}
                                              alt=""
                                            />
                                          )}
                                        </div>
                                        <div className={styles.cardDesc}>
                                          <span>{data.name}</span>
                                        </div>
                                      </div>
                                    )}
                                  </Link>
                                );
                              })}
                          </div>
                        )}
                      </div>
                    </TabPanel>
                    <TabPanel
                      value="2"
                      sx={{
                        padding: "0",
                      }}
                    >
                      <div className={styles.scrollRecomend}>
                        {load ? (
                          <div className={styles.listRecomendVideo}>
                            {state.detailMovie.similar.results
                              .slice(0, 10)
                              .map((similar, i) => {
                                return (
                                  <Link
                                    key={i}
                                    style={{ textDecoration: "none" }}
                                    to={`/details/movie/` + similar.id}
                                  >
                                    <Bigcard key={i} data={similar} />
                                  </Link>
                                );
                              })}
                          </div>
                        ) : (
                          <Loading />
                        )}
                      </div>
                    </TabPanel>
                  </TabContext>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "0 36px", color: "#fff" }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={9.3}>
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

                <div className={styles.desc}>
                  <h3>Description:</h3>
                  <span>{state.detailMovie.overview}</span>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}

export default WatchVideoMovie;
