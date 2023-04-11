import "./App.css";
import { Home } from "./common/pages/home/organoids/Home";
import "./index.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
