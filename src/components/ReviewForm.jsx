// import axios
import axios from "axios";

// import state react
import { useState } from "react"

// creazione componente Header
const ReviewForm = ({ idProp, reloadReviews }) => {

    // settiamo valore iniziale dell'oggetto dei campi form
    const initialValues = {
        name: "Anonymous",
        text: "",
        vote: 1
    }

    // settiamo stato del componente
    const [formData, setFormData] = useState(initialValues);

    // funzione di gestione valori dei campi
    const setFieldValue = e => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    // creiamo la url corretta dell'endpoint richiesta
    const apiUrl = `http://localhost:3000/movies/${idProp}/reviews`;

    // funzione invio dati
    const handleSubmit = e => {
        // preveniamo invio form
        e.preventDefault();
        // chiamata per store review
        axios.post(apiUrl, formData, { headers: { 'Content-Type': 'application/json' } })
            .then(() => {
                // settiamo il form a valori iniziali
                setFormData(initialValues)
                // richiamiamo la funzione di chiamata sul comp padre
                reloadReviews();
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <header>
                <h5>Add your review</h5>
            </header>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div >
                        <label>Review</label>
                        <textarea name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div>
                        <label>Voto</label>
                        <input name="vote" type="number" min="1" max="5" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div>
                        <button type="submit" >Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewForm