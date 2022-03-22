import { Route, Routes } from "react-router-dom";
import Home from "../containers/home/Home";
import MovieList from "../containers/movielist/MovieList";
import Details from "../containers/details/Details";
import Page404 from "../containers/Page404";
import Watch from "../containers/watch/Watch";
function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/:type" element={<MovieList />}>
          <Route path="/:type/:id" element={<MovieList />} />
        </Route>
        <Route path="/details">
          <Route path="/details/:mediatype/:id_details" element={<Details />} />
        </Route>
        <Route path="/watch">
          <Route path="/watch/:mediatype/:id_watch" element={<Watch />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default Router;
