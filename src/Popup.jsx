import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    window.location.reload();
  }

  return (
    <>
      <button className="popup-button" onClick={togglePopup}>
        Add Reaminder
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Success!</h2>
            <p>Name of Medicine:</p>
            <p>Expiry Date:</p>
            <p>Reaminder Type: Notification</p>
            <button onClick={togglePopup&handleClick}>Add Another</button>
            <button onClick={togglePopup}><a href="http://localhost:3000/Home">Home</a></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;

