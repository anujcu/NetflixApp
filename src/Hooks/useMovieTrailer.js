
import {API_OPTIONS} from '../Services/Services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../Store/Slices/MoviesSlice'
const useMovieTrailer=(movieId)=>{

  const dispatch=useDispatch();
    
    const movieTrailer = async ()=>{
      const movieData= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
      const movieDataJson= await movieData.json();
      //finding trailer using filter 
      const filterData=movieDataJson.results.filter(video=>video.type=="Trailer");
      if(!filterData) return;
      const trailer=filterData.lenght? filterData[0]: movieDataJson.results[0] ;
      dispatch(addTrailerVideo(trailer));
  
    }
  useEffect(()=>{
    movieTrailer();
  },[])
}
export default useMovieTrailer;