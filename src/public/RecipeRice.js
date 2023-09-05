import { FaCreativeCommonsSampling } from "react-icons/fa";
import { PiWarningFill } from "react-icons/pi";
import { CgLoadbar } from "react-icons/cg";
import useFetch from "../Component/useFetch";
import { useState } from "react";

const Nigeria = () => {

   const apikey = "23599c93-41cc46ef-855a-910d1bf29153";

    const {record,Filter,isPending,error} = useFetch("https://forkify-api.herokuapp.com/api/v2/recipes");
    // const {data} = useFetch("https://forkify-api.herokuapp.com/api/v2/recipes")
    const [CurrentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = CurrentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = record.slice(firstIndex,lastIndex);
    const npage = Math.ceil(record.length / recordsPerPage);
    const number = [...Array(npage + 1).keys()].slice(1)

 console.log(record);

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
                 records.map((r,i) => (
                    <div className="recipe-preview" key={ i }>
                        
                           <div className="cards">
                               <div className="card">
                                   <img src={r.image} />
                                   <h2>{r.name}</h2>
                                   <blockquote>{r.description}</blockquote>
                                   <h4>INGREDIENTS</h4>
                                   <blockquote>{r.ingredients}</blockquote>
                                   <h4>INSTRUCTIONS</h4>
                                   <blockquote>{r.instructions}</blockquote>
                               </div>
                           </div>
                         
                    </div>
                ))
            )}
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
       </div>
     );

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