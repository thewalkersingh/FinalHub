import React, {useState} from 'react';
import '../styles/BookingForm.css';
import {bookMovie} from '../api/movieService';

const BookingForm = ({movie}) => {
    const [seats, setSeats] = useState(1);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleBooking = async (e) => {
        e.preventDefault();

        if (seats > movie.availableSeats) {
            setError('Not enough seats available.');
            setSuccess(null);
            return;
        }

        const bookingDetails = {
            movieId: movie.id,
            userId: 1, // Assuming logged-in user ID is 1 for simplicity
            noOfSeats: seats,
            date: new Date().toISOString(), // You could make this dynamic if needed
            startTime: movie.startTime,
            location: movie.location,
            price: seats * movie.pricePerSeat, // Use dynamic pricing from movie object
        };

        try {
            await bookMovie(bookingDetails); // Use the imported function to book the movie
            setSuccess(`Booking confirmed! You've booked ${seats} seat(s) for "${movie.movieTitle}".`);
            setError(null);
        } catch (err) {
            setError('Error processing booking.');
            setSuccess(null);
            console.error(err);
        }
    };

    if (!movie) return <p>Loading...</p>;

    return (
        <form onSubmit={handleBooking} className="booking-form">
            <h2>Book </h2>
            <h3>{movie.movieTitle}</h3>
            <div className="form-group">
                <label htmlFor="seats">Seats:</label>
                <input
                    id="seats"
                    type="number"
                    value={seats}
                    min="1"
                    max={movie.availableSeats}
                    onChange={(e) => setSeats(e.target.value)}
                    className="form-input"
                />
                <span className="availability-info">{movie.availableSeats} seats available</span>
            </div>
            <div className="movie-info">
                <p><strong>Location:</strong> {movie.location}</p>
                <p><strong>Start Time:</strong> {movie.startTime}</p>
                <p><strong>Price per Seat:</strong> ₹{movie.pricePerSeat}</p>
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <button type="submit" className="booking-button">Book Now</button>
        </form>
    );
};

export default BookingForm;