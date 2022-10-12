import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"
//........trailers are sorted by UpdateDate and limited at 12
export const getTrailers=createAsyncThunk("animes/getTrailers",async function (_,{rejectWithValue}) {
    try {
    const {data}=await axios.get("/getTrailers")
    return data
    } catch (err) {
        return rejectWithValue(err.response.data.msg)
    }
})
//.........trailers are reverse in order and limit at 9
export const getTrailers2=createAsyncThunk("animes/getTrailers2",async function (_,{rejectWithValue}) {
  try {
  const {data}=await axios.get("/getTrailers2")
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg )
  }
})

export const getEpisode=createAsyncThunk("animes/getEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.get("/getEpisode/"+EpInfo.animeName+"/"+EpInfo.season)
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const modifyEpisode=createAsyncThunk("animes/modifyEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("/updateTrailer"+EpInfo.id+"/"+EpInfo.index,EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const deleteEpisode=createAsyncThunk("animes/deleteEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("/deleteEpisode"+EpInfo.id,EpInfo.data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const addEpisode=createAsyncThunk("animes/addEpisode",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("/updateTrailer"+EpInfo.id+"/"+EpInfo.index,EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const addTrailer=createAsyncThunk("animes/addTrailer",async function (TRInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.post("/postTrailer",TRInfo)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const deleteTrailer=createAsyncThunk("animes/deleteTrailer",async function (TRinfo,{rejectWithValue}) {
  try {
  const {data}=await axios.delete("/deleteTrailer"+TRinfo)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const modifyTrailer=createAsyncThunk("animes/modifyTrailer",async function (EpInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("/updateTrailer"+EpInfo.id+"/null",EpInfo.Data)//send id ana data in the same object  
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const searchTrailer=createAsyncThunk("animes/searchTrailer",async function(TRInfo,{rejectWithValue}){
    try {
      const {data}=await axios.get("/searchTrailer/"+TRInfo.animeName+"/"+TRInfo.genre)
      return data
    } catch (err) { return rejectWithValue(err?.response.data.msg)}
})

//........Random trailer
export const random=createAsyncThunk("animes/findTrailer",async function (_,{rejectWithValue}) {
  try {
  const {data}=await axios.get("/findTrailer")
  return data
  } catch (err) {
      return rejectWithValue(err.response.data.msg)
  }
})
export const addFavorite=createAsyncThunk("animes/addFavorite",async function (TRInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.put("/addFavorite/"+TRInfo.userId+"/"+TRInfo.trailerId)//
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const deleteFavorite=createAsyncThunk("animes/deleteFavorite",async function (TRInfo,{rejectWithValue}) {
  try {
  const {data}=await axios.delete("/deleteFavorite/"+TRInfo.userId+"/"+TRInfo.trailerId)//
  return data
  } catch (err) {
      return rejectWithValue(err?.response.data.msg)
  }
})
export const getFavoriteTrailers=createAsyncThunk("animes/getFavoriteTrailers",async function(FavInfo,{rejectWithValue}){
  try {
    const {data}=await axios.put("/getFavoriteTrailers",FavInfo)
    return data
  } catch (err) {
    return rejectWithValue(err?.response.data.msg)
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
  trailers2:[],
  searchedTrailers:[],
  random:[],
  favorites:[],
  
 }
  
  export const animeSlice = createSlice({
 
  name: 'animes',
  initialState,
  reducers: {
    cleanTrailerErreurs:(state)=>{state.trailerErreurs=null},
    cleanTrailers:(state)=>{state.trailers=[]},
    cleanTrailers2:(state)=>{state.trailers2=[]}
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
  },
  [searchTrailer.pending]:(state)=>{ state.loading=true},
    [searchTrailer.fulfilled]:(state,{payload})=>{
     state.loading=false
     state.searchedTrailers=payload
   },
    [searchTrailer.rejected]:(state,{payload})=>{
     state.errors=payload
     state.loading=false
     
   },
   [random.pending]:(state)=>{ state.loading=true},
    [random.fulfilled]:(state,{payload})=>{
     state.loading=false
     state.random=payload
   },
    [random.rejected]:(state,{payload})=>{
     state.errors=payload
     state.loading=false
     
   },
   [addFavorite.pending]:(state)=>{ state.loading=true},
   [addFavorite.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.favorites=payload
    localStorage.setItem("user",JSON.stringify(payload))
  },
   [addFavorite.rejected]:(state,{payload})=>{
    state.loading=false
    state.errors=payload
  },
  [deleteFavorite.pending]:(state)=>{ state.loading=true},
  [deleteFavorite.fulfilled]:(state,{payload})=>{
   state.loading=false
   state.favorites=payload.favorites
   localStorage.setItem("user",JSON.stringify(payload))
  
  
 },
  [deleteFavorite.rejected]:(state,{payload})=>{
   state.loading=false
   state.errors=payload
 }
  ,
  [getFavoriteTrailers.pending]:(state)=>{ state.loading=true},
  [getFavoriteTrailers.fulfilled]:(state,{payload})=>{
   state.loading=false
   state.favorites=payload
   
 },
  [getFavoriteTrailers.rejected]:(state,{payload})=>{
   state.loading=false
   state.errors=payload
 }
  }
})

  export const {cleanTrailerErreurs,cleanTrailers,cleanTrailers2}=animeSlice.actions
  
  export default animeSlice.reducer