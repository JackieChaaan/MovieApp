import React, { useEffect, useState } from 'react'
import AxiosInstance from './AxiosInstance';

export const MovieContext = React.createContext();

export const TrendingMovieList = ({ children }) => {

    const [movies, setMovies] = useState([]);

    const getMovie = async () => {
        try {
            const response = await AxiosInstance.get('movies/trending');
            setMovies(response.data)
            
            
        } catch (error) {
            console.error("Failed to load0", error);

        }

    };



    useEffect(() => {
        getMovie();

    }, []);

    return (
        <MovieContext.Provider value={movies}>
            {children}
        </MovieContext.Provider>
    )
};


