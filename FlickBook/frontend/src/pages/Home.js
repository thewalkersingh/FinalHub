import {Component} from "react";
import {movies} from '../api/movieData'
import MovieDetails from "../components/MovieDetails";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: movies,
        }
    }
    
    render() {
        const {
            id, imageUrl, movieTitle, rating, duration, language, seatsAvailable, location
        } = this.state.data;
        return (
            <>
                <MovieDetails data={this.state.data}/>
            </>
        )
    }
}