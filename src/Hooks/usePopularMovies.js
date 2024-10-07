import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { API_OPTIONS } from "../Services/Services"
import {addPopularMovies} from '../Store/Slices/MoviesSlice'

const usePopularMovies =()=>{
    //Fetch data from TMDB api and update the store 
    const dispatch=useDispatch();
    const getPopularMoviesMovies= async()=>{
      const data= await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
      const json= await data.json();
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect(()=>{
      getPopularMoviesMovies();
    },[])
}
export default usePopularMovies;