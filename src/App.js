import { useState } from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import BMIForm from './components/BMIForm';
import Modal from './components/Modal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bmi, setBMI] = useState(0);

  const showModal = (bmiValue) => {
    setBMI(bmiValue);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setBMI(0);
  };

  return (
    <div className="App">
      <h1 className="mt-5">Dtory BMI Calculator</h1>
      <BMIForm showModal={showModal} />
      <Modal isOpen={modalOpen} onClose={closeModal} bmi={bmi} />
    </div>
  );
}
