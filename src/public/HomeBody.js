import { FaMailBulk } from "react-icons/fa"
import { PiWarningFill } from "react-icons/pi"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CgLoadbar } from "react-icons/cg";
const Body = ({home,isPending,error}) => {

 

 const[ p1,p2,popular,chef ] = home;

 const { name, img_url } = p2;

 const {img_url1,img_url2,img_url3,img_url4,img_url5,img_url6,img_url7,img_url8,img_url9,img_url10,img_url11,img_url12,img_url13} = popular;

 const { chef_img } = chef;

 let bgImage = {
    backgroundImage :'url("images/1 (2).jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
 }

    return ( 
        <div className="body-section">

              {isPending && <div className="pending-icon"><CgLoadbar /></div>}
              { error && (
                     <div className="warning">
                        <div className="icon"> <PiWarningFill /> </div>
                        <h1>could not fetch resourse or poor internet conection </h1>
                    </div>
                     )}

          
            <div className="first-body">
            <div className="first-quo">
                <h1>Let's Start cooking with popular recipes</h1>
                <div className="second-quo">
                     <p>want to learn how to cook but confused how to start ?</p>
                     <p>No need to worry again</p>
                </div>

                <div className="button-sec">
                  <Link to="/Recipe">
                      <li>get Started</li>
                  </Link>
                </div>
            </div>

            <div className="image-section">
                <img src={img_url1} alt="food-pic"/>
            </div>
          </div>
       
          <div className="second-body">
            <div className="sec-body">
              <div className="s-b-first-quo">
                <h1>popular food</h1>
                <div className="s-b-second-quo">
                  <p>we provide a variety of food and beverage recipes</p>
                  <p>with high taste from famous chefs</p>
                </div>
              </div>
            </div>

            <div className="s-b-image">
               <div className="first-img">
                  <div> <img src={img_url2}  alt="food-pic"/> </div>
                  <div> <img src={img_url}  alt="food-pic"/> </div>
                  <div> <img src={img_url9}  alt="food-pic"/> </div>
                  <div> <img src={img_url12} alt="food-pic" /> </div>
                  <div> <img src={img_url4}  alt="food-pic"className="fimg"/> </div>
               </div>

               <div className="second-img">
                  <div> <img src={img_url5}  alt="food-pic" /> </div>
                  <div> <img src={img_url6}  alt="food-pic"/> </div>
                  <div> <img src={img_url7}  alt="food-pic"/> </div>
                  <div> <img src={img_url8}  alt="food-pic"/> </div>
               </div>
            </div>
          </div>
        {/* third bosy section */}
          <div className="third-section">
             <div className="img">
             <img src={chef_img} alt="chef-picture" /> 
             </div>
             <div className="th-s-first-text">
                  <i>variety of food</i>
                  <h1>variety of food and beverage recipes</h1>
               <div className="th-s-second-text">
                  <blockquote>we have prepared a variety of food and beverage recipes from our famous chefs, with cooking steps and with good taste</blockquote>
               </div>
               <Link to="/Recipe">
                 <button>view menu</button>
               </Link>
             </div>
          </div>
       {/* fourth -section */}
          <div className="fourth-section"style={bgImage}>
             <div className="fourth-text">
                <h1>subscribe to get weekly</h1>
                  <h1>recipe updates</h1>
             </div>
             <div className="fourth-input">
                <input type="text" placeholder="enter your email" />
                <div className="icon">
                  <FaMailBulk />
                </div>
                <button type="submit">subscribe</button>
             </div>
          </div>

        </div>
        
         

          
     );
}
 
export default Body;