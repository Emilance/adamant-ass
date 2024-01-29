import '../styles/components/header.scss';
import Logo from './logo';




const Header = () => {

    return (
        <div className="header">
           <div className="logo_con">
               <Logo/>
            </div>
            <button  className="logOutBtn">
                Log Out
            </button>
        </div>
    )
}


export default Header