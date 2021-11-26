import React from "react";
import { useState } from 'react';
import DetailsList from './DetailsList.jsx';

const RecipeCard = (props) => {
	const [details, setDetails] = useState(null);

	// getRecipeDetails - dispatch fetch request for specific recipe 
	function getRecipeDetails(id) {
		console.log(`getRecipesDetails: ${id}`)
		// console.log("https://api.spoonacular.com/recipes/`${id}`/analyzedInstructions?apiKey=c3438c093ba3428dbb48800c1f2d8c23")
		console.log(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=c3438c093ba3428dbb48800c1f2d8c23`)
		// Make fetch request
		fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=c3438c093ba3428dbb48800c1f2d8c23`)
			.then(data => data.json())
			.then(data => {
				console.log(data);
				setDetails(data[0].steps)
			})
			.catch(err => console.log(err));
	}

	return (
		<div className='recipeContainer'>
			<div key={"RecipeCard:" + props.id}>
				<h1 className='title'>{props.title}</h1>
				<img src={props.image}></img>

				<button onClick={() => getRecipeDetails(props.id)}>View Recipe</button>
				{details && <DetailsList list={details} /> }
			</div>
		</div>
	);
};

export default RecipeCard;
