import { useNavigate } from "react-router-dom";
import Modal from './Modal';
import { useState } from "react";
const data = [
  {
    id: 1,
    leftData: 'Usuario',
    rightData: 'Carlos Fernei'
  },
  {
    id: 2,
    leftData: 'Tipo usuario',
    rightData: 'Recarga Tarjeta'
  },
  {
    id: 3,
    leftData: 'Saldo Actual',
    rightData: '23000'
  },
  {
    id: 4,
    leftData: 'Ultima transaccion',
    rightData: '17-dic-23'
  },
  {
    id: 5,
    leftData: 'Lugar transaccion',
    rightData: 'Bus Urbano'
  },
  {
    id: 6,
    leftData: 'Tipo transaccion',
    rightData: 'Consumo'
  },
  {
    id: 7,
    leftData: 'Total Transacciones',
    rightData: '32'
  },
];

export default function Home() { 
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleExit(event) {
    event.preventDefault();
    navigate('/Login');
  }

  function handlePQR(event) {
    event.preventDefault();
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleSubmitPQR(event) {
    event.preventDefault();
    // Handle form submission logic here
    setIsModalOpen(false);
  }

  return (
    <div className="flex-col justify-center items-center p-6">
      <h1 className="text-lg font-semibold mb-6">CONSULTA USUARIO FINAL</h1>
      <div className="flex flex-col justify-center gap-3 mb-6">
        {data.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span className="">{item.leftData}</span>
            <input
              className="border border-black p-2 outline-none w-2/4"
              type="text"
              value={item.rightData}
              readOnly
            ></input>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6">
        <button
          className="bg-[#8bb2c2] text-white font-light text-sm py-3 px-3 hover:bg-[#6eaac4] shadow-lg w-32"
          onClick={handlePQR}
        >
          Reportar PQR
        </button>
        <button
          className="bg-[#8bb2c2] text-white font-light text-sm py-3 hover:bg-[#6eaac4] shadow-lg w-32"
          onClick={handleExit}
        >
          Salir
        </button>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmitPQR} />
    </div>
  );
}