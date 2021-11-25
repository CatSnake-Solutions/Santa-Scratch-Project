import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard.jsx";

const CookieRecipes = () => {
	// const [search, setSearch] = useState("");
	// const [query, setQuery] = useState("");
	// const [data, setData] = useState([""]);
	const [cards, setCards] = useState([]);
	// const [recipes, setRecipes] = useState([]);
	const [id, setId] = useState(null);
	const [cookieTitle, setCookieTitle] = useState(null);
	const [img, setImg] = useState(null);

	// Dispatch fetch call
	function dispatchFetch() {
		
		fetch(
			"https://api.spoonacular.com/recipes/complexSearch?apiKey=6a326e977bb2441c99f21d04ccb07b7c&query=cookie"
		)
			// fetch('https://api.spoonacular.com/recipes/1449043/analyzedInstructions?apiKey=6a326e977bb2441c99f21d04ccb07b7c')
			.then((data) => data.json())
			.then((data) => {
				setId(data.results[i].id);
				setTitle(data.results[i].title);
				setImg(data.results[i].image);
				const cardHolder = [];
				for (let i = 0; i < data.results.length; i++) {
					cardHolder.push(
						<div>
							<RecipeCard id={id} title={cookieTitle} image={img} />
						</div>
					);
				}
				console.log(cardHolder);
			})
			.catch((err) => console.log(`Err: ${err}`));
	}

	return (
		<>
			<button onClick={(e) => dispatchFetch()}>Call fetch request</button>
			<button onClick={(e) => viewState()}>View State</button>
			{/* { recipes[0] ? recipes.steps[0].step : null } */}
		</>
		// <div className="Container">
		//   <nav>
		//   <h3 className="SantaStyle1">Cookie Recipes</h3>
		// <form >
		//     <label className="SantaStyle2">Search Cookies:</label>
		//     <input value={search} onChange={ e => {
		//         setSearch(e.target.value);
		//       }} className='submitInput'></input>
		//     <input type="submit" value="Search" className='submit'></input>
		// </form>
		//   </nav>
		  <div className="cardContainer">
		    {cards}
		  </div>
		//    <div className="btn btnbottom">
		//    <Link to="/Dashboard">
		//   <button type="submit" >
		//       Go Back
		//   </button>
		//   </Link>
		//   </div>
		// </div>
	);
};

export default CookieRecipes;
