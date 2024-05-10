import { useState } from 'react';

export default function Tarifas() {
  // Initialize with sample data for each company
  const initialData = {
    Translebrija: [
      { id: 1, numTarifa: 1, tarifa: "1000" },
      { id: 2, numTarifa: 2, tarifa: "1500" },
      { id: 3, numTarifa: 3, tarifa: "2000" }
    ],
    Unitransa: [
      { id: 1, numTarifa: 1, tarifa: "1100" },
      { id: 2, numTarifa: 2, tarifa: "1600" },
      { id: 3, numTarifa: 3, tarifa: "2100" }
    ],
    Empresa04: [
      { id: 1, numTarifa: 1, tarifa: "1200" },
      { id: 2, numTarifa: 2, tarifa: "1700" },
      { id: 3, numTarifa: 3, tarifa: "2200" }
    ]
  };

  const [data, setData] = useState(initialData);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({ id: null, numTarifa: '', tarifa: '' });
  const [addFormData, setAddFormData] = useState({ numTarifa: '', tarifa: '' });
  const [selectedCompany, setSelectedCompany] = useState('Translebrija');

  // Function to handle form change for editing
  const handleEditFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // Function to handle form change for adding
  const handleAddFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  // Function to handle the Edit button
  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditRowId(item.id);

    const formValues = {
      id: item.id,
      numTarifa: item.numTarifa,
      tarifa: item.tarifa
    };

    setEditFormData(formValues);
  };

  // Function to handle saving an edit
  const handleSaveClick = () => {
    const editedItem = {
      id: editRowId,
      numTarifa: editFormData.numTarifa,
      tarifa: editFormData.tarifa
    };

    const newData = data[selectedCompany].map((item) => (item.id === editRowId ? editedItem : item));

    setData({...data, [selectedCompany]: newData});
    setEditRowId(null);
  };

  // Function to handle canceling an edit
  const handleCancelClick = () => {
    setEditRowId(null);
  };

  // Function to handle deleting a row
  const handleDeleteClick = (itemId) => {
    const newData = data[selectedCompany].filter((item) => item.id !== itemId);
    setData({...data, [selectedCompany]: newData});
    if (editRowId === itemId) {
      setEditRowId(null); // Reset editing if the current edit row is deleted
    }
  };

  // Function to handle adding a new row
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: data[selectedCompany].length > 0 ? Math.max(...data[selectedCompany].map(item => item.id)) + 1 : 1,
      numTarifa: addFormData.numTarifa,
      tarifa: addFormData.tarifa
    };

    const newData = [...data[selectedCompany], newItem];
    setData({...data, [selectedCompany]: newData});
    setAddFormData({ numTarifa: '', tarifa: '' });
  };

  // Function to handle company selection
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    setEditRowId(null); // Reset any active editing when changing companies
  };

  return (
    <div className='max-w-screen-lg m-auto'>
      <div className='flex justify-start items-center p-3 gap-6 bg-cyan-700/95 my-3 text-white'>
        <label className='mr-2'>Seleccionar empresa:</label>
        <select value={selectedCompany} onChange={handleCompanyChange} className='py-2 px-6 outline-none bg-cyan-800 text-white border-none focus:border-none'>
          <option value="Translebrija" className='p-3 mb-2'>Translebrija</option>
          <option value="Unitransa">Unitransa</option>
          <option value="Empresa04">Empresa 04</option>
        </select>
      </div>

      <table className='flex flex-col justify-center items-center w-full'>
        <thead className='w-full'>
          <tr className='flex justify-between bg-cyan-700 text-white'>
            <th className='w-1/3 p-2'>Número de Tarifa</th>
            <th className='w-1/3 p-2'>Tarifa</th>
            <th className='w-1/3 p-2'>Cambiar / Eliminar</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {data[selectedCompany].map((item) => (
            <tr key={item.id} className='flex justify-between bg-gray-50'>
              {editRowId === item.id ? (
                <>
                  <td className='w-1/3 p-2'>
                    <input
                      type="text"
                      required
                      placeholder="Escriba número de Tarifa..."
                      name="numTarifa"
                      value={editFormData.numTarifa}
                      onChange={handleEditFormChange}
                      className='w-full text-center'
                    />
                  </td>
                  <td className='w-1/3 p-2'>
                    <input
                      type="text"
                      required
                      placeholder="Escriba la Tarifa..."
                      name="tarifa"
                      value={editFormData.tarifa}
                      onChange={handleEditFormChange}
                      className='w-full text-center'
                    />
                  </td>
                  <td className='w-1/3 flex justify-center items-center gap-3 p-2'>
                    <button type="button" className='bg-green-200 px-3 py-1' onClick={handleSaveClick}>Guardar</button>
                    <button type="button" className='bg-yellow-200 px-3 py-1' onClick={handleCancelClick}>Cancelar</button>
                    <button type="button" className='bg-red-200 px-3 py-1' onClick={() => handleDeleteClick(item.id)}>Eliminar</button>
                  </td>
                </>
              ) : (
                <>
                  <td className='w-1/3 p-2 text-center'>{item.numTarifa}</td>
                  <td className='w-1/3 p-2 text-center'>{item.tarifa}</td>
                  <td className='w-1/3 p-2 flex justify-center items-center gap-3'>
                    <button type="button" className='bg-cyan-700 text-white hover:bg-cyan-800 px-3 py-1' onClick={(event) => handleEditClick(event, item)}>
                      Editar
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleAddFormSubmit} className='w-full flex justify-center items-center bg-gray-200 p-4 mt-4'>
        <input
          type="text"
          name="numTarifa"
          required
          placeholder="Nuevo número de tarifa..."
          value={addFormData.numTarifa}
          onChange={handleAddFormChange}
          className='text-center w-1/3 bg-gray-200 hover:bg-gray-300 p-2 m-2'
        />
        <input
          type="text"
          name="tarifa"
          required
          placeholder="Nueva Tarifa..."
          value={addFormData.tarifa}
          onChange={handleAddFormChange}
          className='text-center w-1/3 bg-gray-200 hover:bg-gray-300 p-2 m-2'
        />
        <button type="submit" className='text-center w-1/3 bg-cyan-700 hover:bg-cyan-800 text-white font-medium px-3 py-1 m-2'>Agregar</button>
      </form>
    </div>
  );
}
