import { useState } from "react";

fetch(
	"https://api.spoonacular.com/recipes/complexSearch?apiKey=6a326e977bb2441c99f21d04ccb07b7c&query=cookie"
)
	// fetch('https://api.spoonacular.com/recipes/1449043/analyzedInstructions?apiKey=6a326e977bb2441c99f21d04ccb07b7c')
	.then((data) => data.json())
	.then((data) => {
		const cardHolder = [];
		for (let i = 0; i < data.results.length; i++) {
			cardHolder.push(
				<div>
					<RecipeCard
						i={i}
						title={cookieTitle}
						image={img}

						// sourceUrl = {data[i].sourceUrl}
					/>
				</div>
			);
		}
		setCards(cardHolder);
	})
	.catch((err) => console.log(`Err: ${err}`));
}

// const cookieTableMaker = () => {
// 	const [id, setId] = useState(null);
// 	const [title, setTitle] = useState(null);
// 	const [img, setImg] = useState(null);

// 	for (let i = 0; i < data.results.length; i++) {
// 		setId(data.results[i].id);
// 		setTitle(data.results[i].title);
// 		setImg(data.results[i].image);
// 	}
// };

//we need to get the ids, images, and titles and place them in a card object
