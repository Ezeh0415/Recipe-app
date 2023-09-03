import { Link } from "react-router-dom";
import RecipeRice from "./RecipeRice";
const Header = () => {



    

    return ( 
        <div className="header-section">
            <div className="head">
                <h1>Dark Cloud Recipe</h1>
            </div>
            <div className="list-section">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/About">About </Link>
                    <Link to="/Recipe">Recipe</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </div>
            

         
           
        </div>
     );
}
 
export default Header;