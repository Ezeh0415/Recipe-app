import { useEffect, useState } from "react";
import axios from "axios";


    const useFetch = (url) => {

        const [data, setData] = useState(null)
        const [isPending, setIsPending] = useState(false);
        const [error, setError] = useState(null)       
        
    
        useEffect(() => {
    
          const abortcont = new AbortController()
            setTimeout(()=>{
              setIsPending(true);
              axios.get(url)

              .then(res => {
                setData(res.data)
              })

              .catch(err => {
               setError(err);
              })

              .finally(() => {
               setIsPending(false);
              })
            },1000)
              
           
            return () => abortcont.abort();
    
          }, [url]);


          const refetch =()=> {
            setIsPending(true);
               axios.get(url)

               .then(res => {
                 setData(res.data)
               })

               .catch(err => {
                setError(err);
               })

               .finally(() => {
                setIsPending(false);
               });
          };

          

    
          return {data, isPending, error,refetch };
    }
    
    export default useFetch;