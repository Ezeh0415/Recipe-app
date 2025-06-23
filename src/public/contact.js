import { AiFillWechat , AiTwotoneMail,AiOutlineCaretRight} from "react-icons/ai"
import { LuHelpingHand } from "react-icons/lu"
const Contact = () => {
    return ( 
        <div className="contact bg-white py-12 px-4 lg:px-16 text-green-800">
  {/* Contact Options */}
  <div className="main-contacts grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    {/* Chat Support */}
<div className="contact-card bg-white border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
  <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-4 text-3xl mx-auto">
    <AiFillWechat />
  </div>
  <h2 className="text-center text-xl font-semibold text-green-700 mb-2">
    Chat Support
  </h2>
  <p className="text-center text-sm text-gray-600 mb-4 px-2">
    Our chat team is just a click away to help you with any questions.
  </p>
  <div className="flex items-center justify-center text-green-600 hover:text-green-800">
    <a
      href="/"
      className="flex items-center gap-1 font-medium text-sm hover:underline"
    >
      Chat now <AiOutlineCaretRight className="mt-0.5" />
    </a>
  </div>
</div>

{/* Email Support */}
<div className="contact-card bg-white border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
  <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-4 text-3xl mx-auto">
    <AiTwotoneMail />
  </div>
  <h2 className="text-center text-xl font-semibold text-green-700 mb-2">
    Email Support
  </h2>
  <p className="text-center text-sm text-gray-600 mb-4 px-2">
    Prefer email? Send us a message and we’ll reply shortly.
  </p>
  <div className="flex items-center justify-center text-green-600 hover:text-green-800">
    <a
      href="/"
      className="flex items-center gap-1 font-medium text-sm hover:underline"
    >
      Send email <AiOutlineCaretRight className="mt-0.5" />
    </a>
  </div>
</div>


    {/* Help Center */}
   <div className="contact-card bg-white border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300">
  {/* Icon */}
  <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-4 text-3xl mx-auto">
    <LuHelpingHand />
  </div>

  {/* Title */}
  <h2 className="text-center text-xl font-semibold text-green-700 mb-2">
    Help Center
  </h2>

  {/* Description */}
  <p className="text-center text-sm text-gray-600 mb-4 px-2">
    Our Help Center is available 24/7 with over 150+ helpful articles to guide you through anything.
  </p>

  {/* CTA */}
  <div className="flex items-center justify-center text-green-600 hover:text-green-800">
    <a
      href="/"
      className="flex items-center gap-1 font-medium text-sm hover:underline"
    >
      Visit Help Center <AiOutlineCaretRight className="mt-0.5" />
    </a>
  </div>
</div>

  </div>

  {/* How We Reply */}
 <div className=" max-w-3xl mx-auto bg-green-50 rounded-lg shadow-md p-6 md:p-10 my-12">
  <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4 text-center">
    How We Reply
  </h2>
  <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
    We take every message seriously. Whether it's a chat, email, or help center request,
    our dedicated support team is here to assist you with fast and friendly responses.
    We aim to respond within a few hours, and provide clear, helpful guidance so you're
    never left stuck. Our support is active 7 days a week — because your experience matters.
  </p>
</div>

</div>
     );
}
 
export default Contact;