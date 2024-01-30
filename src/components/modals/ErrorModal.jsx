import React from 'react';

import '../../styles/components/modal.scss'; // You can create a CSS file for styling
import {motion,  AnimatePresence } from 'framer-motion';


const ErrorModal = ({ message, onClose }) => {
  return (
    <AnimatePresence>
    <div className="modal-overlay">
      <motion.div  className="modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}

          >

        <div className="mheader">
          <span>An Error Occur</span>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="content">
          <p>{message}</p>
        </div>

          </motion.div>
    </div>

    </AnimatePresence>
  );
};

export default ErrorModal;
