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
        <div className="meal-container">
            <div className="meal-info-container">
                <div className="meal-title-container">
                    <h3>{meal.title}</h3>
                </div>
                <div className="meal-image-container" >
                    <img className="meal-image" src={imageUrl} alt="recipe" />
                </div>
                <ul className="meal-container-list" >
                    <li>Preparation time: {meal.readyInMinutes} minutes</li>
                    <li>Number of servings: {meal.servings}</li>
                </ul>
            </div>

            <div className="meal-plan-link-container">
                <a className="meal-plan-item-link" href={meal.sourceUrl} target="_blank">Go to Recipe</a> 
            </div>
        </div>
    )
}

export default Meal;