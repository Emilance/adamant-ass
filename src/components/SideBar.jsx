import { useState } from "react";
import { DeleteIcon, PlusIcon } from "../assets/icons"
import '../styles/components/sidebar.scss';


const SideBar =() => {
    const [chatNo, setChatNo] = useState([1, 2, 3])

    const addConveration = () => {
       setChatNo([...chatNo,  chatNo[-1] + 1])
    }
     
    const deleteConversation = (index) => {
        const updatedChats = [...chatNo];
        updatedChats.splice(index, 1);
        setChatNo(updatedChats);
      };
    return (
       <div className="sidebar">
           <div onClick={()=> addConveration()} className="sbtn add">
             <p>Conversations</p>
             <PlusIcon/>
           </div>
           <div className="conversation_con">
            {chatNo.map((data, index) => {
                return (
                    <div className="sbtn conv">
                    <p>Conversations 1</p>
                    <DeleteIcon/>
                   </div>
                   
                )
            })}
              <div className="sbtn active_conv ">
                    <p>Conversations 1</p>
                    <DeleteIcon/>
                   </div>
            
           </div>
       </div>
    )
}


export default SideBar