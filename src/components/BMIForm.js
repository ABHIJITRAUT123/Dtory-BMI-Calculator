import React, { useState, useEffect } from 'react';

const BMIForm = ({ showModal }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!(weight && height));
  }, [weight, height]);

  const calculateBMI = () => {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    showModal(bmi);
  };
  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="weight">Weight (kg) :- </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height">Height (cm) :- </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label>Gender :- </label>
        <input type="radio" name='gender' /> Male
        <input type="radio" name='gender' /> Female
      </div>
      <button
        className="btn btn-primary"
        onClick={calculateBMI}
        disabled={isButtonDisabled}
      >
        Calculate BMI
      </button>
    </div>
  );
};

export default BMIForm;