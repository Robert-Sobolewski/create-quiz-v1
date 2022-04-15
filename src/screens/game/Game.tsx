import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameEngine } from "../../components/GameEngine";
import { selectState, selectDataValue } from "../../redux/dataSlice";
import { DataState, GameCategory } from "../../redux/data_types";
import {
  selectNumQuestions,
  selectQCategory,
  selectACategory,
} from "../../redux/gameSlice";

const Game = () => {
  const questions = useSelector(selectNumQuestions);
  const qform = useSelector(selectQCategory);
  const aform = useSelector(selectACategory);
  const status = useSelector(selectState);
  const data = useSelector(selectDataValue);
  const [ge, setGe] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  useEffect(() => {
    let game = new GameEngine(data!, questions!); //(data && data, questions && questions);
    setGe(game);
    console.log("game", game);
  }, []);

  return (
    <div>
      <p>Selected: {questions} questions</p>
      <p>
        Questions from <strong>{GameCategory[qform].toString()}</strong>, to{" "}
        <strong>{GameCategory[aform].toString()}</strong>
      </p>
      <hr />
      <h5>
        Question {1 + currentQuestion} from {questions}
      </h5>
      <img
        src={ge?.rndData[currentQuestion]?.flags?.svg}
        alt={ge?.rndData[currentQuestion]?.name?.common}
        width="300"
        height="230"
      />
      <h5 className={"mt-2 mb-2"}>Pick your answer:</h5>
      <button
        onClick={() => setCurrentQuestion(1 + currentQuestion)}
        disabled={currentQuestion == -1 + questions ? true : false}
        className="btn btn-primary"
      >
        Next Question
      </button>
      <button
        onClick={() => setCurrentQuestion(-1 + currentQuestion)}
        disabled={currentQuestion === 0 ? true : false}
        className="btn btn-primary"
      >
        Previous Question
      </button>
      <br /> <br />
      <hr />
      <h6 style={{ color: "red" }}>
        {JSON.stringify(ge?.rndData[0]?.name?.common)}
      </h6>
      <p>{JSON.stringify(ge?.getRandomQuestions())}</p>
      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
};

export default Game;
