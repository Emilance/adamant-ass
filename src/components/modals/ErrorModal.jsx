import React from 'react';

import '../../styles/components/modal.scss'; // You can create a CSS file for styling


const ErrorModal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="header">
          <span>An Error Occur</span>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="content">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
