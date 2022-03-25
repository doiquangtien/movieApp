import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/callApi";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import { getInputSearch } from "../../redux/typeSlice";
import Bigcard from "../bigCard/Bigcard";
const useQuery = () => new URLSearchParams(useLocation().search);
function SearchMovie() {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.infoMovie);
  const key = useQuery().get("keywords");
  useEffect(() => {
    const loadSearch = async () => {
      await getSearch(dispatch, key);
      setLoad(true);
    };
    loadSearch();
  }, [key, dispatch]);
  return (
    <>
      {state.searchMovie && state.searchMovie.length > 0 ? (
        <Container
          maxWidth="1400px"
          sx={{
            marginTop: "80px",
            transition: " all 0.3 linear",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              margin: "0 36px",
            }}
          >
            {load ? (
              <Grid container spacing={2}>
                {state.searchMovie.map((data, i) => {
                  if (data.media_type !== "person")
                    return (
                      <Grid
                        key={i}
                        item
                        md={2.4}
                        onClick={() => {
                          dispatch(getInputSearch(""));

                          navigate(
                            `/details/` + data.media_type + `/` + data.id
                          );
                        }}
                      >
                        <Bigcard data={data} />
                      </Grid>
                    );
                })}
              </Grid>
            ) : (
              <Loading />
            )}
          </Box>
        </Container>
      ) : (
        <div>
          <Container
            maxWidth="1400px"
            sx={{
              marginTop: "80px",
              transition: " all 0.3 linear",
              height: "100vh",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                margin: "0 36px",
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "700",
                  marginTop: "50px",
                }}
              >
                Your search "{key}" did not match any results
              </h1>
            </Box>
          </Container>
        </div>
      )}
    </>
  );
}

export default SearchMovie;
