const Cake = ({ cake }) => {
    return (
        <>
            <li>
                <h3>{cake.name}</h3>
                <p>Ingredients:</p>
                <ol>
                    {cake.ingredients.map((ingredient, index) => {
                        return <li key={index} >{ingredient} </li>
                    }
                    )}
                </ol>
                <p>Cake Rating: {cake.rating}</p>
            </li>
        </>
    );
}

export default Cake;