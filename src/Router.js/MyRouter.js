import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "../public/MainHeader";
import Footer from '../public/Footer';
import About from '../public/About';
import Contact from '../public/contact';
import Nigeria from '../public/RecipeRice';
import Body from '../public/HomeBody';
const MyRouter = () => {

    return ( 
        <div className="router-page">

            
             
             <Router>
               
              <div className="header">
                 <Header />
              </div>
                 <Switch>
                      <Route exact path="/">
                          <Body />
                      </Route>
                      <Route exact path="/Recipe">
                          <Nigeria />
                      </Route>
                      <Route exact path="/About">
                          <About />
                      </Route>
                      <Route exact path="/Contact">
                          <Contact />
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