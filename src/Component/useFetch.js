import { useEffect, useState } from "react";
import axios from "axios";


    const useFetch = (url) => {
      

        const [data, setData] = useState(null)
        const [isPending, setIsPending] = useState(false);
        const [error, setError] = useState(null)    
        const[record,setRecord] = useState([]);  
        const apikey = "23599c93-41cc46ef-855a-910d1bf29153"; 
        
        // const config = {
        //   headers: {
        //     'Authorization': 'Bearer  ${apikey} ',
        //   }
        // }
    
        useEffect(() => {
    
          const abortcont = new AbortController()
          
              setIsPending(true);
              axios.get(url , {
                params: {
                  api_key:apikey
                }
              })

              .then(res => {
                setData(res.data)
                setRecord(res.data)
              })

              .catch(err => {
               setError(err);
              })

              .finally(() => {
               setIsPending(false);
              })
            
              
           
            return () => abortcont.abort();
    
          }, [url]);


          const refetch =()=> {
            setIsPending(true);
               axios.get(url)

               .then(res => {
                 setData(res.data)
                 setRecord(res.data)
               })

               .catch(err => {
                setError(err);
               })

               .finally(() => {
                setIsPending(false);
               });
          };

          const Filter = (e) => {
            setRecord(data.filter(i => i.name.toLowerCase().includes(e.target.value)));
           }

          

    
          return {data, isPending, error,refetch,record,Filter };
    }
    
    export default useFetch;