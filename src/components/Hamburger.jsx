import '../styles/components/hamburger.scss';

const HamburgerMenu = ({setIsBarOpen, isBarOpen}) => {

  
    return (
      <div className={`hamburger-menu ${isBarOpen ? 'open' : ''}`} onClick={() =>setIsBarOpen(!isBarOpen)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  };
  

export default HamburgerMenu
  
  