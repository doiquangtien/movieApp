import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./search.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getInputSearch } from "../../../redux/typeSlice";
function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { inputSearch } = useSelector((state) => state.typeMovie);
  //   console.log(location.pathname);
  const handleSearch = (e) => {
    let keywords = e.target.value;

    // console.log(keywords.length);
    if (keywords.length > 0) {
      dispatch(getInputSearch(keywords));
      navigate(`/search?keywords=${keywords}`);
    } else {
      dispatch(getInputSearch(""));
      navigate(`/`);
    }
  };
  return (
    <div className={styles.search}>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          height: 40,
          backgroundColor: "rgba(64, 64, 64,0.8)",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, color: "rgb(242, 242, 242)" }}
          placeholder="Search Movie"
          inputProps={{ "aria-label": "search google maps" }}
          value={inputSearch}
          onChange={handleSearch}
        />
        <Divider
          sx={{ height: 28, m: 0.5, color: "red" }}
          orientation="vertical"
        />
        <IconButton sx={{ p: "10px" }} aria-label="search">
          <SearchIcon sx={{ color: "rgb(242, 242, 242)" }} />
        </IconButton>
      </Paper>
    </div>
  );
}

export default Search;
