import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard.jsx";
import RecipeContainer from './RecipeContainer.jsx';

const CookieRecipes = () => {
	// const [search, setSearch] = useState("");
	// const [query, setQuery] = useState("");
	const [data, setData] = useState(null);
	const [cards, setCards] = useState([]);
	// const [recipes, setRecipes] = useState([]);
	const [id, setId] = useState(null);
	const [cookieTitle, setCookieTitle] = useState(null);
	const [img, setImg] = useState(null);

	// Dispatch fetch call to get cookie recipes
	// useEffect((
		
	// 	function dispatchFetch() {
	// 		fetch(
	// 			"https://api.spoonacular.com/recipes/complexSearch?apiKey=7d80fcc2a0d24ff985a746f84b1c5c14&query=cookie"
	// 		)
	// 			// fetch('https://api.spoonacular.com/recipes/1449043/analyzedInstructions?apiKey=6a326e977bb2441c99f21d04ccb07b7c')
	// 			.then((data) => data.json())
	// 			.then((data) => {
	// 				// data === data.results
	// 				setData(data)
	// 			})
	// 			.catch((err) => console.log(`Err: ${err}`));
	// 	}
		
	// ))
	function dispatchFetch() {
		fetch(
			"https://api.spoonacular.com/recipes/complexSearch?apiKey=c3438c093ba3428dbb48800c1f2d8c23&query=cookie"
		)
			// fetch('https://api.spoonacular.com/recipes/1449043/analyzedInstructions?apiKey=6a326e977bb2441c99f21d04ccb07b7c')
			.then((data) => data.json())
			.then((data) => {
				// data === data.results
				setData(data)
			})
			.catch((err) => console.log(`Err: ${err}`));
	}
	
	// console.log(data.results)
	// const result = [];
	//data.map((ele) => ele)
// const ardHolder = [];
// 				for (let i = 0; i < data.results.length; i++) {
// 					cardHolder.push(
// 						<div>
// 							<RecipeCard id={id} title={cookieTitle} image={img} />
// 						</div>
// 					);
// 				}
// 	function viewState() {
// 		console.log(recipes);
// 	}

	//    useEffect(() => {
	//        const fetchData = () => {
	//         fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${query}&number=10&offset=0&type=cookie`, {
	// 	            "method": "GET",
	// 	           "headers": {
	// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
	// 		//"x-rapidapi-key": "3827341071msh9cabc19f9c4a50ap194b6fjsnb03240d1f478"
	//     "x-rapidapi-key": '6a326e977bb2441c99f21d04ccb07b7c'
	// 	}
	// })
	//            .then(response => response.json())
	//            .then(response => {
	//             console.log('Response:', response.results)
	//             setData(response.results);
	//         })
	//         .then(console.log('Data: ', data))
	//         .catch(err => {
	//             console.error(err);
	//         });
	//        }
	//        if (query !== '') {
	//         console.log(query)

	//         fetchData();
	//       }
	//     }, [query]);

	//     const firstUpdate = useRef(true);
	//     useEffect(() => {
	//       // Jump out of callback if this is first render
	//       if(firstUpdate.current) {
	//         firstUpdate.current = false;
	//         return;
	//       }
	//       console.log('useEffectData', data)
	//       const cardHolder = [];
	// //      console.log('DataLength', data.length);
	// for (let i = 0; i < data.length; i++) {
	// 	cardHolder.push(
	// 		<div>
	// 			<RecipeCard
	// 				i={i}
	// 				title={cookieTitle}
	// 				image={img}

	// 				// sourceUrl = {data[i].sourceUrl}
	// 			/>
	// 		</div>
	// 	);
	// }
	//     console.log("Cardholder", cardHolder)
	//     setCards(cardHolder);

	//     }, [data])

	// ********************************* NEW CODE ******************************* 
	// 
	// data && data.results ? data.results[0].id : null;



	return (
		<>
			<button onClick={(e) => dispatchFetch()}>Call fetch request</button>
			<button onClick={(e) => viewState()}>View State</button>
			{/* { recipes[0] ? recipes.steps[0].step : null } */}
		
			{ data && <RecipeContainer recipesArray={data} /> }
		</>
	
	);
};

export default CookieRecipes;
