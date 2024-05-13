import { useState } from 'react'
import data from './assets/cierreDiario.json'
export default function CierreDiario(){
  const [selectedCompany, setSelectedCompany] = useState('Translebrija');
  const [selectedDate, setSelectedDate] = useState('');
  const [dataToShow, setDataToShow] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleButtonClick = () => {
    const filteredData = data[selectedCompany].filter(item => item.Fecha === selectedDate);
    setDataToShow(filteredData);
    setShowTable(true);
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-3 my-3'>
      <div className='flex gap-3 items-center'>
        <p className='w-28 flex'>Empresa:</p>
        <select value={selectedCompany} onChange={handleCompanyChange} className='py-2 px-6 outline-none bg-cyan-800 text-white border-none focus:border-none cursor-pointer'>
          <option value="Translebrija">Translebrija</option>
          <option value="Metropolitana">Metropolitana</option>
          <option value="Empresa04">Empresa04</option>
        </select>
      </div>

        <div className='flex gap-3 items-center'>
        <p className='w-28 flex'>Fecha:</p>
        <input type="date" className='border border-cyan-800 w-36' name='date' value={selectedDate} onChange={handleDateChange}/>
      </div>
      </div>
      <div className='flex justify-center items-center gap-6 mb-3'>
        <button onClick={handleButtonClick}  className='bg-cyan-800 hover:bg-cyan-700 text-white p-2 rounded-sm text-center w-40'>Consultar</button>
        <button onClick={handleButtonClick}  className='bg-cyan-800 hover:bg-cyan-700 text-white p-2 rounded-sm text-center w-40'>Cierre Dia</button>
      </div>

      {showTable && (
        <table className='w-full'>
          <thead className='border'>
            <tr className=' bg-cyan-700 text-white'>
              <th>Tipo</th>
              <th>Accion</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody className='border'>
            {dataToShow.map((item, index) => (
              <tr key={index} className='bg-gray-50'>
                <td>{item.Tipo}</td>
                <td>{item.Accion}</td>
                <td>{item.Cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

