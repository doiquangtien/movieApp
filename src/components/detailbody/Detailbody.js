import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsById } from "../../redux/callApi";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styles from "./detailbody.module.scss";
import Listslider from "../body/listSlider/Listslider";
import Detailsub from "./detailsub/Detailsub";
import Bigcard from "../bigCard/Bigcard";
import Castitem from "../castItem/Castitem";
function Detailbody() {
  const { mediatype, id_details } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.infoMovie);
  const [value, setValue] = useState("1");
  useEffect(() => {
    getDetailsById(dispatch, mediatype, id_details);
  }, [dispatch, mediatype, id_details]);
  // console.log(state.detailMovie.credits.cast);
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
                      <Tab className={styles.tab} label="Cast" value="1" />
                      <Tab
                        className={styles.tab}
                        label="Recommended"
                        value="2"
                      />
                      <Tab className={styles.tab} label="Episodes" value="3" />
                      <Tab className={styles.tab} label="Trailer" value="4" />
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
                    <span
                      style={{
                        marginLeft: "20px",
                        fontSize: "22px",
                        color: "var(--second-color)",
                      }}
                    >
                      Cast
                    </span>
                    <Grid container spacing={2}>
                      {state.detailMovie.credits.cast
                        .slice(0, 12)
                        .map((cast, i) => {
                          return (
                            <Grid key={i} item md={2}>
                              <Castitem data={cast} />
                            </Grid>
                          );
                        })}
                    </Grid>
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

                    <Listslider
                      data={state.detailMovie.similar.results.slice(0, 10)}
                      type={mediatype}
                    />
                  </TabPanel>
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
                      Episodes
                    </span>
                    <Grid container spacing={2} marginTop="20px">
                      <Grid item md={3}>
                        <Bigcard />
                      </Grid>
                      <Grid item md={3}>
                        <Bigcard />
                      </Grid>
                      <Grid item md={3}>
                        <Bigcard />
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel
                    value="4"
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
                      Trailer
                    </span>
                    <Grid container spacing={2} marginTop="20px">
                      <Grid item md={3}>
                        <Bigcard />
                      </Grid>
                      <Grid item md={3}>
                        <Bigcard />
                      </Grid>
                      <Grid item md={3}>
                        <Bigcard />
                      </Grid>
                    </Grid>
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
