const Modal = ({ show, onClose, onSubmit }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <form onSubmit={onSubmit}>
          <div className="flex justify-center items-center mb-4">
            <label className="text-gray-700 w-4/12">Tipo de PQR:</label>
            <select className="border border-gray-300 p-2 rounded w-4/12 outline-none">
              <option>Petición</option>
              <option>Queja</option>
              <option>Reclamo</option>
            </select>
          </div>
          <div className="mb-4">
            <textarea className="border border-gray-300 p-2 w-full rounded outline-none" rows="4"></textarea>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-[#8bb2c2] text-white font-light text-sm py-3 hover:bg-[#6eaac4] shadow-lg w-32"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white font-light text-sm py-3 hover:bg-gray-700 shadow-lg w-32"
            >
              Close
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;