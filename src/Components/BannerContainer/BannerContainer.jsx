import { useSelector } from 'react-redux';
import './BannerContainer.css'
import VideoBackground from './VideoBackground/VideoBackground';
import VideoTitle from "./VideoTitle/VideoTitle"

const BannerContainer=()=>{
  const movies=useSelector(appStore=>appStore.movies?.nowPlayingMovies);

  //if movies in store is null return from here :: Early Return
  if(!movies) return;
  const mainMovie=movies[0];
  const {original_title,overview,poster_path,id}=mainMovie;

  return(
     <div className='bannerContainer'>
    <VideoBackground movieId={id}/>
    <VideoTitle original_title={original_title} overview={overview}/>
    </div>
  )
}
export default BannerContainer;