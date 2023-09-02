import { FaCopyright, FaInstagramSquare,FaFacebookF,FaTwitter,FaLinkedinIn, FaYoutube } from "react-icons/fa"
const Footer = () => {
    return ( 
        <div className="footer">
           <div className="main-footer">
                <div className="name">
                        <h1>dark cloud recipe</h1>
                        <blockquote>dark cloud is an web site used to find a variety of famous nigerian foods recipe </blockquote>
                    </div>
                    <div className="about">
                        <h1>about</h1>
                        <ul>
                            <li>about us</li>
                            <li>recipe</li>
                            <li>contact</li>
                        </ul>
                    </div>
                    <div className="company">
                        <h1>company</h1>
                        <ul>
                            <li>our recipe</li>
                            <li>subscribe</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="support">
                        <h1>support</h1>
                        <ul>
                            <li>account</li>
                            <li>support center</li>
                            <li>Feedback</li>
                            <li>accebility</li>
                        </ul>
                    </div>
                    <div className="get-in-touch">
                        <h1>get in touch</h1>
                        <ul>
                            <li>question or feedback ?</li>
                            <li>we'd love to hear from you</li>
                        </ul>
                    </div>
           </div>
           <div className="links">
             <h1><FaCopyright />copyright, dark cloud 2023, all right reserve</h1>
             <div className="icons">
                <ul>
                    <li><FaTwitter /></li>
                    <li><FaLinkedinIn /></li>
                    <li><FaInstagramSquare /></li>
                    <li><FaFacebookF /></li>
                    <li><FaYoutube /></li>
                </ul>
             </div>
           </div>
        </div>
     );
}
 
export default Footer;