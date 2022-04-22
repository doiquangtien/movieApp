import { Alert, Container, Grid, Snackbar, Stack } from "@mui/material";
import { Box } from "@mui/system";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import "./profileUser.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { useSelector } from "react-redux";
import ModalLoading from "../ModalLoading/ModalLoading";
import Loading from "../loading/Loading";
import CircularStatic from "./Progress";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUser, getUserInfo } from "../../redux/typeSlice";

function ProfileUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.typeMovie);
  const [percent, setPercent] = useState(true);
  const [btnUpdate, setbtnUpdate] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [valueInput, setValueInput] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    country: "",
    img: "",
  });
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
          setPercent(false);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setValueInput((prev) => ({ ...prev, img: downloadURL }));
            setPercent(true);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const docRef = doc(db, "users", state.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
          setLoadingForm(true);
          setValueInput({
            firstname: docSnap.data().firstname,
            lastname: docSnap.data().lastname,
            phonenumber: docSnap.data().phonenumber,
            country: docSnap.data().country,
            img: docSnap.data().img,
          });
        } else {
          console.log("No such document!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fecthData();
  }, [state.currentUser.uid]);
  const handleInput = (e) => {
    const value = e.target.value;
    setValueInput({
      ...valueInput,
      [e.target.name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setbtnUpdate(true);
    setLoading(true);
    await updateDoc(doc(db, "users", state.currentUser.uid), {
      firstname: valueInput.firstname,
      lastname: valueInput.lastname,
      phonenumber: valueInput.phonenumber,
      country: valueInput.country,
      img: valueInput.img,
    });
    setLoading(false);
    setOpen(true);
  };
  return (
    <Container maxWidth="1400px" style={{ marginTop: "90px", height: "100vh" }}>
      {loadingForm ? (
        <Box sx={{ flexGrow: 1, margin: "0 36px" }}>
          <ModalLoading load={loading} />
          <Grid className="wrap-profile" container spacing={0}>
            <Grid className="left" item md={3}>
              <div className="wrap-left">
                <div className="menu-user hover">
                  <img
                    style={{ marginLeft: "20px" }}
                    src={
                      valueInput.img ||
                      "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                  <div className="menu-name ">
                    {valueInput.firstname + " " + valueInput.lastname}
                  </div>
                </div>
                <div className="menu-type">
                  <AccessTimeIcon className="menu-icon" />
                  <div className="menu-name">History</div>
                </div>
                <div
                  className="menu-type"
                  onClick={() => {
                    navigate("/profile");
                  }}
                >
                  <PersonOutlineIcon className="menu-icon" />
                  <div className="menu-name">My Account</div>
                </div>
                <div
                  className="menu-type"
                  onClick={() => {
                    dispatch(getCurrentUser(null));
                    dispatch(getUserInfo(null));
                    navigate("/login");
                  }}
                >
                  <LogoutIcon className="menu-icon" />
                  <div className="menu-name">Logout</div>
                </div>
              </div>
            </Grid>
            <Grid className="right" item md={9}>
              <div className="wrap-right">
                <div className="top">
                  <h1>My Profile</h1>
                </div>
                <div className="bottom">
                  <div className="left-input">
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : valueInput.img ||
                            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                    <div className="progress">
                      {progress > 0 && progress < 100 && (
                        <CircularStatic progress1={progress} />
                      )}
                    </div>
                  </div>
                  {data && (
                    <div className="right-input">
                      <form>
                        <div className="formInput-img">
                          <label htmlFor="file">
                            Image:
                            <DriveFolderUploadIcon className="icon" />
                          </label>
                          <input
                            disabled={btnUpdate}
                            onChange={(e) => setFile(e.target.files[0])}
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                          />
                        </div>
                        <div className="formInput">
                          <label>First name</label>
                          <input
                            disabled={btnUpdate}
                            value={valueInput.firstname || ""}
                            name="firstname"
                            onChange={handleInput}
                            type="text"
                            placeholder="John"
                          />
                        </div>
                        <div className="formInput">
                          <label>Last name</label>
                          <input
                            disabled={btnUpdate}
                            name="lastname"
                            value={valueInput.lastname || ""}
                            onChange={handleInput}
                            type="text"
                            placeholder="Wick"
                          />
                        </div>
                        <div className="formInput">
                          <label>Phone</label>
                          <input
                            disabled={btnUpdate}
                            name="phonenumber"
                            value={valueInput.phonenumber || ""}
                            onChange={handleInput}
                            type="text"
                            placeholder="+83 825483883"
                          />
                        </div>
                        <div className="formInput">
                          <label>Country</label>
                          <input
                            disabled={btnUpdate}
                            name="country"
                            value={valueInput.country || ""}
                            onChange={handleInput}
                            type="text"
                            placeholder="VN"
                          />
                        </div>
                        {btnUpdate ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setbtnUpdate(false);
                            }}
                          >
                            Update
                          </button>
                        ) : (
                          <div>
                            <button
                              disabled={percent === false}
                              onClick={handleSubmit}
                            >
                              Send
                            </button>
                            <button
                              className="btn-cancel"
                              disabled={percent === false}
                              onClick={(e) => {
                                e.preventDefault();
                                setbtnUpdate(true);
                              }}
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </Grid>
          </Grid>
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
                severity="success"
                sx={{ width: "100%" }}
              >
                Update successful
              </Alert>
            </Snackbar>
          </Stack>
        </Box>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default ProfileUser;
