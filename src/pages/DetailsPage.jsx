import ReviewCard from "../components/ReviewCard"
import { Link } from "react-router"

export default function DetailsPage(){
    return (
         <>
            <header>
                <h1>Titolo Film</h1>
                <h3><i>By Nome regista</i></h3>
                <p>lorem ipsm dolor sit amet</p>
            </header>
            <section>
                <header>
                    <h4>Our community reviews</h4>
                </header>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>

        </>
    )
}