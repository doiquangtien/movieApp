import { useEffect, useState } from "react";
import Itemcard from "../itemCard/Itemcard";
import axios from "axios";
import Slideshow from "../slideShow/Slideshow";
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
const API_KEY = "9469ca4e1229b1db42ff4124c1655066";
const BASE_URL = "https://api.themoviedb.org/3";
function Listmovie() {
  const { type, id } = useParams();
  const { typeGen } = useSelector((state) => state.typeMovie);
  const [dataMovie, setDataMovie] = useState(null);
  const [dataMovieGen, setDataMovieGen] = useState(null);
  // console.log(type, id);
  const [page, setPage] = useState(2);

  useEffect(() => {
    const abortController = new AbortController();
    const getAllMovies = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=all&page=1`
        );
        setDataMovie(res.data.results);
      } catch (err) {
        console.log("getAllMoviesAction error", err);
      }
    };
    getAllMovies();
    return () => {
      abortController.abort();
    };
  }, [type]);
  useEffect(() => {
    const abortController = new AbortController();
    const getListMoviesByGenre = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${id}&page=1`
        );
        setDataMovieGen(res.data.results);
      } catch (err) {
        console.log("getListMoviesByGenre error", err);
      }
    };
    getListMoviesByGenre();
    return () => {
      abortController.abort();
    };
  }, [id]);
  const getListMoviesByGenre = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${id}&page=${page}`
      );
      const data = res.data.results;
      return data;
    } catch (err) {
      console.log("getListMoviesByGenre error", err);
    }
  };

  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=all&page=${page}`
      );
      const data = res.data.results;
      return data;
    } catch (err) {
      console.log("getAllMoviesAction error", err);
    }
  };
  function jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const handleMore = async () => {
    const abortController = new AbortController();
    setPage(page + 1);
    const data = await getAllMovies();
    setDataMovie([...dataMovie, ...data]);
    return () => {
      abortController.abort();
    };
  };
  const handleMoreGen = async () => {
    const abortController = new AbortController();
    setPage(page + 1);
    const data = await getListMoviesByGenre();
    setDataMovieGen([...dataMovieGen, ...data]);
    return () => {
      abortController.abort();
    };
  };
  return (
    <>
      {id ? (
        <Slideshow type={type} bannerInfo={dataMovieGen} />
      ) : (
        <Slideshow type={type} bannerInfo={dataMovie} />
      )}

      <Container maxWidth="1400px">
        <Box
          sx={{
            flexGrow: 1,
            margin: "0 36px",
          }}
        >
          {typeGen && (
            <span style={{ color: "#fff", fontSize: "24px" }}>
              List {jsUcfirst(type + ` ` + typeGen)}
            </span>
          )}
          {type && (
            <span style={{ color: "#fff", fontSize: "24px" }}>
              List {jsUcfirst(type)}
            </span>
          )}
          {id ? (
            <>
              <Grid container spacing={2}>
                {dataMovieGen !== null &&
                  dataMovieGen.length > 0 &&
                  dataMovieGen.map((item, i) => {
                    if (item.poster_path && item.backdrop_path !== null) {
                      let imagePost = `https://image.tmdb.org/t/p/original${item.poster_path}`;
                      let imageDrop = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
                      return (
                        <Grid key={i} item md={2.4}>
                          <Itemcard
                            imgP={imagePost}
                            imgD={imageDrop}
                            data={item}
                            mediaType={type}
                          />
                        </Grid>
                      );
                    }
                  })}
              </Grid>
              <button
                onClick={handleMoreGen}
                style={{
                  backgroundColor: "#1e70a8",
                  color: "#fff",
                  width: "100px",
                  height: "40px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Load More
              </button>
            </>
          ) : (
            <>
              <Grid container spacing={2}>
                {dataMovie !== null &&
                  dataMovie.length > 0 &&
                  dataMovie.map((item, i) => {
                    if (item.poster_path && item.backdrop_path !== null) {
                      let imagePost = `https://image.tmdb.org/t/p/original${item.poster_path}`;
                      let imageDrop = `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
                      return (
                        <Grid key={i} item md={2.4}>
                          <Itemcard
                            imgP={imagePost}
                            imgD={imageDrop}
                            data={item}
                            mediaType={type}
                          />
                        </Grid>
                      );
                    }
                  })}
              </Grid>
              <button
                onClick={handleMore}
                style={{
                  width: "100%",
                  backgroundColor: "#1e70a8",
                  color: "#fff",
                  width: "100px",
                  height: "40px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Load More
              </button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}

export default Listmovie;
