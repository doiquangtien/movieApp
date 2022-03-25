import { useEffect, useState } from "react";
import Itemcard from "../itemCard/Itemcard";
import axios from "axios";
import Slideshow from "../slideshow/Slideshow";
import { useParams } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
const API_KEY = "9469ca4e1229b1db42ff4124c1655066";
const BASE_URL = "https://api.themoviedb.org/3";
function Listmovie() {
  const { type, id } = useParams();
  const { typeGen } = useSelector((state) => state.typeMovie);
  const [dataMovie, setDataMovie] = useState(null);
  const [dataMovieGen, setDataMovieGen] = useState(null);
  const [page, setPage] = useState(2);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    const getAllMovies = async () => {
      try {
        setLoad(false);

        const res = await axios.get(
          `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=all&page=1`
        );
        setDataMovie(res.data.results);
        setLoad(true);
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
        setLoad(false);

        const res = await axios.get(
          `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${id}&page=1`
        );
        setDataMovieGen(res.data.results);
        setLoad(true);
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
    setLoad(false);

    setPage(page + 1);
    const data = await getAllMovies();
    setDataMovie([...dataMovie, ...data]);
    setLoad(true);

    return () => {
      abortController.abort();
    };
  };
  const handleMoreGen = async () => {
    const abortController = new AbortController();
    setLoad(false);

    setPage(page + 1);
    const data = await getListMoviesByGenre();
    setDataMovieGen([...dataMovieGen, ...data]);
    setLoad(true);

    return () => {
      abortController.abort();
    };
  };
  return (
    <>
      <Slideshow type={type} bannerInfo={dataMovie} />
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
              {load ? (
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
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={handleMoreGen}
                      style={{
                        width: "100px",
                        backgroundColor: "#1e70a8",
                        marginTop: "20px",
                        color: "#fff",
                        height: "40px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      Load More
                    </button>
                  </div>
                </>
              ) : (
                <Loading />
              )}
            </>
          ) : (
            <>
              {load ? (
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
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      onClick={handleMore}
                      style={{
                        width: "100px",
                        backgroundColor: "#1e70a8",
                        marginTop: "20px",
                        color: "#fff",
                        height: "40px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      Load More
                    </button>
                  </div>
                </>
              ) : (
                <Loading />
              )}
            </>
          )}
        </Box>
      </Container>
      )
    </>
  );
}

export default Listmovie;
