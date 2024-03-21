import { useState } from "react";
import CakeList from "../components/CakeList"
import RecipeForm from "../components/RecipeForm"
import SearchForm from "../components/SearchForm"

const CakeContainers = () => {
    const [cakes, setCakes] = useState([
        {
            name: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5
        },
        {
            name: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 3
        },
        {
            name: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4
        },
        {
            name: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5
        }
      ]);
    
    const registerRecipe = (recipe) => {
        console.log(recipe);
        setCakes([...cakes,recipe]);
    }

    return ( 
        <>
            <CakeList cakes={cakes} />
            <RecipeForm  cakes={cakes} registerRecipe={registerRecipe}/>
            <SearchForm />
        </> 
    );
}
 
export default CakeContainers;