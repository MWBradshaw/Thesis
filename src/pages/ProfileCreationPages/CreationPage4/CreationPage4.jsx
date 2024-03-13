import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProfileContext } from "../../../App.jsx"
import ProfileCreationHeader from '../ProfileCreationHeader/ProfileCreationHeader';
import "./CreationPage4.css";

function CreationPage4({ formData, setFormData }) {
    const profilesList = useContext(ProfileContext);

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
        console.log(formData)
      };

    const finalizeProfile = (formData) => {
        let profilesList = [...profilesList, formData];
        console.log(profilesList);
    }

    return(
        <div className="container">
            <ProfileCreationHeader title="Add New Profile - Meal Preferences" />

            <div className="creation-profile-container4">
                <div className="meal-select-container">
                    <label for="meal-type">What types of meals do you typically enjoy (e.g., salads, stir-fries, pasta dishes)?</label>
                    <select name="meal-type" value={formData.mealType || ''} onChange={handleChange} className="meal-type-select">
                        <option label=" "></option>
                        <option value="salads">Salads</option>
                        <option value="stir-fries">Stir-fries</option>
                        <option value="pasta-dishes">Pasta dishes</option>
                        <option value="soups">Soups</option>
                        <option value="sandwiches">Sandwiches</option>
                        <option value="rice-bowls">Rice bowls</option>
                        <option value="grilled-dishes">Grilled dishes</option>
                        <option value="casseroles">Casseroles</option>
                        <option value="tacos-burritos">Tacos or burritos</option>
                    </select>
                </div>

                <div className="meal-select-container">
                    <label for="meal-cooking-frequency">How often do you cook meals at home during a typical week?</label>
                    <select name="meal-cooking-frequency" value={formData.mealCookingFrequency || ''} onChange={handleChange} className="meal-type-select">
                        <option label=" "></option>
                        <option value="none">Never</option>
                        <option value="1-2">1-2 times per week</option>
                        <option value="3-4">3-4 times per week</option>
                        <option value="5-6">5-6 times per week</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>

                <div className="meal-select-container">
                    <label for="meal-prep">Do you preper to plan your meals in advance, or do you typically decide on meals spontaneously?</label>
                    <select name="meal-prep" value={formData.mealPrep || ''} onChange={handleChange} className="meal-type-select">
                        <option></option>
                        <option value="plan">Plan meals in advance</option>
                        <option value="spontaneous">Decide on meals spontaneously</option>
                        <option value="combination">Combination of both</option>
                        <option value="not-applicable">Not applicable / I don't handle meal planning</option>
                    </select>
                </div>
            </div>

            <div className="profile-navigation-body">
                <Link className="navigation-profile-page-button" to="/Thesis/profiles/page3">
                    <p>Go Back</p>
                </Link>

                <Link className="navigation-profile-page-button" to="/Thesis/profiles" onClick={finalizeProfile}>
                    <p>Submit</p>
                </Link>
            </div>
        </div>
    )
}

export default CreationPage4;
