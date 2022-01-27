import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGameDB,
  LoadState,
  selectDB,
  selectState,
  setDB,
} from "../../redux/gameSlice";

const Game = () => {
  const data = useSelector(selectDB);
  const status = useSelector(selectState);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Game;
