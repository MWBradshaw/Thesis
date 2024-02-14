import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import { ProfileContext } from "../../App";
import "./Dashboard.css";


function Dashboard() {
    const profilesList = useContext(ProfileContext);
    const location = useLocation();
    const profile = location.state || profilesList[0];
    
    return(
        <div className="container">
            <div className="main-dashboard-header">
                <DashboardHeader name={profile.name} />
            </div>
            <div id="dashboard-container">
                <div className="profile-info-container">
                    
                    <img className="profile-demographic-img" src={profile.imgSrc} />


                    <div className="profile-demographic-info-container">
                        <p>Age: {profile.age}</p>
                        <p>Height: {profile.height}m</p>
                        <p>Weight: {profile.weight} lbs.</p>
                        <p>BMI: {profile.bmi}</p>
                    </div>
                </div>

                <div className="dashboard-chart-container">
                    <Line width={700} height={400} data={{
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [
                            {
                                label: "Calorie Consumption (kcal)",
                                data: [1500, 1700, 1600, 1800, 1575, 1400, 1500],
                                borderColor: '#36A2EB',
                                backgroundColor: '#9BD0F5',
                            }
                        ]
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;



