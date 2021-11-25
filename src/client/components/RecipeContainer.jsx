import React from "react";
import RecipeCard from './RecipeCard.jsx';

const RecipeContainer = (props) => {
	const resultArray = []
    

    props.recipesArray.results.forEach((ele) => {resultArray.push(  
      <RecipeCard  
      id={ele.id}
      title={ele.title}
      image={ele.image}
        />  
    )})
 
  return (
      <div>
     {resultArray}

      </div>

  


        
 

	);
};

export default RecipeContainer;
