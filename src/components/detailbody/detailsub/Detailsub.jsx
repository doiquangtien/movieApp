import DetailGenre from "./DetailGenre";
import DetaileCast from "./DetaileCast";
import { PlayArrow } from "@mui/icons-material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ShareIcon from "@mui/icons-material/Share";
import styles from "./detailsub.module.scss";
import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ModalLoading from "../../ModalLoading/ModalLoading";
import AlertDialogSlide from "../../DialogLogin/DIalogLogin";
// import Loading from "../../loading/Loading";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Detailsub({ data, type }) {
  const state = useSelector((state) => state.typeMovie);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [value, setValue] = useState(5);
  const [severity12, setSeverity] = useState({
    severity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const movieFa = [
    {
      id_fa: data.id,
      backdrop_path: data.backdrop_path || "",
      type: type,
      poster_path: data.poster_path || "",
      name_movie: data.original_title || data.name || data.title,
    },
  ];
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const fecthData = async () => {
    try {
      const docRef = doc(db, "users", state.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data().favorites;
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);

  const handleFavorites = async () => {
    const data = await fecthData();
    const ids = new Set(data.map((d) => d.id_fa));
    const newData = [...data, ...movieFa.filter((d) => !ids.has(d.id_fa))];
    const isSaveMovie = movieFa.filter((d) => !ids.has(d.id_fa));

    if (isSaveMovie.length > 0) {
      setSeverity({
        severity: "success",
        message: "Add new favorite success !",
      });
    } else {
      setSeverity({
        severity: "warning",
        message: "Movies already exist !",
      });
    }

    setLoading(true);

    try {
      await updateDoc(doc(db, "users", state.currentUser.uid), {
        favorites: newData,
      });
      setLoading(false);
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {data && (
        <div
          className={styles.banner}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
          }}
        >
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.imgsub}>
                <img
                  src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                  alt=""
                />
              </div>
              <div className={styles.infoRight}>
                <div className={styles.infoName}>
                  {data.original_title || data.title || data.name}
                </div>
                <div className={styles.infoTag}>
                  <div className={styles.infoStar}>
                    <h3>IMDB:</h3>
                    <span>{data.vote_average}</span>
                    <StarIcon className={styles.start} />
                  </div>
                  <div className={styles.brokenLine}></div>
                  <span>C16</span>
                  <div className={styles.brokenLine}></div>

                  {type === "movie" && (
                    <span>{data.release_date || data.first_air_date}</span>
                  )}
                  {type === "tv" && (
                    <>
                      <span>
                        {data.first_air_date} to {data.last_air_date}
                      </span>
                    </>
                  )}
                  <div className={styles.brokenLine}></div>
                  {type === "movie" && <span>{data.runtime} minutes</span>}
                  {type === "tv" && (
                    <>
                      <span>{data.number_of_episodes} episodes</span>
                      <div className={styles.brokenLine}></div>
                      <span>{data.number_of_seasons} seasons</span>
                    </>
                  )}
                </div>
                <div className={styles.infoType}>
                  <h3>Genres:</h3>
                  <DetailGenre data={data.genres} />
                </div>
                <div className={styles.cast}>
                  <h3>Cast:</h3>
                  <DetaileCast data={data.credits.cast} />
                </div>
                <div className={styles.desc}>
                  <h3>Description:</h3>
                  <span>{data.overview}</span>
                </div>
                <div className={styles.rating}>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                  <span>({data.vote_count} vote)</span>
                </div>
                <div className={styles.buttons}>
                  {type === "movie" && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/watch/movie/` + data.id}
                    >
                      <button className={styles.play}>
                        <PlayArrow />
                        <span>Play</span>
                      </button>
                    </Link>
                  )}
                  {type === "tv" && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/watch/tv/` + data.id + `/season/` + 1 + `/esp/` + 1}
                    >
                      <button className={styles.play}>
                        <PlayArrow />
                        <span>Play</span>
                      </button>
                    </Link>
                  )}

                  <button className={styles.more}>
                    <BookmarkAddIcon />
                    {state.currentUser ? (
                      <span onClick={handleFavorites}>Add to favorites</span>
                    ) : (
                      <>
                        <span onClick={handleOpenDialog}>Add to favorites</span>
                        <AlertDialogSlide
                          open={openDialog}
                          handleClose={handleCloseDialog}
                        />
                      </>
                    )}
                  </button>
                  <button className={styles.more}>
                    <ShareIcon />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
            <Stack spacing={2} sx={{ width: "100%" }}>
              <Snackbar
                style={{ marginTop: "50px" }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity={severity12.severity}
                  sx={{ width: "100%" }}
                >
                  {severity12.message}
                </Alert>
              </Snackbar>
            </Stack>
            <ModalLoading load={loading} />
          </div>
        </div>
      )}
    </>
  );
}

export default Detailsub;
