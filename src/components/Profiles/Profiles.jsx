import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ProfilesHeader from "./ProfilesHeader/ProfilesHeader";
import { ProfileContext } from "../../App";
import "./Profiles.css";

function Profiles() {
    const profilesList = useContext(ProfileContext);

    return(
        <div className="container">
            <div className="main-profiles-header">
                <ProfilesHeader />
            </div>
            <div className="profile-list-body">
                <ProfileContext.Provider>
                    {profilesList && profilesList.map((profile, idx) => 
                        <Link to="/" profile={profile} key={idx} className="profile">
                            <div>
                                <img className="profile-list-img" src={profile.imgSrc}></img>
                            </div>

                            <div>
                                <p>{profile.name}</p>
                            </div>
                        </Link>
                    )}
                </ProfileContext.Provider>

                <Link to="/profiles/page1" className="create-profile-button">
                    <div>
                        <img src="src/assets/create-profile-button.png" />
                    </div>
                    <p>Create New Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Profiles;