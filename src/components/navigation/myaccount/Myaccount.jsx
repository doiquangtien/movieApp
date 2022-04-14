import * as React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import styles from "./myaccount.module.scss";
import Avatar from "@mui/material/Avatar";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../../redux/typeSlice";
import { deepOrange } from "@mui/material/colors";

function Myaccount() {
  const state = useSelector((state) => state.typeMovie);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  React.useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  });
  return (
    <>
      {state.currentUser ? (
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
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {state.currentUser.email.charAt(0).toUpperCase()}
            </Avatar>
            <ul className={styles.usermenu}>
              <li className={styles.useritem}>
                <span>{state.currentUser.email}</span>
              </li>
              <li className={styles.useritem}>
                <span>Profile</span>
              </li>
              <Link to="/favorites" style={{ textDecoration: "none" }}>
                <li className={styles.useritem}>
                  <span>Favorites</span>
                </li>
              </Link>
              <li className={styles.useritem}>
                <span
                  onClick={() => {
                    dispatch(getCurrentUser(null));
                    navigate("/login");
                  }}
                >
                  Logout
                </span>
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
            <ul className={styles.usermenu}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <li className={styles.useritem}>
                  <span>Login</span>
                </li>
              </Link>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <li className={styles.useritem}>
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
