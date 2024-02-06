import React from 'react';
import Meal from '../Meal/Meal.jsx';
import './MealList.css';

function MealList({ mealData }) {
    const macros = mealData.nutrients;
    
    function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
    }   
    
    mealData.day = capitalizeFirstLetter(mealData.day);

        console.log(mealData);
        return(
        <div>
            <div className="meal-plan-macros-body">
                <h2>{mealData.day} - Macros</h2>
                <ul className="meal-plan-macros">
                    <li>Calories: {macros.calories.toFixed(0)} kcal</li>
                    <li>Carbohydrates: {macros.carbohydrates.toFixed(0)}g</li>
                    <li>Fat: {macros.fat.toFixed(0)}g</li>
                    <li>Protein: {macros.protein.toFixed(0)}g</li>
                </ul>
            </div>

            <div className="meals"></div>
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />
                })}
        </div>
    )
}

export default MealList;