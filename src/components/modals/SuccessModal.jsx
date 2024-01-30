import React from 'react';

import '../../styles/components/modal.scss'; // You can create a CSS file for styling
import { CheckIcon } from '../../assets/icons';


const SuccessModal = ({ message, onClose}) => {
  return (
    <div className="modal-overlay  cmodal">
      <div className="modal">
          <CheckIcon/>
          <p>{message}</p>
          <button  onClick={()=>onClose(false)}
          className='btn'>Close</button>
      </div>
    </div>
  );
};

export default SuccessModal;
