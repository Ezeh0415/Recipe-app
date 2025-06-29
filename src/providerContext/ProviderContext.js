import React, { createContext, useContext, useState } from 'react';
import useFetch from '../UseFetch'; // Adjust the path if needed

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [querry, setQuerry] = useState("rice");
  const apiKey = '830f2955-ec4d-4f19-ba49-d83eaecfdb92';
  const apiUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${querry}&key=${apiKey}`;

  const { data, loading, error } = useFetch(apiUrl);
  const recipes = data || [];

   const bgImage = {
    backgroundColor: 'silver',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  };

    const fullSearch = (e) => {
    setQuerry(e.target.value.toLowerCase());
  };

  return (
    <RecipesContext.Provider value={{ recipes, loading, error, bgImage, fullSearch }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipesContext);
