import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Loading from "../loading/Loading";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailsById } from "../../redux/callApi";
import Castitem from "../castitem/Castitem";
import Bigcard from "../bigCard/Bigcard";
import { Box } from "@mui/system";

import DetailGenre from "../detailbody/detailsub/DetailGenre";
import StarIcon from "@mui/icons-material/Star";
import styles from "./watchvideo.module.scss";

function WatchVideoMovie() {
  const { id_details } = useParams();
  const state = useSelector((state) => state.infoMovie);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const loadDetail = async () => {
      await getDetailsById(dispatch, "movie", id_details);
      setLoad(true);
    };
    loadDetail();
  }, [dispatch, id_details]);

  return (
    <>
      {state.detailMovie && (
        <Container maxWidth="1400px" className={styles.container}>
          <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={9.3}>
                <div className={styles.video}>
                  {load ? (
                    <iframe
                      id="iframe"
                      src={`https://www.2embed.ru/embed/tmdb/movie?id=${id_details}`}
                      width="100%"
                      height="100%"
                      frameborder="0"
                    ></iframe>
                  ) : (
                    <Loading />
                  )}
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={2.7}>
                <div className={styles.rightBar}>
                  <span className={styles.movieName}>
                    {state.detailMovie.original_title ||
                      state.detailMovie.title ||
                      state.detailMovie.name}
                  </span>
                  <div className={styles.wrapRc}>RECOMMEND</div>

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
              <span>
                {state.detailMovie.release_date ||
                  state.detailMovie.first_air_date}
              </span>
              <div className={styles.brokenLine}></div>
              <span>{state.detailMovie.runtime} minutes</span>
            </div>
            <div className={styles.infoType}>
              <DetailGenre data={state.detailMovie.genres} />
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
            {load ? (
              <Grid container spacing={2}>
                {state.detailMovie.credits.cast.slice(0, 12).map((cast, i) => {
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
          </Box>
        </Container>
      )}
    </>
  );
}

export default WatchVideoMovie;
