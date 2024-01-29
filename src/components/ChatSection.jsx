import { useState } from "react";
import { DeleteIcon, PlusIcon, SendIcon } from "../assets/icons"
import '../styles/components/chatSection.scss';
import aiImg from "../assets/img/aiImg.png"
import gpt from "../assets/img/gpt.png"
import sender from "../assets/img/sender.png"
import HamburgerMenu from "./Hamburger";



const ChatSection =() => {
    const [isBarOpen, setIsBarOpen] = useState(false);
   
  
    const handleTextareaResize = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
      };

    return (
       <div className="chatSection">
           <div  className="chatHeader">
            <div className="recipientId">
                <div className="botImgCon">
                 <img src={aiImg} alt="chatbot"  />
                </div>
                <p>ChatBot</p>
            </div>
            <div className="menuBurger">
               <HamburgerMenu  setIsBarOpen={setIsBarOpen} isBarOpen={isBarOpen} />
            </div>
           </div>          
           <div className="conversation_con">
                 
                 <div className="messageSection">
                      <p>Jan 27, 12:53PM</p>
                 </div>
                 <div className="messageSection">
                      <div className="messageCon " >
                                    <div className="chatImgCon">
                                        <img src={aiImg} alt="chatbot"  />
                                    </div>
                                    <div className="messageContent">
                                        <p>How can I help you today?</p>
                                    </div>
                      </div>
                 </div>
                 <div className="messageSectionSender">
                      <div className="messageCon " >
                                    <div className="chatImgCon">
                                        <img src={sender} alt="chatbot"  />
                                    </div>
                                    <div className="messageContent">
                                        <p>How can I help you today?</p>
                                    </div>
                      </div>
                 </div>

                 
                 <div className="messageSection">
                      <div className="messageCon " >
                                    <div className="chatImgCon">
                                        <img src={aiImg} alt="chatbot"  />
                                    </div>
                                    <div className="messageContent">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra suscipit turpis, sed pellentesque arcu sollicitudin ut. Morbi metus dui,
                                             scelerisque id consectetur quis, accumsan id ipsum.</p>
                                             <div className="gptImgCon">
                                               <img src={gpt} alt="imggpt"  />
                                            </div>
                                    </div>
                      </div>
                 </div>
          
           </div>
           <div className="textAreaCon" >
              <textarea       onInput={handleTextareaResize}
                 placeholder="Reply to chatbot"
               />
               <div className="sendIcon">

               <SendIcon/>
               </div>
           </div>
       </div>
    )
}


export default ChatSection