import React, { useEffect } from "react";
import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import NotFound from "./screens/notfound/NotFound";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import Settings from "./screens/settings/Settings";
import Game from "./screens/game/Game";
import { fetchData } from "./redux/dataSlice";
import Demo from "./screens/Demo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Container className="pt-4">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Container>
  );
}

export default App;
