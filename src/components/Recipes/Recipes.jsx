import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import SearchBar from "../SearchBar/SearchBar";
import RecipesHeader from "./RecipesHeader/RecipesHeader";
import "./Recipes.css";

function Recipes() {
    return(
        <div>
            <div className="main-recipes-header">
                <RecipesHeader />
            </div>
            <div className="search-bar-container">
                <SearchBar />
            </div>
        </div>
    )
}

export default Recipes;