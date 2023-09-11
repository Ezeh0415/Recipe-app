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
                <div className="Recipe">
                <h1>popular foods recipes</h1>
                <div className="input-section">
                    <input 
                    type="text" 
                    onChange={Filter}
                    placeholder="individual food search"
                     id="input"
                     /> 
                    <div className="icon" id="icon"><FaCreativeCommonsSampling /></div>
                
            </div>
            </div>

                <div className="Nigeria-page">
            <Masonry 
             breakpointCols={points}
             className="my-masonry-grid"
             columnClassName="my-masonry-grid_column"
            >
            
                {record && (
                    records.map((item, index) => (
                    <div key={index}>
                       
                       <Card elevation={3}>
                        <CardHeader
                                        avatar={
                                        <Avatar sx={{ bgcolor: teal[500] }} aria-label="recipe">
                                            {item.title[0]}
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                            <FaHeart />
                                        </IconButton>
                                        }
                                        title={<span style={{ fontSize: 'large' }}>{item.title}</span>}
                                        subheader={item.id}
                                    />
                            <CardMedia
                                        component="img"
                                        image={item.image_url}
                                        alt="foods"
                                    />
                            <CardContent>
                                    <Typography variant="h5" color='textSecondary'>
                                        Created by {item.publisher}
                                    </Typography>
                            </CardContent>
                       </Card>

                    {/* <div className="cards">
                        <div className="card">
                            <img src={item.image_url} alt="food-picture" />
                            <h1>{item.title}</h1>
                            <blockquote>Created by {item.publisher}</blockquote>
                        </div>
                    </div> */}

                    
                </div>
                
               )))}
           </Masonry>
                    
                </div>
                <nav className="mav">
                <ul className="pagnation">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prevPage}>Prev</a>
                    </li>
                        {/* <span className="pagination-num">
                         {
                                number.map((n,i) => (
                                        <li className={ ` page item ${CurrentPage === n ? 'active' : '' } `} key={i}>
                                            <a href="#" className="page-link" onClick={() => changeCpage (n)}  >{n}</a>
                                        </li>
                                    ))
                            }  
                        </span> */}
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={nextPage}>Next</a>
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