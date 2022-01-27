import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export enum LoadState {'idle', 'loading','succeeded','failed'}
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

//  export const fetchGameDB = createAsyncThunk(
//      'game/fetchGameDB',
//      async()=>{
//          const resp = await axios.get('https://restcountries.com/v3.1/all')
//          .then((tmp:any)=> tmp.data)
//          .catch((err:any)=>console.error(err))
//          //return resp.data
//      }
//  )
// ---------------------- test --------------------------------
    // this get an array
    // export const fetchGameDB = async()=>{
    //     const info = await axios.get('https://restcountries.com/v2/all')
    //     // .then((response:any)=>{
    //     //     console.log(response.data)
    //     //     return response.data
    //     // } );
    //     console.log(info.data)
    //     return info.data
    // }
    
    export const fetchGameDB =createAsyncThunk(
        'game/fetchGameDB',
        async()=>{
            const info = await axios.get('https://restcountries.com/v2/all')
            return info.data
        }
    )

// ----- end test ----------------------------------
//  export const fetchGameDB = createAsyncThunk(
//      'game/fetchGameDB',
//      async({dispatch, getState}:any)=>{
//          return await axios.get('https://restcountries.com/v3.1/all')
//          .then((res:any)=> {
//            return  res.data
//          }
//             )
//          .catch((err:any) => console.log(err))
//      }
//  )

export const gameSlice = createSlice({
name:"game",
initialState: init,
reducers:{
    setDB: (state:any, action:PayloadAction<any[]>) =>{
        state.db =action.payload
    },
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
// extraReducers:(builder:any)=>{
//     builder
//     .addCase(fetchGameDB.pending,(state:any)=>{
//         state.state= LoadState.loading
//     })
//     .addCase(fetchGameDB.fulfilled,(state:any, action:PayloadAction<any[]>)=>{
//         state.state= LoadState.succeeded
//         state.db= action.payload
//     })
//     .addCase(fetchGameDB.rejected,(state:any)=>{
//         state.state= LoadState.failed
//     })
// }


})

export const {setScore, setDB, setCategory,setNumQuestions} = gameSlice.actions;
export const selectScore = (state:GameState) => state.game.score;
export const selectState = (state:GameState) => state.game.state;
export const selectNumQuestions = (state:GameState) => state.game.numQuestions;
export const selectCategory = (state:GameState) => state.game.category
export const selectDB= (state:GameState) => state.game.db;
export default gameSlice.reducer;
