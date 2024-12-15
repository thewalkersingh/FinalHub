import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { About } from './pages/About';
// import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={ <MovieList /> } />
                    <Route path="/movies" element={ <MovieList /> } />
                    <Route path="/movies/:id" element={ <MovieDetails /> } />
                    <Route path='/About.js' element={ <About /> } />
                    {/* Add more routes as needed */ }
                </Routes>
            </div>
        </Router>
    );
};

export default App;