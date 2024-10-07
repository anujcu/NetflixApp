
import { useSelector } from 'react-redux';
import './VideoBackground.css'
import useMovieTrailer from '../../../Hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const trailerVideo=useSelector(appStore=>appStore.movies?.trailerVideo);

  return (
    <div className='videoBannerWrapper'>
   <iframe  className='videoBannerPlayer'
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+ "?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >
        </iframe>
    </div>
     
  )
}

export default VideoBackground
