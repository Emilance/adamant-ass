import React from 'react';

import '../../styles/components/modal.scss'; // You can create a CSS file for styling
import { useAuth } from '../../contexts/AuthContext';


const ConfirmModal = ({ onClose }) => {
      const {user, logout} = useAuth()
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="header">
            <span>Confirm Log Out</span>
            <button onClick={onClose}>&times;</button>
          </div>
          <div className="content">
            <p>Hi {user.name} Are you sure you want to logOut</p>
            <button  onClick={()=> logout()} 
            className='btn'>Log Out</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmModal;
  
