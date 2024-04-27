import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication/Authentication.jsx';

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
import ScrollToTop from "./ScrollToTop/ScrollToTop.jsx";
import './App.css'

export const ProfileContext = createContext();
let profiles = [{ name: 'John', email: 'davisjohn@gmail.com', age: 25, height: 1.71 , weight: 155, imgSrc: '/assets/john_img.png' }, { name: 'Vanessa', email: 'gracevan@gmail.com', age: 30, height: 1.80, weight: 130, imgSrc: '/assets/vanessa_img.png' }];

function convertHeightToFeetAndInches(heightMeters) {
  const totalInches = heightMeters * 39.3701;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}' ${inches}''`;
}

for(const profile of profiles) {
  const weightKg = profile.weight / 2.2
  const bmi = weightKg / (profile.height ** 2);
  profile['bmi'] = bmi.toFixed(0);

  const heightFeetAndInches = convertHeightToFeetAndInches(profile.height);
  profile['heightFeetAndInches'] = heightFeetAndInches;
}

function App() {
  const [formData, setFormData] = useState({});
  
  return (
    // <ProfileContext.Provider value={profiles}>
    //   <div>
    //     <BrowserRouter>
    //       <ScrollToTop />
    //       <Navbar />
    //       <div className="content">
    //         <Routes>
    //           <Route path="/Thesis" element={<Dashboard />} />
    //           <Route path="/Thesis/inventory" element={<Inventory />} />
    //           <Route path="/Thesis/mealplanner" element={<MealPlanner />} />
    //           <Route path="/Thesis/profiles" element={<Profiles/>} />
    //           <Route path="/Thesis/recipes" element={<Recipes />} />
    //           <Route path="/Thesis/recipe-item/:title" element={<RecipePage />} />
    //           <Route path="/Thesis/profiles/page1" element={<CreationPage1 formData={formData} setFormData={setFormData} />} />
    //           <Route path="/Thesis/profiles/page2" element={<CreationPage2 formData={formData} setFormData={setFormData} />} />
    //           <Route path="/Thesis/profiles/page3" element={<CreationPage3 formData={formData} setFormData={setFormData} />} />
    //           <Route path="/Thesis/profiles/page4" element={<CreationPage4 formData={formData} setFormData={setFormData}/>} />
    //         </Routes>
    //       </div>
    //     </BrowserRouter>
    //   </div>
    // </ProfileContext.Provider>
    <Authentication />
  )
}

export default App
