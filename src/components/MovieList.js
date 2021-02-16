import React from 'react';
import Movie from "./Movie";

const MovieList = ({movies}) => {
    const movieNodes = movies.map((movie) => {
        return(
            <Movie name={movie.name} key={movie.id}>{movie.text}</Movie>
        )  
    })

  return(

    <div className="movie-list">
        {movieNodes}

    </div>
  )

}

export default MovieList;