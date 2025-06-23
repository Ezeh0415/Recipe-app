import { FaCopyright, FaInstagramSquare,FaFacebookF,FaTwitter,FaLinkedinIn, FaYoutube } from "react-icons/fa"
const Footer = () => {
    return ( 
            <footer className="border-t-2 border-green-300 bg-green-50 text-green-900">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Dark Cloud Recipe</h2>
          <blockquote className="italic text-green-700 text-sm leading-relaxed">
            Dark Cloud is a website used to find a variety of famous Nigerian food recipes.
          </blockquote>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-green-800">
            <li className="hover:text-green-600 cursor-pointer">About Us</li>
            <li className="hover:text-green-600 cursor-pointer">Recipe</li>
            <li className="hover:text-green-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-green-800">
            <li className="hover:text-green-600 cursor-pointer">Our Recipe</li>
            <li className="hover:text-green-600 cursor-pointer">Subscribe</li>
            <li className="hover:text-green-600 cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-green-800">
            <li className="hover:text-green-600 cursor-pointer">Account</li>
            <li className="hover:text-green-600 cursor-pointer">Support Center</li>
            <li className="hover:text-green-600 cursor-pointer">Feedback</li>
            <li className="hover:text-green-600 cursor-pointer">Accessibility</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-green-800">
            <li>Questions or feedback?</li>
            <li>We'd love to hear from you.</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-green-200 mt-8 pt-6 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-green-700 text-sm">
        <p className="flex items-center gap-2 mb-4 md:mb-0">
          <FaCopyright /> Dark Cloud 2023, All rights reserved
        </p>
        <ul className="flex space-x-6 text-green-700 text-xl">
          <li className="hover:text-green-600 cursor-pointer"><FaTwitter /></li>
          <li className="hover:text-green-600 cursor-pointer"><FaLinkedinIn /></li>
          <li className="hover:text-green-600 cursor-pointer"><FaInstagramSquare /></li>
          <li className="hover:text-green-600 cursor-pointer"><FaFacebookF /></li>
          <li className="hover:text-green-600 cursor-pointer"><FaYoutube /></li>
        </ul>
      </div>
    </footer>
     );
}
 
export default Footer;