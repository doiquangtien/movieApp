import { Route, Routes } from "react-router-dom";
import Home from "../containers/home/Home";
import Oddmovie from "../containers/oddmovie/Oddmovie";
import Seriesmovie from "../containers/seriesmovie/Seriesmovie";
import Details from "../containers/details/Details";
import Page404 from "../containers/Page404";
function Router() {

  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/oddmovie" element={<Oddmovie />}/>
    <Route path="/seriesmovie" element={<Seriesmovie />}/>
    <Route path="/details" element={<Details />}/>
    <Route path='*' element={<Page404 />}/>
  </Routes>
  )
}

export default Router;
