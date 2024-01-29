import ChatSection from "../components/ChatSection";
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import '../styles/chatpage.scss';



const  ChatPage =() => {

    return(
        <div className="chatpage">
            <Header/>


            <div  className="chat_con">
                <div className="bar_con">
                   <SideBar/>
                </div>
                <div className="mess_con">
                    <ChatSection />
                </div>
            </div>
        </div>
    )
}


export default ChatPage