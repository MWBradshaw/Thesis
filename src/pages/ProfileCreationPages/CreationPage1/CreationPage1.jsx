import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCreationHeader from '../ProfileCreationHeader/ProfileCreationHeader';
import "./CreationPage1.css";

function CreationPage1({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData)
  };

  return (
    <div className="container">
      <div>
        <ProfileCreationHeader title="Add New Profile" />
      </div>
      <div className="creation-profile-container1">
        <div className="profile-template-container">
            <img src="../../public/assets/profile-template-pic.jpg" className="upload-image-img" alt="Profile Template" />
            <p>Upload Image</p>
        </div>

        <div>
          <div className="input-body">
            <label htmlFor="displayName">Display Name:</label>
            <input type="text" name="displayName" value={formData.displayName || ''} onChange={handleChange} />
          </div>

          <div className="input-body">
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" min="15" max="75" placeholder="15-75" value={formData.age || ''} onChange={handleChange} />
          </div>

          <div className="input-body">
            <label htmlFor="gender">Gender:</label>
            <select name="gender" value={formData.gender || ''} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
            </select>
          </div>
        </div>

        <div>
          <div className="input-body">
            <label htmlFor="height">Height (m):</label>
            <input type="text" name="height" placeholder="Enter height in meters" value={formData.height || ''} onChange={handleChange} />
          </div>

          <div className="input-body">
            <label htmlFor="weight">Weight (kg):</label>
            <input type="text" name="weight" placeholder="Enter weight in kilograms" value={formData.weight || ''} onChange={handleChange} />
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
  );
}

export default CreationPage1;