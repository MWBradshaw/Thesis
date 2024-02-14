import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCreationHeader from '../ProfileCreationHeader/ProfileCreationHeader';
import "./CreationPage3.css";

function CreationPage3({ formData, setFormData }) {
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
        console.log(formData)
      };

    return(
        <div className="container">
            <ProfileCreationHeader title="Add New Profile - Dietary Information" />

            <div className="creation-profile-container3">
                <div className="diet-select-container">
                    <label for="diet-pref">Do you follow any specific dietary preferences or restrictions?</label>
                    <select name="diet-pref" value={formData.dietPref || ''} onChange={handleChange} className="diet-pref-select">
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegen">Vegen</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="paleo">Paleo</option>
                        <option value="low-fat">Low-fat</option>
                        <option value="low-carb">Low-carb</option>
                        <option value="mediterranean">Mediterranean</option>
                    </select>
                </div>

                <div className="diet-select-container">
                    <label for="food-allergens">Do you have any food allergies or intolerances? If yes, please specify.</label>
                    <select name="food-allergens" value={formData.foodAllergens || ''} onChange={handleChange} className="diet-pref-select">
                        <option value="dairy">Milk (Dairy)</option>
                        <option value="eggs">Eggs</option>
                        <option value="peanuts">Peanuts</option>
                        <option value="tree-nuts">Tree Nuts (e.g., almonds, walnuts, cashews)</option>
                        <option value="soy">Soy</option>
                        <option value="wheat">Wheat</option>
                        <option value="fish">Fish</option>
                        <option value="shellfish">Shellfish</option>
                        <option value="sesame-seeds">Sesame Seeds</option>
                    </select>
                </div>

                <div className="diet-select-container">
                    <label for="meal-pref">Do you have any preferred cooking methods (e.g., grilling, baking, steaming) for preparing meals?</label>
                    <select name="meal-pref" value={formData.mealPref || ''} onChange={handleChange} className="diet-pref-select">
                        <option value="grilling">Grilling</option>
                        <option value="baking">Baking</option>
                        <option value="steaming">Steaming</option>
                        <option value="boiling">Boiling</option>
                        <option value="sauteing">Sauteing</option>
                        <option value="poaching">Poaching</option>
                        <option value="frying">Frying</option>
                    </select>
                </div>
            </div>

            <div className="profile-navigation-body">
                <Link className="navigation-profile-page-button" to="/profiles/page2">
                    <p>Go Back</p>
                </Link>

                <Link className="navigation-profile-page-button" to="/profiles/page4">
                    <p>Next</p>
                </Link>
            </div>
        </div>
    )
}

export default CreationPage3;
