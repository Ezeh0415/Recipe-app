import { FaMailBulk,FaHeart } from "react-icons/fa"
import { useState , useEffect } from "react";
import { PiWarningFill } from "react-icons/pi"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CgLoadbar } from "react-icons/cg";
import image1 from './images/1 (1).jpg';
// import image2 from './images/1 (2).jpg';
// import image3 from './images/1 (3).jpg';
// import image4 from './images/1 (4).jpg';
// import image5 from './images/1 (5).jpg';
// import image6 from './images/1 (6).jpg';
// import image7 from './images/1 (7).jpg';
// import image8 from './images/1 (8).jpg';
// import image9 from './images/1 (9).jpg';
// import image10 from './images/1 (10).jpg';
import chef_img from './images/chef.jpg';
import backgroundImage from './images/egusi.jpg';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Masonry from 'react-masonry-css'
import { green } from '@mui/material/colors';
const Body = ({home,isPending,homes}) => {

    const [recipes, setRecipes] = useState([]);
    const [error , setError] = useState(false)
    const [loading, setIsLoading] = useState(true)
    const apiKey = '830f2955-ec4d-4f19-ba49-d83eaecfdb92';
  
    useEffect(() => {
      // Define the API URL
      const apiUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=cake&key=${apiKey}`;
  
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

    const food = recipes.slice(-6);

 let bgImage = {
    backgroundColor:'silver',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
 }
 const points = {
   default:3,
   1024:2,
   500:1
}

    return ( 
        <div className="body-section">
          
          {loading ? (
          
              <svg className="w-[30%] ml-[40%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="#16FF21" stroke-width="5" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>
           ) : error ? (  
                 <div className="warning">
                           <div className="icon"> <PiWarningFill /> </div>
                           <h1>could not fetch resourse or poor internet conection </h1>
                   </div> 
             ) : (
            <>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center max-w-5xl mx-auto px-4 py-10">
  {/* Text Content */}
  <div className="space-y-4">
    <h1 className="text-2xl font-bold text-green-800">
      Let's Start Cooking with Popular Recipes
    </h1>
    <div className="text-sm text-green-700 space-y-1">
      <p>Want to learn how to cook but confused how to start?</p>
      <p>No need to worry again.</p>
    </div>
    <Link
      to="/Recipe"
      className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg transition"
    >
      Get Started
    </Link>
  </div>

  {/* Image */}
  <div className="flex justify-center md:justify-end">
    <img
      src={image1}
      alt="food-pic"
      className="rounded-lg w-3/4 md:w-full shadow-md"
    />
  </div>
</div>

               
                  <div className="mt-2">
                 <div className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-center">
                     <h1 className="text-4xl font-extrabold text-green-700 mb-4 capitalize">
                        Popular Cakes
                     </h1>
                     <div className="text-lg text-green-900 space-y-2">
                        <p>We provide a variety of food and beverage recipes</p>
                        <p>with high taste from famous chefs</p>
                     </div>
                  </div>
                  </div>

                 
      
                  <div className=" mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                        {recipes && (
                           
                             food.map((item,id) => (
                                <div key={id}>
                                    <div className="max-w-sm mx-auto bg-green-50 border border-green-100 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                                    <img
                                       src={item.image_url}
                                       alt={item.title}
                                       className="w-full h-48 object-cover"
                                    />

                                    <div className="p-5 space-y-3">
                                       <div className="flex items-center space-x-3">
                                          <div className="w-10 h-10 bg-green-400 text-white rounded-full flex items-center justify-center font-bold shadow-md">
                                          {item.title[0]}
                                          </div>
                                          <div>
                                          <h2 className="text-xl font-semibold text-green-800">{item.title}</h2>
                                          <p className="text-sm text-green-500">ID: {item.id}</p>
                                          </div>
                                       </div>

                                       <p className="text-green-700 text-sm leading-relaxed">
                                          Enjoy the sweetness of our most loved cakes, handcrafted with love by top chefs.
                                       </p>

                                       <div className="flex justify-between items-center">
                                          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm transition">
                                          Order Now
                                          </button>
                                          <button className="text-green-600 hover:text-green-800 text-lg">
                                          <FaHeart />
                                          </button>
                                       </div>
                                    </div>
                                 </div>


                                </div>
                             ))
                          
                        )}
                       
                  </div>
                  </div>
               {/* third body section */}
                  <div className="bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                     
                     {/* Chef Image */}
                     <div className="rounded-xl overflow-hidden shadow-md">
                        <img
                        src={chef_img}
                        alt="Chef"
                        className="w-full h-80 object-cover"
                        />
                     </div>

                     {/* Text Content */}
                     <div className="space-y-6">
                        <p className="italic text-green-600 text-lg">Variety of Food</p>
                        <h1 className="text-3xl md:text-4xl font-bold text-green-800">
                        Variety of Food and Beverage Recipes
                        </h1>
                        <blockquote className="text-green-700 text-base leading-relaxed border-l-4 border-green-300 pl-4">
                        We have prepared a variety of food and beverage recipes from our famous chefs, with cooking steps and great taste.
                        </blockquote>
                        <Link to="/Recipe">
                        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition">
                           View Menu
                        </button>
                        </Link>
                     </div>
                  </div>
                  </div>

               {/* fourth -section */}
                  <div
  className="relative bg-cover bg-center py-16 px-6 sm:px-12 text-center text-white rounded-xl"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-green-900 bg-opacity-60 rounded-xl"></div>

  <div className="relative max-w-3xl mx-auto space-y-4">
    <h1 className="text-4xl font-extrabold tracking-tight">
      Subscribe to get weekly
    </h1>
    <h1 className="text-4xl font-extrabold tracking-tight">
      Recipe updates
    </h1>
    <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition">
      Subscribe
    </button>
  </div>
</div>

          </>    
            
          )}

        </div>
        
         

          
     );
}
 
export default Body;