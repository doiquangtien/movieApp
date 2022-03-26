import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDetailsById } from "../../redux/callApi";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styles from "./detailbody.module.scss";
import Detailsub from "./detailsub/Detailsub";
import Loading from "../loading/Loading";
import Bigcard from "../bigCard/Bigcard";
import EpisodesCard from "../bigCard/EpisodesCard";
import Castitem from "../castitem/Castitem";

function Detailbody() {
  const [load, setLoad] = useState(false);

  let navigate = useNavigate();
  const { mediatype, id_details } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.infoMovie);
  const [value, setValue] = useState("1");
  useEffect(() => {
    const abortController = new AbortController();
    const loadDetails = async () => {
      await getDetailsById(dispatch, mediatype, id_details);
      setLoad(true);
    };
    loadDetails();
    return () => {
      abortController.abort();
    };
  }, [dispatch, mediatype, id_details]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {state.detailMovie && (
        <>
          <Detailsub data={state.detailMovie} type={mediatype} />
          <Container className={styles.detailBody} maxWidth="1400px">
            <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box
                    sx={{
                      borderBottom: "1px solid",
                      borderColor: "#808080",
                      marginBottom: "20px",
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      textColor="inherit"
                      aria-label="lab API tabs example"
                    >
                      {mediatype === "movie" && (
                        <Tab className={styles.tab} label="Watch" value="1" />
                      )}
                      {mediatype === "tv" && (
                        <Tab className={styles.tab} label="Seasons" value="1" />
                      )}
                      <Tab
                        className={styles.tab}
                        label="Recommended"
                        value="2"
                      />
                      <Tab className={styles.tab} label="Cast" value="3" />
                    </TabList>
                  </Box>
                </TabContext>
                <TabContext value={value}>
                  <TabPanel
                    value="3"
                    sx={{
                      padding: "0",
                    }}
                  >
                    <span
                      style={{
                        marginLeft: "20px",
                        fontSize: "22px",
                        color: "var(--second-color)",
                      }}
                    >
                      Cast
                    </span>
                    {load ? (
                      <Grid container spacing={2} marginTop="6px">
                        {state.detailMovie.credits.cast &&
                          state.detailMovie.credits.cast
                            .slice(0, 12)
                            .map((cast, i) => {
                              return (
                                <Grid key={i} item md={2}>
                                  <Castitem data={cast} />
                                </Grid>
                              );
                            })}
                      </Grid>
                    ) : (
                      <Loading />
                    )}
                  </TabPanel>
                  <TabPanel
                    value="2"
                    sx={{
                      padding: "0",
                    }}
                  >
                    <span
                      style={{
                        marginLeft: "20px",
                        fontSize: "22px",
                        color: "var(--second-color)",
                      }}
                    >
                      Similar
                    </span>
                    {load ? (
                      <Grid container spacing={2} marginTop="20px">
                        {state.detailMovie.similar.results
                          .slice(0, 10)
                          .map((data, i) => {
                            return (
                              <Grid
                                key={i}
                                item
                                md={2.4}
                                onClick={() =>
                                  navigate(
                                    `/details/` + mediatype + `/` + data.id
                                  )
                                }
                              >
                                <Bigcard data={data} />
                              </Grid>
                            );
                          })}
                      </Grid>
                    ) : (
                      <Loading />
                    )}
                  </TabPanel>

                  <TabPanel
                    value="1"
                    sx={{
                      padding: "0",
                    }}
                  >
                    {mediatype === "tv" && (
                      <div>
                        <span
                          style={{
                            marginLeft: "20px",
                            fontSize: "22px",
                            color: "var(--second-color)",
                          }}
                        >
                          Seasons
                        </span>
                        {load ? (
                          <Grid container spacing={2} marginTop="20px">
                            {state.detailMovie.seasons &&
                              state.detailMovie.seasons.map((data, i) => {
                                return (
                                  <Grid
                                    key={i}
                                    item
                                    md={2.4}
                                    onClick={() => {
                                      navigate(
                                        `/watch/tv/` +
                                          id_details +
                                          `/season/` +
                                          data.season_number +
                                          `/esp/1`
                                      );
                                    }}
                                  >
                                    <EpisodesCard
                                      data={data}
                                      data1={state.detailMovie}
                                    />
                                  </Grid>
                                );
                              })}
                          </Grid>
                        ) : (
                          <Loading />
                        )}
                      </div>
                    )}
                    {mediatype === "movie" && (
                      <div>
                        <span
                          style={{
                            marginLeft: "20px",
                            fontSize: "22px",
                            color: "var(--second-color)",
                          }}
                        >
                          Watch movie
                        </span>
                        <Grid container spacing={2} marginTop="20px">
                          <Grid item md={2.4}>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/watch/movie/` + id_details}
                            >
                              <Bigcard data={state.detailMovie} />
                            </Link>
                          </Grid>
                        </Grid>
                      </div>
                    )}
                  </TabPanel>
                </TabContext>
              </Box>
            </Box>
          </Container>
        </>
      )}
    </>
  );
}

export default Detailbody;
