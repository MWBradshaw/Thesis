import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <div id="navbar">
            <div id="navbar-brand-body">
                <h2>The Health Report</h2>
            </div>

            <div id="navbar-link-body">
                <Link to="/"><p>Dashboard</p></Link>
                <Link to="/profiles"><p>Profiles</p></Link>
                <Link to="/inventory"><p>Inventory</p></Link>
                <Link to="/recipes"><p>Recipes</p></Link>
                <Link to="/mealplanner"><p>Meal Planner</p></Link>
            </div>
        </div>
    )
}

export default Navbar;
