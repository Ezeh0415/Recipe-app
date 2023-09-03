import { FaCreativeCommonsSampling } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import { CgLoadbar } from "react-icons/cg";
import useFetch from "../Component/useFetch";

const Nigeria = () => {

    const {record,Filter,isPending,error} = useFetch('http://localhost:8500/recipes')


    return ( 

    <div className="ninja">

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

          {isPending && <div className="pending-icon"><CgLoadbar /></div>}

           { error && (
            <div className="warning">
               <div className="icon"> <PiWarningFill /> </div>
               <h1>could not fetch resourse or poor internet conection </h1>
           </div>
            )}

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