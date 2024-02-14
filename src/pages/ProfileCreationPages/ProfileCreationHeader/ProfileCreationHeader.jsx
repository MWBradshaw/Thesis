import React from "react";
import './ProfileCreationHeader.css';

function ProfileCreationHeader(props) {
    return(
        <h2 className="profile-creation-header">{props.title}</h2>
    )
}

export default ProfileCreationHeader;