import React, { useState, useEffect} from 'react';
import './Meal.css';

function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=2b6dea13ff3e42b49afbc4f7d45f64d3&includeNutrition=false`).then((response) => {
            return response.json()
        }).then((data) => {
            setImageUrl(data.image)
        })
    }, [meal.id])
    return(
        <div>
            <h2>{meal.title}</h2>
            <img src={imageUrl} alt="recipe" />
            <ul>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a href={meal.sourceUrl}>Go to Recipe</a>
        </div>
    )
}

export default Meal;