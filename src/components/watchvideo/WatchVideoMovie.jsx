import { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Loading from "../loading/Loading";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetailsById } from "../../redux/callApi";
import Bigcard from "../bigCard/Bigcard";
import { Box } from "@mui/system";

import DetailGenre from "../detailbody/detailsub/DetailGenre";
import StarIcon from "@mui/icons-material/Star";
import styles from "./watchvideo.module.scss";
import Comments from "../Comments/Comments";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import img from "../../img/person.jpg";

function WatchVideoMovie() {
  const { id_details } = useParams();
  const state = useSelector((state) => state.infoMovie);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const fecthData = async () => {
      const list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "commentsRoom"));
        querySnapshot.forEach((doc) => {
          list.push(doc.id);
        });
      } catch (err) {
        console.log(err);
      }
      return list;
    };

    const createCommentRoom = async () => {
      const data = await fecthData();
      const newData = data.filter((item) => item === id_details);
      if (newData.length === 0) {
        try {
          await setDoc(doc(db, "commentsRoom", id_details), {
            comment: [],
          });
        } catch (err) {
          console.log(err);
        }
      }
    };
    createCommentRoom();
  }, [id_details]);
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
                  <iframe
                    title="Movie"
                    src={`https://www.2embed.ru/embed/tmdb/movie?id=${id_details}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
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
                                <Bigcard data={similar} />
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
            <Grid container spacing={0}>
              <Grid
                item
                xs={12}
                sm={12}
                md={9.3}
                sx={{
                  color: "#fff",
                  borderBottom: "1px solid rgba(204, 204, 204, 0.3)",
                }}
              >
                <div className={styles.infoName}>
                  {state.detailMovie.original_title ||
                    state.detailMovie.title ||
                    state.detailMovie.name}
                </div>
                <div className={styles.infoStar}>
                  <h3>IMDB:</h3>
                  <span>{state.detailMovie.vote_average}</span>
                  <StarIcon className={styles.start} />
                </div>
                <div className={styles.release}>
                  <h3>Release Date:</h3>
                  <span>
                    {state.detailMovie.release_date ||
                      state.detailMovie.first_air_date}
                  </span>
                </div>
                <div className={styles.duration}>
                  <h3>Duration:</h3>
                  <span>{state.detailMovie.runtime} minutes</span>
                </div>
                <div className={styles.infoType}>
                  <h3>Genres:</h3>
                  <DetailGenre data={state.detailMovie.genres} />
                </div>

                <div className={styles.desc}>
                  <h3>Description:</h3>
                  <span>{state.detailMovie.overview}</span>
                </div>
                <div className={styles.castItemWatch}>
                  {state.detailMovie.credits.cast.slice(0, 5).map((item, i) => (
                    <div key={i} className={styles.castItem}>
                      {item.profile_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                          alt=""
                        />
                      ) : (
                        <img src={img} alt="" />
                      )}
                      <div className={styles.castTitle}>
                        <span className={styles.castName}>
                          {item.name || item.original_name}
                        </span>
                        <span className={styles.castCharacter}>
                          {item.character}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Grid>
              <Grid item md={9.3} style={{ marginBottom: "30px" }}>
                <Comments idCommentRoom={id_details} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}

export default WatchVideoMovie;
