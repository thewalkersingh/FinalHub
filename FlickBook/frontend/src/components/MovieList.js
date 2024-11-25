// MovieList.js
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../styles/MovieList.css'; // Assuming CSS is added for styling

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/movie/all');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            <h1 className="list-title">Available Movies</h1>
            <ul className="movie-items">
                {movies.map(movie => (
                    <li key={movie.id} className="movie-item">
                        <Link to={`/movies/${movie.id}`} className="movie-link">
                            <img
                                src={movie.mediaLinks}
                                alt={movie.movieName}
                                className="movie-image"
                            />
                            <span className="movie-title">{movie.movieName}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;