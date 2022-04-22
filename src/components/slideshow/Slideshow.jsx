import { useRef, useState } from "react";
import { Slide } from "react-slideshow-image";
import { useDispatch } from "react-redux";
import { getPage } from "../../redux/typeSlice";
import {
  ExpandLess,
  ExpandMore,
  InfoOutlined,
  PlayArrow,
} from "@mui/icons-material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { tvGenres, movieGenres } from "../../dataGenre/DataGenre";
import "./slideshow.scss";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";

function Slideshow({ type, bannerInfo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const slideRef = useRef();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const back = () => {
    slideRef.current.goBack();
  };

  const next = () => {
    slideRef.current.goNext();
  };

  const properties = {
    duration: 3000,
    easing: "ease",
    arrows: false,
  };

  return (
    <div
      style={{
        marginBottom: "50px",
        width: "100%",
        position: "relative",
        top: "0",
        minHeight: "100vh",
      }}
    >
      <div className="category">
        {type === "movie" && (
          <>
            <List>
              <ListItemButton
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "rgba(0,0,0,0.9)",
                  height: "40px",
                }}
                onClick={handleClick}
              >
                <ListItemText primary="Movies : genre" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={!open}
                timeout="auto"
                unmountOnExit
                style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
              >
                <List component="div" disablePadding>
                  {movieGenres.map((genre, i) => (
                    <Link
                      key={i}
                      onClick={() => {
                        setOpen(true);
                        dispatch(getPage(2));
                      }}
                      to={`/` + type + `/` + genre.id}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemButton
                        className="listButtonGenre"
                        sx={{ height: "22px", color: "#fff" }}
                      >
                        <ListItemText
                          className="textGenre"
                          primary={genre.name}
                        />
                      </ListItemButton>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </List>
          </>
        )}
        {type === "tv" && (
          <List>
            <ListItemButton
              style={{
                border: "1px solid #ccc",
                backgroundColor: "rgba(0,0,0,0.9)",
                height: "40px",
              }}
              onClick={handleClick}
            >
              <ListItemText primary="Tv-Series : genre" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={!open}
              timeout="auto"
              unmountOnExit
              style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            >
              <List component="div" disablePadding>
                {tvGenres.map((genre, i) => (
                  <Link
                    key={i}
                    onClick={() => {
                      setOpen(true);
                      dispatch(getPage(2));
                    }}
                    to={`/` + type + `/` + genre.id}
                    style={{ textDecoration: "none" }}
                  >
                    <ListItemButton
                      className="listButtonGenre"
                      sx={{ height: "22px", color: "#fff" }}
                    >
                      <ListItemText
                        primary={genre.name}
                        className="textGenre"
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </List>
            </Collapse>
          </List>
        )}
      </div>

      <Slide ref={slideRef} {...properties}>
        {bannerInfo !== null &&
          bannerInfo.length > 0 &&
          bannerInfo.slice(0, 3).map((item, i) => {
            if (item.poster_path && item.backdrop_path !== null) {
              // let imagePost = `https://image.tmdb.org/t/p/original${item.poster_path}`;
              let imageDrop = `https://image.tmdb.org/t/p/original${item.backdrop_path}`;
              return (
                <div className="each-slide" key={{ i }}>
                  <div
                    className="slide-img"
                    style={{ backgroundImage: `url(${imageDrop})` }}
                  ></div>
                  <div className="info">
                    <span className="name">
                      {item.original_title || item.title || item.name}
                    </span>
                    <div className="date">
                      <h3>Release date:</h3>
                      <span>{item.release_date || item.first_air_date}</span>
                    </div>
                    <div className="desc">
                      <h3>Description:</h3>
                      <span>{item.overview}</span>
                    </div>
                    {item.media_type && (
                      <div className="buttons">
                        <button
                          className="play"
                          onClick={() =>
                            navigate(
                              `/details/` + item.media_type + `/` + item.id
                            )
                          }
                        >
                          <PlayArrow />
                          <span>Play</span>
                        </button>
                        <button
                          className="more"
                          onClick={() =>
                            navigate(
                              `/details/` + item.media_type + `/` + item.id
                            )
                          }
                        >
                          <InfoOutlined />
                          <span>Info</span>
                        </button>
                      </div>
                    )}
                    {type && (
                      <div className="buttons">
                        <button
                          className="play"
                          onClick={() =>
                            navigate(`/details/` + type + `/` + item.id)
                          }
                        >
                          <PlayArrow />
                          <span>Play</span>
                        </button>
                        <button
                          className="more"
                          onClick={() =>
                            navigate(`/details/` + type + `/` + item.id)
                          }
                        >
                          <InfoOutlined />
                          <span>Info</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          })}
      </Slide>
      <div className="btnBack" onClick={back}>
        <NavigateBeforeIcon className="iconBack" />
      </div>

      <div className="btnNext" onClick={next}>
        <NavigateNextIcon className="iconNext" />
      </div>
    </div>
  );
}

export default Slideshow;
