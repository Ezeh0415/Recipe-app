import { Link } from "react-router-dom";

const Mainsearch = ({fullSearch}) => {
    return ( 
        <div className="search">
            <div className="main-input">
                <Link to="/Recipe">
                    <input 
                    type="text" 
                    onChange={fullSearch}
                    placeholder="Full Food Search" 
                    />
                </Link>
            </div>
        </div>
     );
}
 
export default Mainsearch;