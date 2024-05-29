import React, { useState } from "react";
import recipesData from "./recipes";
import veg from "../../assets/veg.png";
import Nonveg from "../../assets/non_veg.png";

const AppRecipe = () => {
  const [recipes, setRecipes] = useState(recipesData);
  const [input, setInput] = useState('');

  const onChangeHandle = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === '') {
      setRecipes(recipesData); // Show all recipes if input is empty
    }
  };

  const onSearchClick = () => {
  
      const newData = recipesData.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setRecipes(newData);
    
  };

  return (
    <>
      <div className="flex justify-center items-center text-[30px] text-yellow-700 font-bold underline underline-offset-4 mt-4">
        <h1>Food App</h1>
      </div>
      <div className="text-center space-x-4">
        <input
          type="text"
          value={input}
          onChange={onChangeHandle}
          placeholder="search food .."
          className="bg-gray-100 py-2 px-8 w-[300px] mt-4 rounded-xl outline-none"
        />
        <button className="button" onClick={onSearchClick}>Search</button>
      </div>
      {/* card- food information */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-14 my-14">
        {recipes.map((item, index) => (
          <div
            key={index}
            className="relative bg-gray-200 hover:bg-gray-400 w-[300px] h-[300px] overflow-hidden rounded-xl"
          >
            {/* Shadow effect on hover */}
            <div className="relative group">
              <img
                src={item.imageUrl}
                alt="recipes"
                className="w-[300px] h-[150px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:shadow-vintage"></div>
            </div>
            <div className="text-center px-4">
              <h1 className="text-2xl font-semibold">{item.name}</h1>
              <h2 className="text-sm">{item.description}</h2>
              <h2 className="h-[14px] w-[14px] relative left-[16rem] top-[25px]">
                {item.type === "Vegetarian" ? (
                  <img src={veg} alt="Vegetarian" />
                ) : (
                  <img src={Nonveg} alt="Non-Vegetarian" />
                )}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppRecipe;
