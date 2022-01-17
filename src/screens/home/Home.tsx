import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <h1>Little Geography Quiz</h1>
      <h4>
        <em>Check your </em>
        <strong>knowledge!</strong>
      </h4>
      <br />
      <p>
        This is quiz about Geography, that can be used to repeat all the basics,
        or the advanced knowledge from this topic.
      </p>
      <p>If you are ready, Let's start...</p>
      <br />
      <Link to="/settings" className="btn btn-primary">
        Let's have fun!
      </Link>
    </div>
  );
};

export default Home;
