import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
//........trailers are sorted by UpdateDate and limited at 12
export const getTrailers=createAsyncThunk("animes/getTrailers",async function (_,{rejectWithValue}) {
    try {
    const {data}=await axios.get("http://localhost:8081/getTrailers")
    return data
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
//.........trailers are reverse in order and limit at 9
export const getTrailers2=createAsyncThunk("animes/getTrailers2",async function (_,{rejectWithValue}) {
  try {
  const {data}=await axios.get("http://localhost:8081/getTrailers2")
  return data
  } catch (err) {
      return rejectWithValue(err.response.data.msg )
  }
})

export const getEpisode=createAsyncThunk("animes/getEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.get("http://localhost:8081/getEpisode/"+EpInfo.animeName+"/"+EpInfo.season)
  return data
  } catch (err) {
      return rejectWithValue(err.response.data.msg)
  }
})
export const modifyEpisode=createAsyncThunk("animes/modifyEpsiode",async function (EpInfo,{rejectWithValue}) {
  try {console.log(EpInfo)
  const {data}=await axios.put("http://localhost:8081/updateTrailer"+EpInfo.id,EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
export const deleteEpisode=createAsyncThunk("animes/deleteEpisode",async function (EpInfo,{rejectWithValue}) {
  try {console.log(EpInfo)
  const {data}=await axios.put("http://localhost:8081/deleteEpisode"+EpInfo.id,EpInfo.data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
export const addEpisode=createAsyncThunk("animes/addEpisode",async function (EpInfo,{rejectWithValue}) {
  try {console.log(EpInfo)
  const {data}=await axios.put("http://localhost:8081/updateTrailer"+EpInfo.id,EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
const initialState={
 
  loading:true,
  errors:null,
  episodeErreur:null,
  modifiedEpisode:null,
  deletedEpisode:null,
  clickedEpisode:null,
  addedEpisode:null,
  trailers:[],
  trailers2:[]
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
   },
   [getTrailers2.pending]:(state)=>{ state.loading=true},
    [getTrailers2.fulfilled]:(state,{payload})=>{
     state.loading=false
     state.trailers2=payload
   },
    [getTrailers2.rejected]:(state,{payload})=>{
     state.errors=payload
   }
   ,  [getTrailers.rejected]:(state,{payload})=>{
    state.errors=payload
  },
   [getEpisode.pending]:(state)=>{ state.loading=true},
   [getEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.clickedEpisode=payload
  },
   [getEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
  },
  [modifyEpisode.pending]:(state)=>{ state.loading=true},
   [modifyEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.modifiedEpisode=payload
  },
   [modifyEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
  },
  [deleteEpisode.pending]:(state)=>{ state.loading=true},
   [deleteEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.deletedEpisode=payload
  },
   [deleteEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
  },
  [addEpisode.pending]:(state)=>{ state.loading=true},
   [addEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.addedEpisode=payload
  },
   [addEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
  }
  }
})

  
  
  export default animeSlice.reducer