import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../public/Home';
import Header from "../public/MainHeader";
import useFetch from "../Component/useFetch";
import Footer from '../public/Footer';
import Recipe from '../public/Recipe';
import About from '../public/About';
const MyRouter = () => {

    const {data:home,isPending,error} = useFetch(' http://localhost:8000/question')
    return ( 
        <div className="router-page">

            
             
             <Router>
               
              <div className="header">
               {  <Header  isPending={isPending} error={error}/>}
              </div>
                 <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route exact path="/Recipe">
                          <Recipe />
                      </Route>
                      <Route exact path="/About">
                          <About />
                      </Route>
                 </Switch>
              <div className="footer">
                  <Footer />
              </div>

             </Router>
        </div>
     )
}
 
export default MyRouter;