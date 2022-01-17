import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export enum LoadState {'idle', 'loading','failed'}
interface IGameState{
    score: number,
    numQuestions: number,
    category: string,
    db:any[],
    state:LoadState,
}
export interface GameState{
    game:{
        score:number,
        numQuestions: number,
        category: string
        db:any[],
        state:LoadState,
    }
}
 const init:IGameState ={
    score: 0,
    numQuestions: 20,
    category: "",
    db:[],
    state:LoadState.idle
 }

 export const fetchGameDB = createAsyncThunk(
     'game/fetchGameDB',
     async({dispatch, getState}:any)=>{
         return await axios.get('https://restcountries.com/v3.1/all')
         .then((res:any)=> res.data)
         .catch((err:any) => console.log(err))
     }
 )

export const gameSlice = createSlice({
name:"game",
initialState: init,
reducers:{
    setScore: (state:any,action:PayloadAction<number> ) =>{
        state.score = action.payload
    },
    setNumQuestions: (state:any,action:PayloadAction<number>)=>{
        state.numQuestions = action.payload
    },
    setCategory: (state:any,action:PayloadAction<string>) =>{
        state.category = action.payload
    }
},
extraReducers:(builder:any)=>{
    builder
    .addCase(fetchGameDB.pending,(state:any)=>{
        state.state= LoadState.loading
    })
    .addCase(fetchGameDB.fulfilled,(state:any, action:PayloadAction<any[]>)=>{
        state.state= LoadState.idle
        state.db= action.payload
    })
    .addCase(fetchGameDB.rejected,(state:any)=>{
        state.state= LoadState.failed
    })
}


})

export const {setScore, setCategory,setNumQuestions} = gameSlice.actions;
export const selectScore = (state:GameState) => state.game.score;
export const selectNumQuestions = (state:GameState) => state.game.numQuestions;
export const selectCategory = (state:GameState) => state.game.category
export const selectDB= (state:GameState) => state.game.db;
export default gameSlice.reducer;
