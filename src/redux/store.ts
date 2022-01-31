import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './gameSlice'
import dataReducer from './dataSlice'



export const store = configureStore({
    reducer:{
        game: gameReducer,
        data: dataReducer,
    }
})