import { useAuth } from '../contexts/AuthContext';
import '../styles/components/header.scss';
import Logo from './logo';




const Header = () => {
    const {logout} = useAuth()

    return (
        <div className="header">
           <div className="logo_con">
               <Logo/>
            </div>
            <button onClick={logout}  className="logOutBtn">
                Log Out
            </button>
        </div>
    )
}


export default Header