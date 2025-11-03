// import di router-dom per link
import { Link } from "react-router-dom"

// creazione componente Header
const MovieCard = () => {
    return (
        <div className="movie-card">
            <img src="https://tse2.mm.bing.net/th/id/OIP.vnJImFIy1GEoBBAjyZ-tfQHaK-?rs=1&pid=ImgDetMain&o=7&rm=3" alt="titolo film" />
            <div>
                <h5 className="card-title">Titolo Film</h5>
                <address><i>Regista</i></address>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quam! Quaerat molestias autem hic neque quia quod asperiores, vel veniam mollitia repellat illo repudiandae praesentium qui deserunt velit adipisci explicabo!
                </p>
                <Link to="movies/1">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default MovieCard