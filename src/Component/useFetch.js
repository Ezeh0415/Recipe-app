import { useEffect, useState } from "react";
import axios from "axios";


    const useFetch = (url) => {
      
        const API_KEY = "f99e5380-d541-46db-a7b8-6d200b1bc1aa";

        const [data, setData] = useState(null)
        const [isPending, setIsPending] = useState(false);
        const [error, setError] = useState(null)    
        const[record,setRecord] = useState([]);   
        
    
        useEffect(() => {
    
          const abortcont = new AbortController()
          
              setIsPending(true);
              axios.get(url, {
                // params: {
                //   api_key:API_KEY
                // },
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