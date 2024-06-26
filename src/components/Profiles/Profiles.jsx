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
                        <Link to="/Thesis" state={profile} key={idx} className="profile">
                            <div>
                                <img className="profile-list-img" src={profile.imgSrc}></img>
                            </div>

                            <div>
                                <p className="profile-label">{profile.name}</p>
                            </div>
                        </Link>
                    )}
                </ProfileContext.Provider>

                <Link to="/Thesis/profiles/page1" className="create-profile-button">
                    <div>
                        <img className="profile-list-img" src="public/assets/create-profile-button.png" />
                    </div>
                    <p className="profile-label">Add Profile</p>
                </Link>
            </div>
        </div>
    )
}

export default Profiles;