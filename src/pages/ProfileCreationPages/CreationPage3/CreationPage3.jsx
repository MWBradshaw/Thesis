import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCreationHeader from '../ProfileCreationHeader/ProfileCreationHeader';
import "./CreationPage3.css";

function CreationPage3() {
    return(
        <div className="container">
            <ProfileCreationHeader title="Add New Profile - Dietary Information" />

            <div className="creation-profile-container3">
                <div className="diet-select-container">
                    <label for="diet-pref">Do you follow any specific dietary preferences or restrictions?</label>
                    <select name="diet-pref" className="">

                    </select>
                </div>

                <div className="diet-select-container">
                    <label for="food-allergens">Do you have any food allergies or intolerances? If yes, please specify.</label>
                    <select name="food-allergens" className="">

                    </select>
                </div>

                <div className="diet-select-container">
                    <label for="meal-pref">Do you have any preferred cooking methods (e.g., grilling, baking, steaming) for preparing meals?</label>
                    <select name="meal-pref" className="">

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
