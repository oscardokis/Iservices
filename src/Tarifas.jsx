import { useState } from 'react';

export default function Tarifas(){
  // Initialize with sample data
  const initialData = [
    { id: 1, numTokens: 150, tokens: "tokens 1" },
    { id: 2, numTokens: 300, tokens: "tokens 2" },
    { id: 3, numTokens: 200, tokens: "tokens 3" }
  ];

  const [data, setData] = useState(initialData);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({ id: null, numTokens: '', tokens: '' });

  // Function to handle form change
  const handleEditFormChange = (event) => {
    const fieldName = event.target.getAttribute('name');
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
      numTokens: item.numTokens,
      tokens: item.tokens
    };

    setEditFormData(formValues);
  };

  // Function to handle saving an edit
  const handleSaveClick = () => {
    const editedItem = {
      id: editRowId,
      numTokens: editFormData.numTokens,
      tokens: editFormData.tokens
    };

    const newData = [...data];
    const index = data.findIndex((item) => item.id === editRowId);
    newData[index] = editedItem;

    setData(newData);
    setEditRowId(null);
  };

  // Function to cancel the edit
  const handleCancelClick = () => {
    setEditRowId(null);
  };

  // Function to handle adding a new row
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: data.length + 1,
      numTokens: editFormData.numTokens,
      tokens: editFormData.tokens
    };

    const newData = [...data, newItem];
    setData(newData);
    setEditFormData({ id: null, numTokens: '', tokens: '' });
  };

  return (
    <div>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="numTokens"
          required="required"
          placeholder="Escriba numero Tokens..."
          value={editFormData.numTokens}
          onChange={handleEditFormChange}
        />
        <input
          type="text"
          name="tokens"
          required="required"
          placeholder="Enter tokens..."
          value={editFormData.tokens}
          onChange={handleEditFormChange}
        />
        <button type="submit">Add</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Numero de tokens</th>
            <th>Tokens</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {editRowId === item.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter number of tokens..."
                      name="numTokens"
                      value={editFormData.numTokens}
                      onChange={handleEditFormChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter tokens..."
                      name="tokens"
                      value={editFormData.tokens}
                      onChange={handleEditFormChange}
                    />
                  </td>
                  <td>
                    <button type="button" onClick={handleSaveClick}>Save</button>
                    <button type="button" onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.numTokens}</td>
                  <td>{item.tokens}</td>
                  <td>
                    <button type="button" onClick={(event) => handleEditClick(event, item)}>
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

