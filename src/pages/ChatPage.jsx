import ChatSection from "../components/ChatSection";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import { useChat } from "../contexts/ChatContext";
import '../styles/chatpage.scss';
import { AnimatePresence, motion }   from "framer-motion"

const  ChatPage =() => {
    const {isBarOpen} = useChat()

    return(
        <div className="chatpage">
            <Header/>

            <AnimatePresence>

            <div  className="chat_con">
                <motion.div initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                
                className={`bar_con  ${isBarOpen ? "mobile_bar_con" : ''} `}>
                   <SideBar/>
                </motion.div>
                
                <div className="mess_con">
                    <ChatSection />
                </div>
            </div>

            </AnimatePresence>
               
        </div>
    )
}


export default ChatPage