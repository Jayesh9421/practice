import React, { useContext,createContext, useEffect } from "react";
const API_URL = `http://www.omdbapi.com/?apikey=f7c17b1c=titanic`;
// Create the context
const AppContext = createContext();

// Define the provider
const AppProvider = ({ children }) => {
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data =await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);
  return (
    <AppContext.Provider value={{ name: "jayesh" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
