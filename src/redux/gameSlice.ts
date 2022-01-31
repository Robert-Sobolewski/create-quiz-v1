import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameCategory, GameState, IGameState } from "./data_types";



 const init:IGameState ={
    score: 0,
    numQuestions: 10,
    qCategory: GameCategory.flag,
    aCategory: GameCategory.country,
 }


export const gameSlice = createSlice({
name:"game",
initialState: init,
reducers:{
    // setDB: (state:any, action:PayloadAction<any[]>) =>{
    //     state.db =action.payload
    // },
    setScore: (state:any,action:PayloadAction<number> ) =>{
        state.score = action.payload
    },
    setNumQuestions: (state:any,action:PayloadAction<number>)=>{
        state.numQuestions = action.payload
    },
    setQCategory: (state:any,action:PayloadAction<GameCategory>) =>{
        state.qCategory = action.payload
    },
    setACategory: (state:any,action:PayloadAction<GameCategory>) =>{
        state.aCategory = action.payload
    }
},



})

export const {setScore, setQCategory,setACategory,setNumQuestions} = gameSlice.actions;
export const selectScore = (state:GameState) => state.game.score;
export const selectNumQuestions = (state:GameState) => state.game.numQuestions;
export const selectQCategory = (state:GameState) => state.game.qCategory
export const selectACategory = (state:GameState) => state.game.aCategory
export default gameSlice.reducer;
