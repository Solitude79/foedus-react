import "./App.css";
import { Home } from "./common/pages/home/organoids/Home";
import { Header } from "./common/pages/header/organoids/Header";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./common/pages/login/organoids/Login";
import { SignUp } from "./common/pages/signup/organoids/SignUp";
import { Footer } from "./common/pages/footer/organoids/Footer";
import { MakeEvent } from "./common/pages/CreateEvent/organoids/MakeEvent";
import { useStore } from "effector-react";
import { $accessToken, setAccessToken } from "./common/config/accessToken";
import { useEffect } from "react";
import { accessTokenName } from "./common/config/axiosInstance";
import { InUser, setUserValue } from "./common/config/UserHooks";
import { Profile } from "./common/pages/profile/organoids/Profile";
import { Event } from "./common/pages/Event/organoids/Event";
import { EditEvent } from "./common/pages/EditEvent/organoids/EditEvent";

export async function requestUser() {
  try {
    let result = await InUser();
    if (result) {
      setUserValue(result);
    }
  } catch {}
}

export function App() {
  const accessToken = useStore($accessToken);
  useEffect(() => {
    if (localStorage.getItem(accessTokenName)?.length) {
      setAccessToken(localStorage.getItem(accessTokenName) || "");
    } else {
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="App__Actual">
        <Routes>
          {accessToken ? (
            <>
              <Route path="/makeevent" element={<MakeEvent />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/event/:id" element={<Event />}></Route>
              <Route path="/editevent/:id" element={<EditEvent />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="" element={<Home />}></Route>
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/reg" element={<SignUp />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="" element={<Login />} />
            </>
          )}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
