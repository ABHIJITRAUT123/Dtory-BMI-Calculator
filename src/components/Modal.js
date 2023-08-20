import React from 'react';

const Modal = ({ isOpen, onClose, bmi }) => {
  return (
    <div className={`${isOpen ? '' : 'hidden'}`}>
      <div>
        <p>Your BMI is: {bmi}</p>
        <button
          className="btn btn-danger"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;