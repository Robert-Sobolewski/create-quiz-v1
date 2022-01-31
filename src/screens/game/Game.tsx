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

  useEffect(() => {
    let game = new GameEngine(data && data, questions && questions);
    setGe(game);
  }, []);

  return (
    <div>
      <p>Selected: {questions} questions</p>
      <p>
        Questions from <strong>{GameCategory[qform].toString()}</strong>, to{" "}
        <strong>{GameCategory[aform].toString()}</strong>
      </p>
      <h3 style={{ color: "red" }}>{ge?.demo()}</h3>
      <p>{JSON.stringify(ge?.getRandomQuestions())}</p>

      {/* <p>{JSON.stringify(data)}</p> */}
    </div>
  );
};

export default Game;
