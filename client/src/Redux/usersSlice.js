import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const loginUser=createAsyncThunk("users/loginUser",async function (oldUser,{rejectWithValue}) {
  try{
        const {data}=await axios.post("http://localhost:8081/loginUser",oldUser)
             return data
  }//msg Errors  are set as priority messages in contorllers anyway
  catch(err){return rejectWithValue(err.response.data.msg? err.response.data.msg :err.response.data.Errors)}
  
})

export const registerUser=createAsyncThunk("users/registerUser",async function (newUser,{rejectWithValue}) {
  try{
    const {data}=await axios.post("http://localhost:8081/postUser",newUser)
    return data
  }
  catch(err){return rejectWithValue(err.response.data.msg? err.response.data.msg :err.response.data.Errors )}
})
export const DeleteUser=createAsyncThunk("users/DeleteUser",async function (userID,{rejectWithValue}) {
  try {
    let reqInstance = axios.create({headers: {token : localStorage.getItem("access_token") }})
    const {data}=await reqInstance.delete("http://localhost:8081/deleteUser:"+userID)
    return data
  } catch (err) {
    return rejectWithValue(err.response.data.msg)
  }
})

const initialState={
 
  loading:true,
  errors:null,
  errorsUserName:null,
  errorsPassword:null,
  errorsEmail:null,
  errorsImage:null,
  deletedUser:{},
  user:JSON.parse(localStorage.getItem('user')),
  token:JSON.parse(localStorage.getItem("token")),
  authorized:Boolean(localStorage.getItem("authorized"))
 }
  
  export const usersSlice = createSlice({
 
  name: 'users',
  initialState,
  reducers: {
    cleanLogin:(state)=>{state.errorsPassword=null;state.errorsUserName=null;state.errorsEmail=null;state.errorsImage=null},
    cleanEmail:(state)=>{state.errorsEmail=null},
    cleanPassword:(state)=>{state.errorsPassword=null},
    cleanName:(state)=>{state.errorsUserName=null},
    cleanImage:(state)=>{state.errorsImage=null},
    logOUT:(state)=>{
      localStorage.clear()
      state.user={}
      state.token=null
      state.authorized=false
    }
  },
  extraReducers:{
  [loginUser.pending]:(state)=>{ state.loading=true},
  [loginUser.fulfilled]:(state,{payload})=>{
  state.loading=false
  state.user=payload.result
  state.token=payload.token
  state.authorized=true
  localStorage.setItem("user",JSON.stringify(payload.result))
  localStorage.setItem("token",JSON.stringify(payload.token)) 
  localStorage.setItem("authorized",true)
  
  },
  [loginUser.rejected]:(state,{payload})=>{
  state.loading=false
  if (typeof(payload)==="string") {
    payload.includes("sign")?state.errorsUserName=payload:state.errorsUserName=null
    payload.includes("Password")?state.errorsPassword=payload:state.errorsPassword=null
  } else {
    payload.map(e=>e.param==="userName"?state.errorsUserName=e:null)
    payload.map(e=>e.param==="Password"?state.errorsPassword=e:null)
  } },
  [registerUser.pending]:(state)=>{ state.loading=true},
  [registerUser.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.user=payload.user
    state.token=payload.token
    state.authorized=true
    localStorage.setItem("user",JSON.stringify(payload.result))
    localStorage.setItem("token",JSON.stringify(payload.token)) 
    localStorage.setItem("authorized",true)
    
    },
    
    [registerUser.rejected]:(state,{payload})=>{
      state.loading=false
      
      if (typeof(payload)==="string") {
        payload.includes("Email")?state.errorsEmail=payload:state.errorsUserName=payload
      } else {
        payload.map(e=>e.param==="Email"?state.errorsEmail=e:null)
        payload.map(e=>e.param==="Password"?state.errorsPassword=e:null)
        payload.map(e=>e.param==="userName"?state.errorsUserName=e:null)
        payload.map(e=>e.param==="Image"?state.errorsImage=e:null)
      } },

       [DeleteUser.pending]:(state)=>{ state.loading=true},
       [DeleteUser.fulfilled]:(state,{payload})=>{
        state.loading=false
        state.deletedUser=payload
        localStorage.clear()
        state.authorized=false
      },
       [DeleteUser.rejected]:(state,{payload})=>{
        state.errors=payload
      }
  }
})

  export const { cleanLogin, cleanPassword,cleanName,cleanEmail,cleanImage,logOUT } = usersSlice.actions
  
  export default usersSlice.reducer