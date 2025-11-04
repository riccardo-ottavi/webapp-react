import MovieCard from "../components/MovieCard"
import axios from "axios"

import  { useState, useEffect } from "react"

export default function HomePage() {

    const [movies, setMovies] = useState();

    // prepariamo funzione per la chiamata axios
    const fecthMovies = () => {
        axios.get('http://localhost:3000/movies')
            .then(response => { setMovies(response.data) })
            .catch(error => { console.log(error) })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthMovies, []);

    return (
        <>
            <h1>Bool Movies</h1>
            <h2><i>The nerdest book community</i></h2>
            <div className="row row-cols-3 mt-4">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </>

    )
}