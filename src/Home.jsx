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
    id: 6,
    leftData: 'Total Transacciones',
    rightData: '32'
  },
];

export default function Home() { 
  
  return (
    <div className="flex-col justify-center items-center p-6">
      <h1 className=" text-lg font-semibold mb-6">CONSULTA USUARIO FINAL</h1>
      <div className="flex flex-col  justify-center gap-3 mb-6">
        {
          data.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <span className="">{item.leftData}</span>
              <input className="border border-black p-2 outline-none" type="text" value={item.rightData}></input>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center gap-6">
      <button 
            className='bg-[#8bb2c2] text-white font-light text-sm py-3 px-3 hover:bg-[#6eaac4] shadow-lg w-32'>
            Reportar PQR
          </button>
          <button 
            className='bg-[#8bb2c2] text-white font-light text-sm py-3 hover:bg-[#6eaac4] shadow-lg w-32'>
            Salir
          </button>
      </div>
    </div>
  )
}