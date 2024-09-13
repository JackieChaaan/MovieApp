import React from 'react'
import './Genre.scss'

const Genre = ({genre}) => {
    
    const genres = genre.split(',');
    
    
  return (
    <>
    {genres.map((genre,index)=>(
        <p className="genre-item" key={index}>
            {genre}
        </p>
    ))}
    </>
  )
}

export default Genre
