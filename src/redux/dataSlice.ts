import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { DataState, IRootState, IState } from "./data_types";



const init:IState ={
    state:DataState.idle,
    value:[]
}
export const fetchData:any = createAsyncThunk(
    'data/fetchData',
    async() =>{
        return await axios.get('https://restcountries.com/v3.1/all')
        .then((response:any) => response.data)
        .catch((error:any) => alert(error))
    }
)
const dataSlice = createSlice({
    name:'data',
    initialState: init,
    reducers: {},
    extraReducers: (builder:any)=>{
        builder.addCase(fetchData.pending,(state:any)=>{
            state.state=DataState.pending
        }),
        builder.addCase(fetchData.rejected,(state:any)=>{
            state.state=DataState.rejected
        }),
        builder.addCase(fetchData.fulfilled,(state:any, action:PayloadAction)=>{
            state.state = DataState.fulfilled
            state.value=action.payload
        })
    }

});


export default dataSlice.reducer
export const selectState = (state:IRootState) => state.data.state
export const selectDataValue = (state:IRootState) => state.data.value

