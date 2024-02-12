import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import "./RecipePage.css";

function RecipePage() {
    const [favourited, setFavourited] = useState(false);
    const location = useLocation();
    const recipe = location.state;

    const ingredients = [];
    
    for(let ingredient in recipe.Ingredients) {
        ingredients.push(recipe.Ingredients[ingredient]);
    }

    const instructions = recipe.Instructions.split(". ");

    function handleClick() {
        setFavourited(!favourited);
        if(favourited) {
            localStorage.setItem(recipe.Title, recipe)
        }
        else {
            localStorage.removeItem(recipe.Title)
        }
    }

    return (
        <div className="recipe-page">
            <div id="recipe-image-overlay-container">
                <h2>{recipe.Title}</h2>
                <img id="recipe-image" src={recipe.Image} />
            </div>

            <div className="favourite-button" onClick={() => handleClick()}>
                <p>Favourite</p>
                {!favourited && <FaRegHeart />}
                {favourited && <FaHeart />}
            </div>


            <div class="info-body">
                <div className="recipe-ingredients-body">
                    <h2 className="info-header">Ingredients</h2>
                    <ul>
                        {ingredients.map((ingredient) => {
                            return <li>{ingredient}</li>
                        })}
                    </ul>
                </div>

                <div className="recipe-instructions-body">
                    <h2 className="info-header">Recipe Directions</h2>
                    {instructions.map((step, idx) => {
                        return<p>{idx+1}. {step}</p>
                    })}
                </div>
            </div>
        </div>
    );
}

export default RecipePage;