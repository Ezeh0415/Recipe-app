import { FaHeart,FaCreativeCommonsSampling } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import { CgLoadbar } from "react-icons/cg";
import { useState , useEffect } from "react";
import Mainsearch from "./MainSearch";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { teal } from '@mui/material/colors';
import Masonry from 'react-masonry-css'
import Grid from "@mui/system/Unstable_Grid/Grid";

const Nigeria = () => {

  

    const [recipes, setRecipes] = useState([]);
    const [error , setError] = useState(false)
    const [loading, setIsLoading] = useState(true)
    const[record,setRecord] = useState([]);
    const [querry , setQuerry] = useState('');
    const points = {
        default:3,
        1024:2,
        500:1
    }
    const apiKey = '830f2955-ec4d-4f19-ba49-d83eaecfdb92';
  
    useEffect(() => {
      // Define the API URL
      const apiUrl = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${querry}&key=${apiKey}`;
  
      // Fetch data from the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the fetched recipes
          setRecipes(data.data.recipes);
          setRecord(data.data.recipes);
          setIsLoading(false)
        })
        .catch((error) => {
          setError(error)
          setIsLoading(false)
        });
    }, [querry]);


    
    const [CurrentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 15;
    const lastIndex = CurrentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = record.slice(firstIndex,lastIndex);
    const npage = Math.ceil(record.length / recordsPerPage);
    const number = [...Array(npage + 1).keys()].slice(1)


   
    const Filter = (e) => {
        //setRecord(recipes.filter(f => f.title.toLowerCase().includes(e.target.value)));
        setRecord(recipes.filter(f => f.title.toLowerCase().includes(e.target.value.toLowerCase())));
       }

       const fullSearch = (e) => {
        setQuerry(e.target.value.toLowerCase());
       }

    return ( 

       <div className="ninja">

        { loading ? (
        
                <div className="pending-icon"><CgLoadbar /></div> 

                 ) : 
        
          error ? ( 
                <div className="warning">
                        <div className="icon"> <PiWarningFill /> </div>
                        <h1>could not fetch resourse or poor internet conection </h1>
                 </div> 
                 ):(
            <>
             <Mainsearch  fullSearch={fullSearch}/>
               <div className="Recipe max-w-xl mx-auto p-6">
  <h1 className="text-3xl font-bold text-green-600 mb-6">
    Popular Food Recipes
  </h1>
  <div className="input-section relative">
    <input
      type="text"
      onChange={Filter}
      placeholder="Search for individual food"
      id="input"
      className="w-full border border-green-400 rounded-md py-2 pl-4 pr-10 text-green-900 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
    
  </div>
</div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           
            
                {record && (
                    records.map((item, index) => (
                    <div key={index}>
                        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg">
                                {item.title[0]}
                            </div>
                            <span className="text-lg font-semibold text-green-700">{item.title}</span>
                            </div>
                            <button className="text-red-500 hover:text-red-600">
                            <FaHeart />
                            </button>
                        </div>

                        {/* Image */}
                        <img
                            src={item.image_url}
                            alt="foods"
                            className="w-full h-48 object-cover border-t border-b"
                        />

                        {/* Footer */}
                        <div className="p-4">
                            <p className="text-sm text-gray-600">
                            Created by <span className="font-semibold text-green-600">{item.publisher}</span>
                            </p>
                        </div>
                        </div>

                </div>
                
               )))}
           
                    
                </div>
                <nav className="my-6">
  <ul className="flex items-center justify-center gap-2">
    {/* Prev Button */}
    <li>
      <button
        onClick={prevPage}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Prev
      </button>
    </li>

    {/* Page Numbers */}
    {number.map((n, i) => (
      <li key={i}>
        <button
          onClick={() => changeCpage(n)}
          className={`px-3 py-1 rounded border ${
            CurrentPage === n
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border-green-400 hover:bg-green-100"
          } transition`}
        >
          {n}
        </button>
      </li>
    ))}

    {/* Next Button */}
    <li>
      <button
        onClick={nextPage}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Next
      </button>
    </li>
  </ul>
</nav>

                 
                </>
            )}  
       </div>
     )

     function prevPage() {
       if(CurrentPage !== 1) {
         setCurrentPage(CurrentPage - 1)
       }
     }

     function changeCpage(id) {
          setCurrentPage( id )
     }


     function nextPage() {
        if(CurrentPage !== npage) {
            setCurrentPage(CurrentPage + 1)
          }
     }
}
 
export default Nigeria ;