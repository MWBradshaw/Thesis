import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return(
        <div id="navbar">
            <Link to="/Thesis/">
                <div id="navbar-brand-body">
                    <img id="navbar-brand" src="public/assets/icons/Logo.png"></img>
                    <p>The Health Report</p>
                </div>
            </Link>
            <div id="navbar-link-body">
                <Link to="/Thesis/profiles"><p>Profiles</p></Link>
                <Link to="/Thesis/inventory"><p>Inventory</p></Link>
                <Link to="/Thesis/recipes"><p>Recipes</p></Link>
                <Link to="/Thesis/mealplanner"><p>Meal Planner</p></Link>
            </div>
        </div>
    )
}

export default Navbar;
