import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
