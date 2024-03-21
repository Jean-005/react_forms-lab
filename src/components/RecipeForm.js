import { useState } from "react";

const RecipeForm = ({ cakes, registerRecipe }) => {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(isValidation){
            let ingredientList = []
            ingredientList.push(ingredients);

            const recipe = {
                name:recipeName,
                ingredients:ingredientList,
                rating:rating
            }

            registerRecipe(recipe);
            return;
        }
    }

    const isValidation = () => {
        let validation = true;

        if (recipeName === "" || ingredients === "" || rating === "") {
            alert("Please fill in recipe details");
            validation = false;
        }

        if(cakes.find(cake => cake.name === recipeName)){
            alert("Cake already exists");
            validation = false;
        }

        return validation;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Recipe Name"
                    placeholder="Enter recipe name"
                    value={recipeName}
                    onChange={(event) => setRecipeName(event.target.value)}

                />

                <input
                    type="text"
                    name="ingredients"
                    placeholder="Enter list of ingredients"
                    value={ingredients}
                    onChange={(event) => setIngredients(event.target.value)}

                />


                <input
                    type="number"
                    name="rating"
                    placeholder="Enter rating"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                />

                <input type="submit" value="Submit" />

            </form>
        </>
    );
}

export default RecipeForm;