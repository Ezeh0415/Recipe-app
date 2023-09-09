import { AiFillWechat , AiTwotoneMail,AiOutlineCaretRight} from "react-icons/ai"
import { LuHelpingHand } from "react-icons/lu"
const Contact = () => {
    return ( 
        <div className="contact">
            
            <div className="main-contacts">
                  <div className="contact-card">
                    <h2><AiFillWechat /></h2>
                    <h1>chat support</h1>
                    <blockquote>our chat team is just a click away</blockquote>
                     <div className="text-icon">
                         <h3><a href="/">chat now </a></h3>
                         <i><AiOutlineCaretRight /></i>
                     </div>

                  </div>

                  <div className="contact-card">
                    <h2><AiTwotoneMail /></h2>
                    <h1>email support</h1>
                    <blockquote>prefer email? you can send us an email and we'll get back to you soon</blockquote>
                      <div className="text-icon">
                      <h3><a href="/">send email </a></h3>
                       <i><AiOutlineCaretRight /></i>
                      </div>
                  </div>

                  <div className="contact-card">
                    <h2><LuHelpingHand /></h2>
                    <h1>help center</h1>
                    <blockquote>our self-service help center is open 24/7 with 150 + article to help</blockquote>
                       <div className="text-icon">
                          <h3><a href="/">visit help center </a></h3>
                          <i><AiOutlineCaretRight /></i>
                       </div>
                  </div>
            </div>
              <div className="just-chat">
                 <h1>how we reply</h1>
                 <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam ipsa, quis dolorum enim laudantium. Hic delectus perferendis voluptatibus adipisci optio! Impedit unde blanditiis veritatis. Magni esse impedit recusandae earum id, non explicabo est debitis veniam rerum nesciunt hic enim, provident unde minus pariatur quae quas iure molestiae blanditiis eos! Nam dolore libero nulla itaque repellat nobis molestiae in, cum aperiam sapiente dignissimos unde incidunt excepturi molestias. Cumque laboriosam beatae eveniet provident tempore, vel, doloribus at libero laudantium debitis quia ipsam laborum commodi ipsum, vitae architecto perspiciatis excepturi repellat tempora reprehenderit maiores fugit. Eaque iste itaque explicabo enim cum labore recusandae! Delectus quo tempore quod optio modi, dolorem numquam, necessitatibus aspernatur adipisci quibusdam tenetur temporibus sed, voluptate autem ex consectetur expedita assumenda vero corrupti! Nesciunt, numquam. Harum sunt fuga adipisci iste beatae id magni est similique, voluptatem maxime nihil consequuntur ducimus dolor ea doloremque deleniti facilis deserunt repudiandae, velit, ex inventore odio eveniet fugiat! Eos perferendis libero soluta animi magnam voluptatibus, at dolor ex inventore accusantium facilis exercitationem illum vel repellat tenetur veritatis vitae tempora cupiditate incidunt deleniti expedita sed. Iusto beatae, aut excepturi nam nulla, omnis consequuntur vitae non velit ullam sunt perspiciatis odit vero magni libero aperiam placeat?</blockquote>
              </div>
        </div>
     );
}
 
export default Contact;