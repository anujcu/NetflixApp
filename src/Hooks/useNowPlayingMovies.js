import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../Services/Services"
import {addNowPlayingMovies} from '../Store/Slices/MoviesSlice'

const useNowPlayingMovies =()=>{
    //Fetch data from TMDB api and update the store 
    const dispatch=useDispatch();
    const getNowPlayingMovies= async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
      const json= await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;