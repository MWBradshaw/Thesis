import React, { useContext, useState, useEffect } from "react";
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
    const [graphData, setGraphData] = useState([1500, 1700, 1600, 1800, 1575, 1400, 1500]);


    useEffect(() => {
        switch(graphName) {
            case 'Weight (lbs)':
                setGraphData([155.23, 152.67, 152.21, 152.67, 155.68, 154.44, 152.67])
                break;
            case 'BMI':
                setGraphData([24.2, 24, 23.9, 24, 24.3, 24.1, 24])
                break;
            case 'Blood Pressure (mmHg)':
                setGraphData([120, 130, 125, 118, 135, 122, 128])
                break;
            case 'Blood Glucose (mg/dL)':
                setGraphData([95, 140, 110, 85, 160, 100, 120])
                break;
            case 'Cholesteral (mg/dL)':
                setGraphData([200, 100, 60, 150, 500, 130, 120])
                break;
            case 'Calorie Consumption (kcal)':
                setGraphData([1500, 1700, 1600, 1800, 1575, 1400, 1500])
                break;
        }
    }, [graphName])



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

                        <div className="dashboard-button-container" onClick={() => setGraphName('Weight (lbs)')}>
                            <img src="public/assets/icons/white/weight@2x.png"></img>
                            <p>Weight</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('BMI')}>
                            <img src="public/assets/icons/white/body@2x.png"></img>
                            <p>BMI</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Blood Pressure (mmHg)')}>
                            <img src="public/assets/icons/white/blood_pressure_monitor@2x.png"></img>
                            <p>Blood Pressure</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Blood Glucose (mg/dL)')}>
                            <img src="public/assets/icons/white/diabetes_measure@2x.png"></img>
                            <p>Blood Glucose</p>
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Cholesteral (mg/dL)')}>
                            <img src="public/assets/icons/white/cholesterol.png"></img>
                            <p>Cholesteral</p>   
                        </div>

                        <div className="dashboard-button-container" onClick={() => setGraphName('Calorie Consumption (kcal)')}>
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
                        <Line width={700} height={400} key={graphName} data={{
                                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                                datasets: [
                                    {
                                        label: graphName,
                                        data: graphData,
                                        borderColor: '#36A2EB',
                                        backgroundColor: '#9BD0F5',
                                    }
                                ]
                            }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;



