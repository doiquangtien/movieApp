import * as React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LoginIcon from "@mui/icons-material/InputOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./myaccount.module.scss";
import Avatar from "@mui/material/Avatar";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCurrentUser, getUserInfo } from "../../../redux/typeSlice";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";

function Myaccount() {
  const state = useSelector((state) => state.typeMovie);
  const navigate = useNavigate();
  // console.log(state.userInfo);
  const dispatch = useDispatch();
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
  });
  React.useEffect(() => {
    if (state.currentUser) {
      const unsub = onSnapshot(
        doc(db, "users", state.currentUser.uid),
        (doc) => {
          dispatch(getUserInfo(doc.data()));
        }
      );
      return () => {
        unsub();
      };
    }
  }, [state.currentUser, dispatch]);
  return (
    <>
      {state.currentUser && state.userInfo ? (
        <div className={styles.myaccount}>
          <div className={clsx(styles.myaccountitem, styles.profile)}>
            <AccessTimeIcon sx={{ fontSize: "25px" }} />
            <span>History</span>
            <ul className={styles.userHistory}>
              <li className={styles.useritem}>
                <span>Empty History</span>
              </li>
            </ul>
          </div>
          <div className={clsx(styles.myaccountitem, styles.profile)}>
            <Avatar alt="Remy Sharp" src={state.userInfo.img} />
            <ul className={styles.usermenu}>
              <li className={clsx(styles.useritem, styles.useritemFirst)}>
                <Avatar alt="Remy Sharp" src={state.userInfo.img} />
                <span>
                  {state.userInfo.firstname + " " + state.userInfo.lastname}
                </span>
              </li>
              <li className={styles.useritem}>
                <MailOutlineIcon />
                <span>{state.currentUser.email}</span>
              </li>
              <li
                className={styles.useritem}
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <PersonOutlineRoundedIcon />
                <span>Profile</span>
              </li>

              <li
                className={styles.useritem}
                onClick={() => {
                  navigate("/favorites");
                }}
              >
                <BookmarkBorderIcon />
                <span>Favorites</span>
              </li>
              <li
                className={styles.useritem}
                onClick={() => {
                  dispatch(getCurrentUser(null));
                  dispatch(getUserInfo(null));
                  navigate("/login");
                }}
              >
                <LogoutIcon />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.myaccount}>
          <div className={clsx(styles.myaccountitem, styles.profile)}>
            <AccessTimeIcon sx={{ fontSize: "25px" }} />
            <span>History</span>
            <ul className={styles.userHistory}>
              <li className={styles.useritem}>
                <span>Login to track your watch history</span>
              </li>
            </ul>
          </div>
          <div className={clsx(styles.myaccountitem, styles.profile)}>
            <PersonOutlineRoundedIcon sx={{ fontSize: "40px" }} />
            <ul className={clsx(styles.usermenu)}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <li className={styles.useritem}>
                  <LoginIcon />
                  <span>Login</span>
                </li>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <li className={styles.useritem}>
                  <HowToRegOutlinedIcon />
                  <span>Register</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Myaccount;
