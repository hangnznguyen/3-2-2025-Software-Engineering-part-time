import Movie from './Movie.jsx';
import { useState } from 'react';
import AddMovieForm from './src/AddMovieForm.jsx';

function MoviesList(props) {
  const [currentMovies, setCurrentMovies] = useState(props.movies);

  const handleReverseMovies = () => {
    const newMovies = [...currentMovies].reverse();
    setCurrentMovies(newMovies);
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // Note: ID generation could be improved
    setCurrentMovies([...currentMovies, newMovie]);
  };

  const mappedMovies = currentMovies.map((movie) => (
    <Movie
      key={movie.id || movie.title}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  return (
    <>
      <div>
        <ul>
          {mappedMovies}
        </ul>
      </div>
      <div>
        <button onClick={handleReverseMovies}>Reverse List</button>
      </div>
      <div>
        <AddMovieForm onAddMovie={handleAddMovie} />
      </div>
    </>
  );
}

export default MoviesList;