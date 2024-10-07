import MovieCard from './MovieCard/MovieCard';
import './MovieList.css'

const MovieList = ({title,movies}) => {
  const moviesList=movies;
  return (
    <div className='movieListWrapper'>
      <h1 className='movieListTitle'>{title}</h1>
      <div className='movieListCardWrapper'>
      {
        moviesList?.map((item)=><MovieCard key={item.id} posterCard={item.poster_path}></MovieCard>)
      }
      </div>

    </div>
  )
}

export default MovieList
