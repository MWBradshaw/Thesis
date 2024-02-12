import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCreationHeader from '../ProfileCreationHeader/ProfileCreationHeader';
import "./CreationPage1.css";

function CreationPage1() {
    return(
        <div className="container">
            <div>
                <ProfileCreationHeader title="Add New Profile" />
            </div>
            <div className="creation-profile-container1">
                <div>
                    <img src="src/assets/create-profile-button.png" />
                    <p>Upload Image</p>
                </div>

                <div>
                    <div className="input-body">
                        <label for="displayName">Display Name:</label>
                        <input type="text" name="displayName" />
                    </div>

                    <div className="input-body">
                    <label for="age">Age:</label>
                    <input type="number" name="age" min="15" max="75" placeholder="15-75" />
                    </div>

                    <div className="input-body">
                        <label for="gender">Gender:</label>
                        <select name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="non-binary">Non-Binary</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className="input-body">
                        <label for="height">Height (m):</label>
                        <input type="text" name="height" placeholder="Enter height in meters" />
                    </div>

                    <div className="input-body">
                        <label for="weight">Weight (kh):</label>
                        <input type="text" name="weight" placeholder="Enter weight in kilograms" />
                    </div>
                </div>
            </div>

            <div className="profile-navigation-body">
                <Link className="navigation-profile-page-button" to="/profiles">
                    <p>Go Back</p>
                </Link>

                <Link className="navigation-profile-page-button" to="/profiles/page2">
                    <p>Next</p>
                </Link>
            </div>
        </div>
    )
}

export default CreationPage1;
