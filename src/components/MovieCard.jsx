// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const MovieCard = ({ movieProp }) => {

    // destrutturiamo oggetto passato da props
    const { id, title, director, genre, abstract, image, release_year } = movieProp;

    return (
        <div>
            <img src={image} alt={title}/>
            <div>
                <h5>{title}</h5>
                <address><i>{director}</i></address>
                <p>
                    {abstract}
                </p>
                <p>
                    {genre}
                </p>
                <p>
                    {release_year}
                </p>
                <Link to={`movies/${id}`}>
                    See more
                </Link>
            </div>
        </div>
    )
}

export default MovieCard