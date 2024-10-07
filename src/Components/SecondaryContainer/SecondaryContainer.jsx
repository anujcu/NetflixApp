import { useSelector } from 'react-redux';
import MovieList from './MovieList/MovieList';
import './SecondaryContainer.css'
const SecondaryContainer=()=>{

const movies=useSelector(appStore=>appStore.movies.nowPlayingMovies)
const popularMovies=useSelector(appStore=>appStore.movies.popularPlayingMovies)
console.log('Popular Movies',popularMovies)

  return(
    <div>
      
      {
        movies &&
        <>
            <MovieList title="Now Playing" movies={movies} />
            <MovieList title="Popular Movies" movies={popularMovies} />
            <MovieList title="Up Coming" movies={movies} />
            <MovieList title="Action Movies" movies={movies} />
            <MovieList title="Horror Movies" movies={movies} />
         </>
      }
      
    </div>
  )
}
export default SecondaryContainer;