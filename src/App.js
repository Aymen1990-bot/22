import React from 'react';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import RecipeListPage from './pages/RecipeList';
import AddRecipePage from './pages/AddRecipe';
import EditRecipePage from './pages/EditRecipe';
import RecipeDetailsPage from './pages/RecipeDetail'; 
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recipes" element={<PrivateRoute component={RecipeListPage} />} />
        <Route path="/add-recipe" element={<PrivateRoute component={AddRecipePage} />} />
        <Route path="/edit-recipe/:id" element={<PrivateRoute component={EditRecipePage} />} />
        <Route path="/recipe/:id" element={<PrivateRoute component={RecipeDetailsPage} />} />
      </Routes>
    
  );
}

export default App;

