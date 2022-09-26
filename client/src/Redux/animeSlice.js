import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getTrailers=createAsyncThunk("animes/getTrailers",async function (_,{rejectWithValue}) {
    try {
    const {data}=await axios.get("http://localhost:8081/getTrailers")
    return data
    } catch (err) {
        return rejectWithValue(err.response.data.msg? err.response.data.msg :err.response.data.Errors)
    }
})
const initialState={
 
  loading:true,
  errors:null,
  trailers:[],
 }
  
  export const animeSlice = createSlice({
 
  name: 'animes',
  initialState,
  reducers: {
    
  },
  extraReducers:{
    [getTrailers.pending]:(state)=>{ state.loading=true},
    [getTrailers.fulfilled]:(state,{payload})=>{
     state.loading=false
     state.trailers=payload
   },
    [getTrailers.rejected]:(state,{payload})=>{
     state.errors=payload
   }
  }
})

  export const {  } = animeSlice.actions
  
  export default animeSlice.reducer