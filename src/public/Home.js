import useFetch from "../Component/useFetch";
import HomeBody from "./HomeBody";
import { PiWarningFill } from "react-icons/pi"
const Home = () => {

const {data:home,isPending,error} = useFetch(' http://localhost:8000/question')

 
    return ( 
        <div className="main-page">

          <hr></hr>
          {isPending && <h1>Loading...</h1>}
              { error && (
                     <div className="warning">
                        <div className="icon"> <PiWarningFill /> </div>
                        <h1>could not fetch resourse or poor internet conection </h1>
                    </div>
                     )}
         
          {home && <HomeBody home={home} ispending={isPending} error={error}/>}
        </div>
     );
}
 
export default Home;