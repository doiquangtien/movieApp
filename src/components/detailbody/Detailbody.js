import * as React from "react";
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
import { Container, Grid } from "@mui/material";
function Detailbody() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Detailsub />
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
                  <Tab className={styles.tab} label="Recommended" value="2" />
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
                <Listslider />
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
  );
}

export default Detailbody;
