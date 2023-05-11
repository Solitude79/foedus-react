import "./App.css";
import { Home } from "./common/pages/home/organoids/Home";
import { Header } from "./common/pages/header/organoids/Header";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./common/pages/login/organoids/Login";
import { SignUp } from "./common/pages/signup/organoids/SignUp";
import { Footer } from "./common/pages/footer/organoids/Footer";
import { MakeEvent } from "./common/pages/CreateEvent/organoids/MakeEvent";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App__Actual">
        <Routes>
          <Route path="/" element={<Home id={1} />}></Route>
          <Route path="/login" element={<Login id={2}/>}></Route>
          <Route path="/reg" element={<SignUp id={3}/>}></Route>
          <Route path="/makeevent" element={<MakeEvent/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
