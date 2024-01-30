import React from 'react';

import '../../styles/components/modal.scss'; // You can create a CSS file for styling
import { CheckIcon } from '../../assets/icons';
import {motion,  AnimatePresence } from 'framer-motion';


const SuccessModal = ({ message, onClose}) => {
  return (
    <div className="modal-overlay  cmodal">
          <AnimatePresence>

            <motion.div  className="modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}

          >

          <CheckIcon/>
          <p>{message}</p>
          <button  onClick={()=>onClose(false)}
          className='btn'>Close</button>
      </motion.div>
          </AnimatePresence>
    </div>
  );
};

export default SuccessModal;
