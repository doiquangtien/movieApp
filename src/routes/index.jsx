import { Route, Routes } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Home from "../containers/home/Home";
import MovieList from "../containers/movielist/MovieList";
import Details from "../containers/details/Details";
import Page404 from "../containers/Page404";
import Watch from "../containers/watch/Watch";
import WatchTv from "../containers/watch/WatchTv";
import Search from "../containers/search/Search";

function Router() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:type" element={<MovieList />}>
            <Route path="/:type/:id" element={<MovieList />} />
          </Route>
          <Route path="/details">
            <Route
              path="/details/:mediatype/:id_details"
              element={<Details />}
            />
          </Route>
          <Route path="/watch">
            <Route path="/watch/movie/:id_details" element={<Watch />} />
            <Route
              path="/watch/tv/:id_details/season/:id_season/esp/:id_esp"
              element={<WatchTv />}
            />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
