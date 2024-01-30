import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/components/header.scss';
import Logo from './logo';
import ConfirmModal from './modals/ConfirmModal';




const Header = () => {
    const {logout} = useAuth()
    const [confirmLogOut, setcConfirmLogOut] = useState(false)


    const toggleModal = () =>{
        setcConfirmLogOut(!confirmLogOut)
    }

    return (
        <div className="header">
            {confirmLogOut &&
               <ConfirmModal onClose={toggleModal}/>
            }
           <div className="logo_con">
               <Logo/>
            </div>
            <button onClick={toggleModal}  className="logOutBtn">
                Log Out
            </button>
        </div>
    )
}


export default Header