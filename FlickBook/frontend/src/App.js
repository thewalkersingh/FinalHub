import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import movieData from './api/movieData';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { About } from './pages/About';
import Contacts from "./pages/Contacts";
import Home from './pages/Home';

const App = () => {
    const { movies } = useState({ movieData })
    return (
        <Router>
            <Navbar />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/movies" element={ <MovieList /> } />
                    <Route path="/movies/:id" element={ <MovieDetails movies={ movies } /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/contact' element={ <Contacts /> } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;