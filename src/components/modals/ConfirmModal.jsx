import React from 'react';

import '../../styles/components/modal.scss'; // You can create a CSS file for styling
import { useAuth } from '../../contexts/AuthContext';
import {motion,  AnimatePresence } from 'framer-motion';


const ConfirmModal = ({ onClose }) => {
      const {user, logout} = useAuth()
    return (
        <AnimatePresence>
      <div className="modal-overlay">
        <motion.div
          className='modal'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}

          >
            
            <div className="mheader">
                <span>Confirm Log Out</span>
                <button onClick={onClose}>&times;</button>
            </div>
            <div className="content">
                <p>Hi {user.name} are you sure you want to logout ?</p>
                <button  onClick={()=> logout()} 
                className='btn'>Log Out</button>
            </div>
            
        </motion.div>
      </div>

        </AnimatePresence>
    );
  };
  
  export default ConfirmModal;
  
