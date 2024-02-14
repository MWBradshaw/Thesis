import React, { useState } from "react";
import MealPlannerHeader from "./MealPlannerHeader/MealPlannerHeader";
import MealList from './MealList/MealList.jsx';
import "./MealPlanner.css";

function MealPlanner() {
    const[mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function handleChange(e) {
        setCalories(e.target.value)
    }

    function fetchData() {
        let url = `https://api.spoonacular.com/mealplanner/generate?apiKey=2b6dea13ff3e42b49afbc4f7d45f64d3&timeFrame=week&targetCalories=${calories}`
        fetch(url).then((response => {
            return response.json()
        })).then((response) => {
            const correctedWeekDays = Object.entries(response.week)
                .map(([day, data]) => ({ day, ...data }))
                .sort((a, b) => {
                const order = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
                return order.indexOf(a.day) - order.indexOf(b.day);
                });
            console.log(correctedWeekDays)
            setMealData(correctedWeekDays)
        }).catch(() => {
            
        })
    }

    return(
        <div>
            <div className="main-mealplanner-header">
                <MealPlannerHeader />
            </div>
            <div className="search-button-body">
                <div className="search-input-body">
                    <input type="number" className="search-input" placeholder="Calories (eg. 2000)" onChange={handleChange}></input>
                </div>
                <button onClick={fetchData}>Get Daily Meal Plan</button>
            </div>
            {mealData && mealData.map((day) => (
                
                <MealList mealData={day} />
            )
            )}
        </div>
    )
}

export default MealPlanner;