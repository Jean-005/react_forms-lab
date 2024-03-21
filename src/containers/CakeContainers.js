import { useState } from "react";
import CakeList from "../components/CakeList"
import RecipeForm from "../components/RecipeForm"
import SearchForm from "../components/SearchForm"

const CakeContainers = () => {
    const [cakes, setCakes] = useState([]);

    return ( 
        <>
            <CakeList />
            <RecipeForm />
            <SearchForm />
        </> 
    );
}
 
export default CakeContainers;