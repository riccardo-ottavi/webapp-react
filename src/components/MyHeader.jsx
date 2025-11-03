import { Link } from "react-router"

export default function MyHeader() {
    return (
        <header>
            <div className="title">
                <nav>
                    <div>
                        <Link to="/">Bool Movies</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}