import { useEffect, useRef, useState } from "react";
import { DeleteIcon, PlusIcon, SendIcon } from "../assets/icons"
import '../styles/components/chatSection.scss';
import aiImg from "../assets/img/aiImg.png"
import gpt from "../assets/img/gpt.png"
import sender from "../assets/img/sender.png"
import img1 from "../assets/img/img1.jpeg"
import img3 from "../assets/img/img3.jpeg"
import img4 from "../assets/img/img4.jpeg"
import img5 from "../assets/img/img5.jpeg"
import img6 from "../assets/img/img6.jpeg"
import img8 from "../assets/img/img8.jpeg"
import img2 from "../assets/img/img2.jpeg"
import HamburgerMenu from "./Hamburger";
import { useChat } from "../contexts/ChatContext";
import { TypingDot } from "./TypingDot";
import { delay, getRandomValueFromArray } from "../utils/utilFunc";
import { useAuth } from "../contexts/AuthContext";


const imgArray = [img1, img2, img3, img4,img5, img6, img8, gpt]

const ChatSection =() => {
    const chatContainerRef =useRef(null); 
     const {isBarOpen, setIsBarOpen} = useChat()
     const {user} =useAuth()
     const [istyping, setIsTyping] = useState(false)
     const [messages, setMessage] = useState([])
     const [text, setText] = useState('')

  



      const botTyping = (param) => {
        setIsTyping(true);
      
        return new Promise((resolve) => {
          setTimeout(() => {
            setIsTyping(false);
            setMessage((prevMessages) => [...prevMessages, param]);
            resolve();
          }, 3000);
        });
      };

    //Here I purposely use another botTyping to avoid  the initial botTypinpg rendering twwice
      const ibotTyping = (param) => {
        setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessage([...messages, param]);
            resolve();
          }, 3000);

      };
      
      useEffect(() => {
        // Call botTyping function to simulate typing after component mounts
         ibotTyping({
            message: "How can I help you today?",
            attachment: null,
            sender: "bot",
            senderImg: aiImg
        });
       
      
      }, []);

      useEffect(() => {
        // Scroll to the bottom when chatMessages update
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      }, [messages, istyping]);
 
      const sendMessage =async (param)=> {
        switch (param) {
            case 'option A':
                await setMessage([...messages, {
                    message: "option A",
                    attachment: null,
                    sender: "user",
                    senderImg: sender
                }])

                await delay(1000)
                await botTyping({
                    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra suscipit turpis, sed pellentesque arcu sollicitudin ut. Morbi metus dui, scelerisque id consectetur quis, accumsan id ipsum.",
                    attachment: getRandomValueFromArray(imgArray),
                    sender: "bot",
                    senderImg: aiImg
                })

                break;
            case 'option B':
                setMessage([...messages, {
                    message: "option B",
                    attachment: null,
                    sender: user.name,
                    senderImg: sender
                }])

                botTyping({
                    message:"Hi " + user.name +  ", option B will generate a random picture for you, yippee!!",
                    attachment: getRandomValueFromArray(imgArray),
                    sender: "bot",
                    senderImg: aiImg,
                })
                break;
            case 'option C':
                setMessage([...messages, {
                    message: "option C , I send a random picture to my chatbot",
                    attachment: getRandomValueFromArray(imgArray),
                    sender: user.name,
                    senderImg: sender
                }])
                await delay(1000)
                botTyping({
                    message: "thanks " + user.name + ", this is a nice image",
                    attachment: null,
                    sender: "bot",
                    senderImg: aiImg,
                })
                break;
            default:
                setMessage([...messages, {
                    message: param,
                    attachment: null,
                    sender: user.name,
                    senderImg: sender
                }])
                await delay(1000)
                botTyping({
                    message: "finished!",
                    attachment: null,
                    sender: "bot",
                    senderImg: aiImg,
                })
          }

        
      } 

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
           <div  ref={chatContainerRef} className="conversation_con">
                 
                 <div className="messageSection">
                      <p>Jan 27, 12:53PM</p>
                 </div>
              
                 {messages  && messages.map((data, index) => {
                    return (
                        <div key={index} className={ data.sender === 'bot' ? "messageSection" : "messageSectionSender"}>
                            <div className="messageCon " >
                                            <div className="chatImgCon">
                                                <img src={data.senderImg} alt="chatbot"  />
                                            </div>
                                            <div className="messageContent">
                                                <p>{data.message}</p>
                                                 {data.attachment &&       
                                                    <div className="gptImgCon">
                                                        <img src={data.attachment} alt="imggpt"  />
                                                   </div>
                                                 }
                                            </div>
                            </div>
                      </div>
                    )
                 })}

                    
             

                    {istyping &&
                        <div className="messageSection">
                            <div className="messageCon " >
                                <div className="chatImgCon">
                                    <img src={aiImg} alt="chatbot"  />
                                </div>
                                <div className="messageContent">
                                    <TypingDot/>
                                </div>
                            </div>
                        </div>
                    }


                 </div>
              
                 <div className="message_options">
                      <div  onClick={() => sendMessage('option A')}
                       className="option">
                         <p>Option A</p>
                      </div>
                      <div  onClick={() => sendMessage('option B')}
                      className="option">
                         <p>Option B</p>
                      </div>
                      <div  onClick={() => sendMessage('option C')}
                      className="option">
                         <p>Option C</p>
                      </div>
                      <div  onClick={() => sendMessage('option D')}
                      className="option">
                         <p>Option D</p>
                      </div>

                      
                 </div>
           <div className="textAreaCon" >
              <textarea       onInput={handleTextareaResize}
                 placeholder="Reply to chatbot"
                 onChange={(e)=> setText(e.target.value)}
                 value={text}
             />
               <div   onClick={() =>{ sendMessage(text )
                     setText('')
               }} className="sendIcon">

               <SendIcon/>
               </div>
           </div>
       </div>
    )
}


export default ChatSection