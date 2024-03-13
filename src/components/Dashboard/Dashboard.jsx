import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { ProfileContext } from "../../App";
import "./Dashboard.css";


function Dashboard() {
    const profilesList = useContext(ProfileContext);
    const location = useLocation();
    const profile = location.state || profilesList[0];
    const [graphName, setGraphName] = useState('Weight');
    return(
        <div className="container">
            <div>
                <div className="cover-container">
                    <img id="cover-img" src="public/assets/icons/cover_page.png"></img>
                </div>

                <div id="profile-info-container">
                    <img id="profile-img" src={profile.imgSrc}></img>
                    <div>
                        <p id="profile-name">{profile.name}</p>
                        <p id="profile-email">{profile.email}</p>
                    </div>
                </div>
            </div>

            <div id="dashboard-container">
                <div id="dashboard-info-container">
                    <div>   
                        <p className="dashboard-info-title">General Characteristics</p>
                        <p>Age: {profile.age}</p>
                        <p>Height: {profile.heightFeetAndInches}</p>
                    </div>

                    <div>
                        <p className="dashboard-info-title">Health Characteristics</p>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Weight')}>
                            <img src="public/assets/icons/white/weight@2x.png"></img>
                            <p>Weight</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('BMI')}>
                            <img src="public/assets/icons/white/body@2x.png"></img>
                            <p>BMI</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Blood Pressure')}>
                            <img src="public/assets/icons/white/blood_pressure_monitor@2x.png"></img>
                            <p>Blood Pressure</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Blood Glucose')}>
                            <img src="public/assets/icons/white/diabetes_measure@2x.png"></img>
                            <p>Blood Glucose</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Cholesteral')}>
                            <img src="public/assets/icons/white/cholesterol.png"></img>
                            <p>Cholesteral</p>   
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Calorie Consumption')}>
                            <img src="public/assets/icons/white/nutrition@2x.png"></img>
                            <p>Calorie Consumption</p> 
                        </div>
                    </div>
                </div>

                <div id="dashboard-chart-container">
                    <div id="dashboard-chart-title">

                        {/* <select name="health-characteristics">
                            <option value="weight">Weight</option>
                            <option value="bmi">BMI</option>
                            <option value="bloodPressure">Blood Pressure</option>
                            <option value="bloodGlucose">Blood Glucose</option>
                            <option value="cholesterol">Cholesterol</option>
                            <option value="calorieConsumption">Calorie Consumption</option>
                        </select> */}
                        <p>{graphName}</p>
                        <p>During</p>

                        <select name="time-frame">
                            <option value="1week">1 Week</option>
                            <option value="1month">1 Month</option>
                        </select>
                    </div>
                    <div>
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

            {/* <div id="dashboard-container">
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

                    <div className="calorie-limit-container">
                        <div>
                            <h2>Recommended Calorie Consumption Limit:</h2>
                            <h2>2000 kcal</h2>
                        </div>

                        <div>
                            <button>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Dashboard;



