// import axios
import axios from "axios"

// import di router-dom per link
import { Link, useParams, useNavigate } from "react-router-dom"

// import state e effetc
import { useState, useEffect } from "react"

// import comp singola review
import ReviewCard from "../components/ReviewCard"

// creazione componente Header
const DetailsPage = () => {

    // creiamo istanza di Navigate
    const redirect = useNavigate();

    // prepariamo var di stato libro
    const [movie, setMovie] = useState();

    // recuperiamo il parametro dinamico
    const { id } = useParams();

    // prepariamo funzione per la chiamata axios
    const fecthMovie = () => {
        axios.get('http://localhost:3000/movies/' + id)
            .then(response => { setMovie(response.data) })
            .catch(error => {
                console.log(error)
               
            })
    }

    // faccio partire la chiamata a primo montaggio comp
    useEffect(fecthMovie, []);

    // funzione di generazione istanze reviews
    const renderReviews = () => {
        return movie?.reviews.map(review => {
            return (
                <ReviewCard reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <>
            <header>
                <div>
                    <img src={movie?.image} alt={movie?.title} />
                </div>
                <h1>{movie?.title}</h1>
                <h3><i>By {movie?.author}</i></h3>
                <p>{movie?.abstract}</p>
            </header>
            <section>
                <header>
                    <h4>Our community reviews</h4>
                    <h5>media voto: {movie?.average_vote}</h5>
                </header>
                {renderReviews()}
            </section>
            <footer >
                <Link to="/">Back to home</Link>
            </footer>

        </>

    )
}

export default DetailsPage