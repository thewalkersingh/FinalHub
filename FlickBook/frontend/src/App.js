import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
// import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<MovieList/>}/>
                    <Route path="/movies" element={<MovieList/>}/>
                    <Route path="/movies/:id" element={<MovieDetails/>}/>
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;