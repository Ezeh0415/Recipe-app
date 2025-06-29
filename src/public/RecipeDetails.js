import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import { useRecipes } from "../providerContext/ProviderContext";


const RecipeDetails = () => {
    const { id } = useParams();
    const {recipes} = useRecipes();
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {
        const foundRecipe = recipes.find(r => r.id === id);
        if (foundRecipe) setRecipe(foundRecipe);

    }, [id, recipes]);
    const { title, publisher, image_url, ingredients } = recipe || {};

    if (!recipe) {
        return <p className="text-center mt-10 text-gray-500">Loading recipe details...</p>;
    }

  return (
    <div key={id} className="max-w-2xl mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold capitalize">recipe details</h1>
            <Link to="/Recipe" className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-800">
            Back to Recipes
            </Link>
        </div>
      <h1 className="text-2xl capitalize font-bold">recipe publisher : {publisher}</h1>
      <div>
         <h2 className="text-xl font-bold capitalize">recipe title</h2>
         <p className="text-lg font-medium capitalize">{title}</p>
      </div>
        <div className="mt-4">
          <img
            src={image_url}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-64 object-cover rounded-lg"
          />
      </div>

        <div>
          <h2>{ingredients}</h2>
        </div>
    </div>
  )
}

export default RecipeDetails
