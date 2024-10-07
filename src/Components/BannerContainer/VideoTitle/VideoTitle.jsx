import { PLAY_ICON } from '../../../Constants/Constants'
import './VideoTitle.css'
const VideoTitle = ({original_title,overview,poster_path}) => {
  return (
    <div className="bannerTitleContainer">
      <div className='bannerTitleContainerInner'>
      <p>Poster Path: {poster_path}</p>
      <h1>{original_title}</h1>
      <p>{overview}</p>
      <div className='videoTitleActions'>
        <button type='button' className='PlayNowButton'>
          <img src={PLAY_ICON} alt='play' className='playIcon' />
           Play Now</button>
        <button type='button' className='moreInfoButton'>More Info</button>
      </div>
      </div>
      
    </div>
  )
}

export default VideoTitle
