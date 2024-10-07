import { TMDB_IMG_URL } from '../../../../Constants/Constants';
import './MovieCard.css'

const MovieCard = ({posterCard}) => {
  return (
    <div className='movieItemCard'>
      { posterCard &&
      <div>
        <img src={TMDB_IMG_URL + posterCard} alt='img' />
      </div>
      }
      </div>
    
  )
}

export default MovieCard
