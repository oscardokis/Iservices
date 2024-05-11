import { useState } from "react";

export default function SegementoTarifas() {
  // Initialize with sample data for each company
  const initialData = {
    Translebrija: [
      { id: 1, segmentoIni: "Lebrija", tarifa: 2000, segmentoFin: "Lebrija" },
      { id: 2, segmentoIni: "Lebrija - Peaje", tarifa: 2500, segmentoFin: "Lebrija - Peaje" },
      { id: 3, segmentoIni: "Peaje - Giron", tarifa: 3000, segmentoFin: "Peaje - Giron" },
      { id: 4, segmentoIni: "Giron Bucaramanga", tarifa: 3500, segmentoFin: "Giron Bucaramanga" }
    ],
    Metropolitana: [
      { id: 1, segmentoIni: "Bucaramanga", tarifa: 2000, segmentoFin: "Bucaramanga" },
      { id: 2, segmentoIni: "Florida", tarifa: 2500, segmentoFin: "Florida" },
      { id: 3, segmentoIni: "Piedecuesta", tarifa: 3000, segmentoFin: "Piedecuesta" },
      { id: 4, segmentoIni: "Giron Bucaramanga", tarifa: 3500, segmentoFin: "Giron Bucaramanga" }
    ],
    Empresa04: [
      { id: 1, segmentoIni: "Segemento 01", tarifa: 2000, segmentoFin: "Segemento 01" },
      { id: 2, segmentoIni: "Segemento 02", tarifa: 2500, segmentoFin: "Segemento 02" },
      { id: 3, segmentoIni: "Segemento 03", tarifa: 3000, segmentoFin: "Segemento 03" },
      { id: 4, segmentoIni: "Segemento 04", tarifa: 3500, segmentoFin: "Segemento 04" }
    ]
  };

  const [data, setData] = useState(initialData);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({ id: null, segmentoIni: '', tarifa: '', segmentoFin: '' });
  const [selectedCompany, setSelectedCompany] = useState('Translebrija');
  const [newData, setNewData] = useState({ segmentoIni: '', tarifa: '', segmentoFin: '' });

  // Function to handle form change for editing
  const handleEditFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

  // Function to handle the Edit button
  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditRowId(item.id);

    const formValues = {
      id: item.id,
      segmentoIni: item.segmentoIni,
      tarifa: item.tarifa,
      segmentoFin: item.segmentoFin
    };

    setEditFormData(formValues);
  };

  // Function to handle saving an edit
  const handleSaveClick = () => {
    const editedItem = {
      id: editRowId,
      segmentoIni: editFormData.segmentoIni,
      tarifa: editFormData.tarifa,
      segmentoFin: editFormData.segmentoFin
    };

    const newData = data[selectedCompany].map((item) => (item.id === editRowId ? editedItem : item));

    setData({ ...data, [selectedCompany]: newData });
    setEditRowId(null);
  };

  // Function to handle canceling an edit
  const handleCancelClick = () => {
    setEditRowId(null);
  };

  // Function to handle deleting a row
  const handleDeleteClick = (itemId) => {
    const newData = data[selectedCompany].filter((item) => item.id !== itemId);
    setData({ ...data, [selectedCompany]: newData });
    if (editRowId === itemId) {
      setEditRowId(null); // Reset editing if the current edit row is deleted
    }
  };

  // Function to handle company selection
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
    setEditRowId(null); // Reset any active editing when changing companies
  };

  // Select options for segmentoIni and segmentoFin based on the selected company
  const segmentoOptions = {
    Translebrija: ["Lebrija", "Lebrija - Peaje", "Peaje - Giron", "Giron Bucaramanga"],
    Metropolitana: ["Bucaramanga", "Florida", "Piedecuesta", "Giron Bucaramanga"],
    Empresa04: ["Segemento 01", "Segemento 02", "Segemento 03", "Segemento 04"]
  };

  // Select options for tarifa
  const tarifaOptions = [2000, 2500, 3000, 3500];

  // Function to handle new data input change
  const handleNewDataChange = (event) => {
    const { name, value } = event.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to add a new row to the table
  const handleAddRow = () => {
    const newId = data[selectedCompany].length ? data[selectedCompany][data[selectedCompany].length - 1].id + 1 : 1;
    const newItem = {
      id: newId,
      segmentoIni: newData.segmentoIni,
      tarifa: Number(newData.tarifa),
      segmentoFin: newData.segmentoFin
    };
    if (!newItem.segmentoIni || !newItem.segmentoFin || !newItem.tarifa) {
      return;
    }
    const updatedData = [...data[selectedCompany], newItem];
    setData({ ...data, [selectedCompany]: updatedData });
    setNewData({ segmentoIni: '', tarifa: '', segmentoFin: '' }); // Reset the input fields
  };

  return (
    <div className='max-w-screen-lg m-auto'>
      <div className='flex justify-start items-center p-3 gap-6 my-3'>
        <label className='mr-2'>Seleccionar empresa:</label>
        <select value={selectedCompany} onChange={handleCompanyChange} className='py-2 px-6 outline-none bg-cyan-800 text-white border-none focus:border-none cursor-pointer'>
          <option value="Translebrija" className='p-3 mb-2'>Translebrija</option>
          <option value="Metropolitana">Metropolitana</option>
          <option value="Empresa04">Empresa 04</option>
        </select>
      </div>

      <table className='flex flex-col justify-center items-center w-full'>
        <thead className='w-full'>
          <tr className='flex justify-between items-center bg-cyan-700 text-white'>
            <th className='w-1/4 p-2'>Segmento Inicial</th>
            <th className='w-1/4 p-2'>Segmento Final</th>
            <th className='w-1/4 p-2'>Tarifa</th>
            <th className='w-1/4 p-2'>Cambiar / Eliminar</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {data[selectedCompany] && data[selectedCompany].map((item) => (
            <tr key={item.id} className='flex justify-between items-center bg-gray-50'>
              {editRowId === item.id ? (
                <>
                  <td className='w-1/4 m-2'>
                    <select
                      value={editFormData.segmentoIni}
                      name="segmentoIni"
                      onChange={handleEditFormChange}
                      className='w-full text-center outline-none border border-cyan-700 cursor-pointer'
                    >
                      {segmentoOptions[selectedCompany].map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                  <td className='w-1/4 m-2'>
                    <select
                      value={editFormData.segmentoFin}
                      name="segmentoFin"
                      onChange={handleEditFormChange}
                      className='w-full text-center outline-none border border-cyan-700 cursor-pointer'
                    >
                      {segmentoOptions[selectedCompany].map((option, index) => (
                        <option  key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                  <td className='w-1/4 m-2'>
                    <select
                      value={editFormData.tarifa}
                      name="tarifa"
                      onChange={handleEditFormChange}
                      className='w-full text-center outline-none border border-cyan-700 cursor-pointer'
                    >
                      {tarifaOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </td>
                  <td className='w-1/4 flex justify-center items-center gap-1 m-2'>
                    <button type="button" className='bg-green-200 px-1 py-1' onClick={handleSaveClick}>Guardar</button>
                    <button type="button" className='bg-yellow-200 px-1 py-1' onClick={handleCancelClick}>Cancelar</button>
                    <button type="button" className='bg-red-200 px-1 py-1' onClick={() => handleDeleteClick(item.id)}>Eliminar</button>
                  </td>
                </>
              ) : (
                <>
                  <td className='w-1/4 m-2 text-center'>{item.segmentoIni}</td>
                  <td className='w-1/4 m-2 text-center'>{item.segmentoFin}</td>
                  <td className='w-1/4 m-2 text-center'>{item.tarifa}</td>
                  <td className='w-1/4 m-2 flex justify-center items-center'>
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

      {/* Section to add new rows */}
      <div className="flex justify-between items-center gap-3 my-3">
        <select
          name="segmentoIni"
          value={newData.segmentoIni}
          onChange={handleNewDataChange}
          className="w-1/4 py-2 px-6 outline-none border border-cyan-700 cursor-pointer"
        >
          <option value="">Segmento Inicial</option>
          {segmentoOptions[selectedCompany].map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <select
          name="segmentoFin"
          value={newData.segmentoFin}
          onChange={handleNewDataChange}
          className="w-1/4 py-2 px-6 outline-none border border-cyan-700 cursor-pointer"
        >
          <option value="">Segmento Final</option>
          {segmentoOptions[selectedCompany].map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <select
          name="tarifa"
          value={newData.tarifa}
          onChange={handleNewDataChange}
          className="w-1/4 py-2 px-6 outline-none border border-cyan-700 cursor-pointer"
        >
          <option value="">Tarifa</option>
          {tarifaOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <button
          onClick={handleAddRow}
          className="bg-cyan-700 hover:bg-cyan-800 text-white px-4 py-2 w-1/4"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
