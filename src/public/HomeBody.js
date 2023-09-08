import { FaMailBulk } from "react-icons/fa"
import { useState , useEffect } from "react";
import { PiWarningFill } from "react-icons/pi"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CgLoadbar } from "react-icons/cg";
import image1 from './images/1 (1).jpg';
import image2 from './images/1 (2).jpg';
import image3 from './images/1 (3).jpg';
import image4 from './images/1 (4).jpg';
import image5 from './images/1 (5).jpg';
import image6 from './images/1 (6).jpg';
import image7 from './images/1 (7).jpg';
import image8 from './images/1 (8).jpg';
import image9 from './images/1 (9).jpg';
import image10 from './images/1 (10).jpg';
import chef_img from './images/chef.jpg';
import backgroundImage from './images/egusi.jpg';

const Body = ({home,isPending,homes}) => {

    const [recipes, setRecipes] = useState([]);
    const [error , setError] = useState(false)
    const [loading, setIsLoading] = useState(true)
    const apiKey = '830f2955-ec4d-4f19-ba49-d83eaecfdb92';
  
    useEffect(() => {
      // Define the API URL
      const apiUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=rice&key=${apiKey}`;
  
      // Fetch data from the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the fetched recipes
          setRecipes(data.data.recipes);
          setIsLoading(false)
        })
        .catch((error) => {
          setError(error)
           setIsLoading(false)
        });
    }, []);

 let bgImage = {
    backgroundColor:'silver',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
 }

    return ( 
        <div className="body-section">
          
          {loading ? (
          
              <div className="pending-icon"><CgLoadbar /></div> 
           ) : error ? (  
                 <div className="warning">
                           <div className="icon"> <PiWarningFill /> </div>
                           <h1>could not fetch resourse or poor internet conection </h1>
                   </div> 
             ) : (
            <>
                  <div className="first-body">
                  <div className="first-quo">
                        <h1>Let's Start cooking with popular recipes</h1>
                        <div className="second-quo">
                           <p>want to learn how to cook but confused how to start ?</p>
                           <p>No need to worry again</p>
                        </div>
      
                        <div className="button-sec">
                        <Link to="/Recipe">
                              <li>get Started</li>
                        </Link>
                        </div>
                  </div>
      
                  <div className="image-section">
                     <img src={image1} alt="food-pic"/>
                  </div>
                  </div>
               
                  <div className="second-body">
                  <div className="sec-body">
                     <div className="s-b-first-quo">
                        <h1>popular food</h1>
                        <div className="s-b-second-quo">
                        <p>we provide a variety of food and beverage recipes</p>
                        <p>with high taste from famous chefs</p>
                        </div>
                     </div>
                  </div>
      
                  <div className="s-b-image">
                     <div className="first-img">
                        <div> <img src={image2}  alt="food-pic"/> </div>
                        <div> <img src={image3}  alt="food-pic"/> </div>
                        <div> <img src={image4}  alt="food-pic"/> </div>
                        <div> <img src={image5} alt="food-pic" /> </div>
                        <div> <img src={image6}  alt="food-pic"className="fimg"/> </div>
                     </div>
      
                     <div className="second-img">
                        <div> <img src={image7}  alt="food-pic" /> </div>
                        <div> <img src={image8}  alt="food-pic"/> </div>
                        <div> <img src={image9}  alt="food-pic"/> </div>
                        <div> <img src={image10}  alt="food-pic"/> </div>
                     </div>
                  </div>
                  </div>
               {/* third body section */}
                  <div className="third-section">
                     <div className="img">
                     <img src={chef_img} alt="chef-picture" /> 
                     </div>
                     <div className="th-s-first-text">
                        <i>variety of food</i>
                        <h1>variety of food and beverage recipes</h1>
                     <div className="th-s-second-text">
                        <blockquote>we have prepared a variety of food and beverage recipes from our famous chefs, with cooking steps and with good taste</blockquote>
                     </div>
                     <Link to="/Recipe">
                        <button>view menu</button>
                     </Link>
                     </div>
                  </div>
               {/* fourth -section */}
                  <div className="fourth-section"style={bgImage}>
                     <div className="fourth-text">
                        <h1>subscribe to get weekly</h1>
                        <h1>recipe updates</h1>
                     </div>
                     <div className="fourth-input">
                        <input type="text" placeholder="enter your email" />
                        <div className="icon">
                        <FaMailBulk />
                        </div>
                        <button type="submit">subscribe</button>
                     </div>
                  </div>
            </>
          )}

        </div>
        
         

          
     );
}
 
export default Body;