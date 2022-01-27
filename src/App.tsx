import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import NotFound from "./screens/notfound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameDB, selectDB, setDB } from "./redux/gameSlice";
import { Container } from "react-bootstrap";
import Settings from "./screens/settings/Settings";
import Game from "./screens/game/Game";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const info = await axios.get("https://restcountries.com/v2/all");
    dispatch(setDB(info.data));
    return info.data;
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="pt-4">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/settings" element={<Settings />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;
