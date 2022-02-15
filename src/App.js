import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
//import { useEffect } from "react";
// import axios from "axios";

//mes 5 pages //
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

//mes 2 composants//
import Header from "./components/Header";
import Footer from "./components/Footer";

import Cookies from "js-cookie";

import Pcookies from "./pages/Pcookies";
import Confid from "./pages/Confid";
import Conditut from "./pages/Conditut";
import Termcond from "./pages/Termcond";
import Conditv from "./pages/Conditv";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Publish from "./pages/Publish";

library.add(faMagnifyingGlass);

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 10 });
    } else {
      Cookies.remove("userToken");
    }

    setToken(token);
  };

  return (
    <Router>
      <Header token={token} setUser={setUser}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offers />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/confid" element={<Confid />} />
        <Route path="/pcookies" element={<Pcookies />} />
        <Route path="/termcond" element={<Termcond />} />
        <Route path="/conditv" element={<Conditv />} />
        <Route path="/conditut" element={<Conditut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
