import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Inventory from './components/Inventory/Inventory.jsx';
import MealPlanner from './components/MealPlanner/MealPlanner.jsx';
import Profiles from './components/Profiles/Profiles.jsx';
import Recipes from './components/Recipes/Recipes.jsx';
import RecipePage from './pages/RecipePage/RecipePage.jsx';
import CreationPage1 from './pages/ProfileCreationPages/CreationPage1/CreationPage1.jsx';
import CreationPage2 from './pages/ProfileCreationPages/CreationPage2/CreationPage2.jsx';
import CreationPage3 from './pages/ProfileCreationPages/CreationPage3/CreationPage3.jsx';
import CreationPage4 from './pages/ProfileCreationPages/CreationPage4/CreationPage4.jsx';
import './App.css'

export const ProfileContext = createContext();

function App() {
  const profiles = [{ name: 'John' }];

  return (
    <ProfileContext.Provider value={profiles}>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/mealplanner" element={<MealPlanner />} />
              <Route path="/profiles" element={<Profiles/>} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipe-item/:title" element={<RecipePage />} />
              <Route path="/profiles/page1" element={<CreationPage1 />} />
              <Route path="/profiles/page2" element={<CreationPage2 />} />
              <Route path="/profiles/page3" element={<CreationPage3 />} />
              <Route path="/profiles/page4" element={<CreationPage4 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ProfileContext.Provider>
  )
}

export default App
