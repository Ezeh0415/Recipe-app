import useFetch from "../Component/useFetch";
import RecipeRice from "./RecipeRice";

const Recipe = () => {

    const { data:recipe,isPending,error } = useFetch(  "http://localhost:8500/recipes " );
    const { data:home } = useFetch(  "http://localhost:8000/question " );
    return ( 
        <div className="recipe">
            <hr />

             {/* {home && recipe && <RecipeHeader home={ home }   />}
             <hr /> */}
                 
                  {recipe && home &&  <RecipeRice  recipe={recipe} home={home}/>}
                  
                  
                    {/* {home && recipe &&   <RecipeRiceDetails recipe={recipe} isPending={isPending} error={error} />} */}
        </div>
     );
}
 
export default Recipe;