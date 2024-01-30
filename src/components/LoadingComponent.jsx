import React from 'react';
import '../styles/components/loadingComponent.scss'; // You can create a CSS file for styling

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingComponent;