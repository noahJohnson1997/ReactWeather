//app
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav/MainNav";

//Pages
import Home from "./pages/Home/Home";
import LocalWeather from "./pages/LocalWeather/LocalWeather";
import SearchWeather from "./pages/SearchWeather/SearchWeather";
import SignupPage from "./pages/SignupPage/SignupPage";

export default function App() {
  return (
    <Router>
      <div className="App-Container">
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/local" element={<LocalWeather />} />
          <Route path="/search" element={<SearchWeather />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}
