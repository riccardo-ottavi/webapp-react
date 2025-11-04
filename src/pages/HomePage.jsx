import MovieCard from "../components/MovieCard"
import axios from "axios"


import  { useState, useEffect } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    // prepariamo funzione per la chiamata axios
    const fetchMovies = () => {
        axios.get('http://localhost:3000/movies')
            .then(response => { setMovies(response.data) })
            .catch(error => { console.log(error) })
    }

    // funzione di generazione istanze libri
    const renderMovies = () => {
        return movies.map(movie => {
            return (
                <div key={movie.id}>
                    <MovieCard movieProp={movie} />
                </div>
            )
        })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fetchMovies, []);

     return (
        <>
            <h1>Bool Movies</h1>
            <h2><i>The nerdest movie community</i></h2>
            <div>
                {renderMovies()}
            </div>
        </>

    )
}