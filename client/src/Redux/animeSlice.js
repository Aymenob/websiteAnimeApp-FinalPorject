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
export const modifyEpisode=createAsyncThunk("animes/modifyEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("http://localhost:8081/updateTrailer"+EpInfo.id,EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
export const deleteEpisode=createAsyncThunk("animes/deleteEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("http://localhost:8081/deleteEpisode"+EpInfo.id,EpInfo.data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
export const addEpisode=createAsyncThunk("animes/addEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("http://localhost:8081/updateTrailer"+EpInfo.id,EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
export const addTrailer=createAsyncThunk("animes/addTrailer",async function (TRInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.post("http://localhost:8081/postTrailer",TRInfo)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
export const deleteTrailer=createAsyncThunk("animes/deleteTrailer",async function (TRinfo,{rejectWithValue}) {
  try {
  const {data}=await axios.delete("http://localhost:8081/deleteTrailer"+TRinfo)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
export const modifyTrailer=createAsyncThunk("animes/modifyEpsiode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("http://localhost:8081/updateTrailer"+EpInfo.id,EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response?.data?.msg)
  }
})
const initialState={
 
  loading:true,
  errors:null,
  trailerErreurs:null,
  episodeErreur:null,
  modifiedEpisode:null,
  deletedEpisode:null,
  clickedEpisode:null,
  addedEpisode:null,
  addedTrailer:null,
  deleteTrailer:null,
  modifiedTrailer:null,
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
     state.loading=false
     
   },
   [getTrailers2.pending]:(state)=>{ state.loading=true},
    [getTrailers2.fulfilled]:(state,{payload})=>{
     state.loading=false
     state.trailers2=payload
   },
    [getTrailers2.rejected]:(state,{payload})=>{
     state.errors=payload
     state.loading=false
   }
   ,  [getTrailers.rejected]:(state,{payload})=>{
    state.errors=payload
    state.loading=false
  },
   [getEpisode.pending]:(state)=>{ state.loading=true},
   [getEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.clickedEpisode=payload
  },
   [getEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
    state.loading=false
  },
  [modifyEpisode.pending]:(state)=>{ state.loading=true},
   [modifyEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.modifiedEpisode=payload
  },
   [modifyEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
    state.loading=false
  },
  [deleteEpisode.pending]:(state)=>{ state.loading=true},
   [deleteEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.deletedEpisode=payload
  },
   [deleteEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
    state.loading=false
  },
  [addEpisode.pending]:(state)=>{ state.loading=true},
   [addEpisode.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.addedEpisode=payload
  },
   [addEpisode.rejected]:(state,{payload})=>{
    state.episodeErreur=payload
    state.loading=false
  },
  [addTrailer.pending]:(state)=>{ state.loading=true},
   [addTrailer.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.addedTrailer=payload
  },
   [addTrailer.rejected]:(state,{payload})=>{
    state.loading=false
    state.trailerErreurs=payload
  },
  [deleteTrailer.pending]:(state)=>{ state.loading=true},
   [deleteTrailer.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.deleteTrailer=payload
  },
   [deleteTrailer.rejected]:(state,{payload})=>{
    state.loading=false
    state.trailerErreurs=payload
  },
  [modifyTrailer.pending]:(state)=>{ state.loading=true},
   [modifyTrailer.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.modifiedTrailer=payload
  },
   [modifyTrailer.rejected]:(state,{payload})=>{
    state.loading=false
    state.trailerErreurs=payload
  }
  }
})

  
  
  export default animeSlice.reducer