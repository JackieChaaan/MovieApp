import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MoviePoster = ({ imdb }) => {

  const [poster, setPoster] = useState('')

  const API_KEY = "530c7911";
  
  const getPoster = async () => {
    try {
      const respo = await axios.get(`http://www.omdbapi.com/?i=${imdb}&apikey=${API_KEY}`);
      setPoster(respo.data.Poster);
      
      
    }
    catch (error) {
      console.error('Poster load failed', error);
    }
  }



  useEffect(() => {
    getPoster();
  }, [imdb])

  return <img src={poster} alt="movie-poster" />
}

export default MoviePoster
