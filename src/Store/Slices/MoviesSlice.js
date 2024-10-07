import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice=createSlice({
  name:'movies',
  initialState:{
    nowPlayingMovies:null,
    popularPlayingMovies:null,
    trailerVideo:null
  },
  reducers:{
    addNowPlayingMovies:(state,action)=>{
      state.nowPlayingMovies=action.payload
    },
    addPopularMovies:(state,action)=>{
      state.popularPlayingMovies=action.payload
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload
    }
  }

})
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies} = MoviesSlice.actions;
export default MoviesSlice.reducer;
