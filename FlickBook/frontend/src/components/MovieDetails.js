// MovieDetails.js
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import BookingForm from './BookingForm';
import '../styles/MovieDetails.css'; // Assuming CSS is added for styling

const MovieDetails = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/movie/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details', error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <h1 className="movie-title">{movie.movieTitle}</h1>
            <img
                src={movie.imageUrl}
                alt={movie.movieTitle}
                className="movie-image"
                style={{width: '200px'}}
            />
            <div className="movie-info">
                <p><strong>Rating:</strong> {movie.movieRating}/10</p>
                <p><strong>Duration:</strong> {movie.movieDuration} mins</p>
                <p><strong>Language:</strong> {movie.movieLanguage}</p>
                <p><strong>Seats Available:</strong> {movie.availableSeats}</p>
                <p><strong>Location:</strong> {movie.location}</p>
            </div>
            <BookingForm movie={movie}/>
        </div>
    );
};

export default MovieDetails;