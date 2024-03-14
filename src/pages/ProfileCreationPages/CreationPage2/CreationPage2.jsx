import React, { useState } from 'react';
import ProfileCreationHeader from '../ProfileCreationHeader/ProfileCreationHeader';
import { Link } from 'react-router-dom';
import "./CreationPage2.css";

function CreationPage2({ formData, setFormData }) {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        let calorieLimit = ""

        switch(buttonName) {
            case "loseWeight":
                calorieLimit = 1750
                break;
            case "maintainWeight":
                calorieLimit = 2000
                break;
            case "buildMuscle":
                calorieLimit = 2500
                break;
            default:
                calorieLimit = 2000
        }

        setFormData({
            ...formData,
            weightLossGoal: buttonName,
            recommendedCalorieLimit: calorieLimit
          });
        console.log(formData)
    };

    return(
        <div className="profile-container">
            <div>
                <ProfileCreationHeader title="Add New Profile - Weight Loss Goals" />
            </div>

            <div className="weight-loss-button-container">
                <div className={`weight-loss-button ${activeButton === "loseWeight" ? "active" : ""}`} onClick={() => handleButtonClick("loseWeight")}>
                    <p>Lose Weight</p>
                </div>

                <div className={`weight-loss-button ${activeButton === "maintainWeight" ? "active" : ""}`} onClick={() => handleButtonClick("maintainWeight")}>
                    <p>Maintain Weight</p>
                </div>

                <div className={`weight-loss-button ${activeButton === "buildMuscle" ? "active" : ""}`} onClick={() => handleButtonClick("buildMuscle")}>
                    <p>Build muscle</p>
                </div>
            </div>

            <div className="profile-navigation-body">
                <Link className="navigation-profile-page-button" to="/Thesis/profiles/page1">
                    <p>Go Back</p>
                </Link>

                <Link className="navigation-profile-page-button" to="/Thesis/profiles/page3">
                    <p>Next</p>
                </Link>
            </div>
        </div>
    );
}

export default CreationPage2;