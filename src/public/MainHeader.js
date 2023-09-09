import { Link } from "react-router-dom";
const Header = () => {

    let desktop = 'Dark Cloud Recipe';
    let tablet = 'D.Cloud Recipe';
    let mobile = 'D.C. Recipe';
    

    return ( 
        <div className="header-section">
            <div className="head">
                <h1 className="desktop">{desktop}</h1>
                <h1 className="tablet">{tablet}</h1>
                <h1 className="mobile">{mobile}</h1>
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