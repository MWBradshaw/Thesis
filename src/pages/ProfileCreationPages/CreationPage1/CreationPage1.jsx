import React from 'react';
import { Link } from 'react-router-dom';
import ProfilesHeader from '../../../components/Profiles/ProfilesHeader/ProfilesHeader';
import "./CreationPage1.css";

function CreationPage1() {
    return(
        <div className="container">
            <div className="creation-profile-body1">
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
                        <label for="height">Height (cm):</label>
                        <input type="text" name="height" placeholder="Enter height in centimeters" />
                    </div>

                    <div className="input-body">
                        <label for="weight">Weight (kh):</label>
                        <input type="text" name="weight" placeholder="Enter weight in kilograms" />
                    </div>
                </div>
            </div>

            <Link>

            </Link>
        </div>
    )
}

export default CreationPage1;
