import { useState } from "react";

const SearchForm = ({ cakes, filteringCakes}) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        let filterData = cakes.filter(cake => cake.name.toLowerCase().includes(search.toLowerCase()));
        const data = {
            filterData
        }
        // console.log(data);
        filteringCakes(filterData);
        return;
        
    }

    // const isValidation = () => {
    //     let validation = true;
    //     if(search === ""){
    //         validation = false;
    //     }
    //     return validation;
    // }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="search"
                    placeholder="Search for recipe"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)} />
                <input type="submit" value="Search" />
            </form>
        </>
    );
}

export default SearchForm;