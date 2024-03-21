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

    const [filterCakesData, setFilterCakesData] = useState([]);

    const registerRecipe = (recipe) => {
        console.log(recipe);
        setCakes([...cakes, recipe]);
    }

    const filteringCakes = (filterCakesData) => {
        setFilterCakesData([...filterCakesData]);
    }

    const handleClearFilter = () => {
        filteringCakes([]);
    }

    return (
        <>
            {
                filterCakesData.length == 0 ? (
                    <>
                        <SearchForm cakes={cakes} filteringCakes={filteringCakes} />
                        <CakeList cakes={cakes} />
                        <RecipeForm cakes={cakes} registerRecipe={registerRecipe} />
                    </>
                ) : (<>
                        <h3>Filtered Cakes</h3>
                        <button onClick={handleClearFilter}>Clear Filter</button>
                        <CakeList cakes={filterCakesData} />
                        
                    </>
                )
            }
        </>
    );
}

export default CakeContainers;