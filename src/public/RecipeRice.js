import { FaCreativeCommonsSampling } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import { CgLoadbar } from "react-icons/cg";
import { useState , useEffect } from "react";

const Nigeria = () => {

  

    const [recipes, setRecipes] = useState([]);
    const [error , setError] = useState(false)
    const [loading, setIsLoading] = useState(true)
    const[record,setRecord] = useState([]);
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
          setRecord(data.data.recipes);
          setIsLoading(false)
        })
        .catch((error) => {
          setError(error)
          setIsLoading(false)
        });
    }, []);


    
    const [CurrentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = CurrentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = record.slice(firstIndex,lastIndex);
    const npage = Math.ceil(record.length / recordsPerPage);
    const number = [...Array(npage + 1).keys()].slice(1)


   
    const Filter = (e) => {
        setRecord(recipes.filter(f => f.title.toLowerCase().includes(e.target.value)));
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
            
                <div className="Recipe">
                <h1>popular nigerian food recipes</h1>
                <div className="input-section">
                    <input 
                    type="text" 
                    onChange={Filter}
                    placeholder="Search"
                    /> 
                    <div className="icon"><FaCreativeCommonsSampling /></div>
                
            </div>
            </div>

                <div className="Nigeria-page">
                
                {record && (
                    records.map((item, index) => (
                    <div key={index}>
                    <div className="cards">
                        <div className="card">
                            <img src={item.image_url} alt="food-picture" />
                            <h1>{item.title}</h1>
                            <blockquote>Created by {item.publisher}</blockquote>
                        </div>
                    </div>
                    </div>
            )))}
                    
                </div>
                <nav className="mav">
                <ul className="pagnation">
                    <li className="page-item">
                        <a href="#" className="page-link" onClick={prevPage}>Prev</a>
                    </li>
                    {
                        number.map((n,i) => (
                            <li className={ ` page item ${CurrentPage === n ? 'active' : '' } `} key={i}>
                                <a href="#" className="page-link" onClick={() => changeCpage (n)}  >{n}</a>
                            </li>
                        ))
                    }
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