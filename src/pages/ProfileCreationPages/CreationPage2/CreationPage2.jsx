import React from 'react';
import ProfileCreationHeader from '../ProfileCreationHeader/ProfileCreationHeader';
import { Link } from 'react-router-dom';
import "./CreationPage2.css";

function CreationPage2() {
    return(
        <div className="container">
            <div>
                <ProfileCreationHeader title="Add New Profile - Weight Loss Goals" />
            </div>

            <div className="weight-loss-button-container">
                <div className="weight-loss-button">
                    <p>Lose Weight</p>
                </div>

                <div className="weight-loss-button">
                    <p>Maintain Weight</p>
                </div>

                <div className="weight-loss-button">
                    <p>Build muscle</p>
                </div>
            </div>

            <div className="profile-navigation-body">
                <Link className="navigation-profile-page-button" to="/profiles/page1">
                    <p>Go Back</p>
                </Link>

                <Link className="navigation-profile-page-button" to="/profiles/page3">
                    <p>Next</p>
                </Link>
            </div>
        </div>
    )
}

export default CreationPage2;
