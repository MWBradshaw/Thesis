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
import ScrollToTop from "./ScrollToTop/ScrollToTop.jsx";
import './App.css'

export const ProfileContext = createContext();
const profiles = [{ name: 'John', age: 25, height: 1.71 , weight: 170, imgSrc: 'src/assets/john_img.png' }, { name: 'Daisy', age: 30, height: 1.80, weight: 190, imgSrc: 'src/assets/daisy_img.png' }];

for(const profile of profiles) {
  const weightKg = profile.weight / 2.2
  const bmi = weightKg / (profile.height ** 2);
  profile['bmi'] = bmi.toFixed(0);
}

function App() {
  

  return (
    <ProfileContext.Provider value={profiles}>
      <div>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard profile={profiles[0]} />} />
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
