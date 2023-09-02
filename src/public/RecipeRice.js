import { FaCreativeCommonsSampling } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const Nigeria = () => {

    const[record,setRecord] = useState([]);
    const[data , setData] = useState(null)
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(' http://localhost:8500/recipes')
        .then(res => {
            setData(res.data)
            setRecord(res.data)
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [])

    const Filter = (e) => {
            setRecord(data.filter(i => i.name.toLowerCase().includes(e.target.value)));
           }



    return ( 
       <div className="ninja">
         <div className="Recipe">
           <h1>popular nigerian food recipes</h1>
           <div className="input-section">
                 <input 
                 type="text" 
                 placeholder="Search"
                 onChange={Filter}
                 /> 
                 <div className="icon"><FaCreativeCommonsSampling /></div>
              
          </div>
         </div>
            <div className="Nigeria-page">

            {record && (
                 record.map(recipes => (
                    <div className="recipe-preview" key={recipes.id}>
                        
                           <div className="cards">
                               <div className="card">
                                   <img src={recipes.image} />
                                   <h2>{recipes.name}</h2>
                                   <blockquote>{recipes.description}</blockquote>
                                   <h4>INGREDIENTS</h4>
                                   <blockquote>{recipes.ingredients}</blockquote>
                                   <h4>INSTRUCTIONS</h4>
                                   <blockquote>{recipes.instructions}</blockquote>
                               </div>
                           </div>
                         
                    </div>
                ))
            )}
         </div>
       </div>
     );
}
 
export default Nigeria ;