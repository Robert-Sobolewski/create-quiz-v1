import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import NotFound from "./screens/notfound/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { fetchGameDB, selectDB } from "./redux/gameSlice";
import { Container } from "react-bootstrap";
import Settings from "./screens/settings/Settings";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const db = useSelector(selectDB);

  useEffect(() => {
    dispatch(fetchGameDB);
  }, []);

  return (
    <Container className="pt-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
