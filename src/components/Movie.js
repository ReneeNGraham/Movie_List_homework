import React from 'react';


const Movie = ({name, children}) => {
   return(
       <div className="movie">
           <h3>{children}</h3>
           <p>{name}</p>
       </div>
   )
}

export default Movie;