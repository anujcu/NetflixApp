import { createSlice } from "@reduxjs/toolkit";

const UserSlice=createSlice({
  name:'user',
  initialState:[{
    displayName:'Guest',
    uid:'',
    email:'',
    photoURL:''

  }],
  reducers:{

    addUser:(state,action)=>{
      state=action.payload;
        return state;
    },
    removeUser:(state, action)=>{
      state=[{ 
        displayName:'Guest',
        uid:'',
        email:'',
        photoURL:''}];
        return state;
    }
  }
})
export const {addUser,removeUser}=UserSlice.actions;
export default UserSlice.reducer;