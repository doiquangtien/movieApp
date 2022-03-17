import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";


function App() {

  return (
    <div  className="app">
    <BrowserRouter>
      <Router/>
    </BrowserRouter>  

    </div>
  );
}

export default App;
