// creazione componente Header
const ReviewCard = ({ reviewProp }) => {

    // destrutturiamo oggetto review
    const { name, vote, text } = reviewProp;

    return (
        <div>
            <div>
                <p>
                    {text}
                </p>
                <strong>Vote: {vote}</strong>
                <address><i>By {name}</i></address>
            </div>
        </div>
    )
}

export default ReviewCard