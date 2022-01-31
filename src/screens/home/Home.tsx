import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardComp from "../../components/card/CardComp";
import { selectDataValue } from "../../redux/dataSlice";

import "./Home.scss";
const Home = () => {
  const [val, setVal] = useState<number[]>([]);
  const data: [] = useSelector(selectDataValue);
  const rand = (): number => Math.floor(Math.random() * 50);
  useEffect(() => {
    setVal([rand(), rand(), rand()]);
  }, []);
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
      <Link to="/settings" className="btn btn-primary">
        Let's have fun!
      </Link>
      <div className="flags-container">
        <CardComp
          name={data[val[0]]?.name?.common}
          flag={data[val[0]]?.flags.svg}
        />
        <CardComp
          name={data[val[1]]?.name?.common}
          flag={data[val[1]]?.flags.svg}
        />
        <CardComp
          name={data[val[2]]?.name?.common}
          flag={data[val[2]]?.flags.svg}
        />
      </div>
    </div>
  );
};

export default Home;
