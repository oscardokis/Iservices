import { useRef, useState } from "react";
import { Aprovar } from './Aprovar'
const data = [
  {
    fecha: '2021-09-01',
    cantidad: 100,
    tipoToken: 'Venta de tiquetes',
    valorUnitario: 1.00,
    moneda: 'USD',
  },
  {
    fecha: '2021-09-02',
    cantidad: 200,
    tipoToken: 'Recarga QR',
    valorUnitario: 20000,
    moneda: 'COP',
  },
  {
    fecha: '2021-09-03',
    cantidad: 300,
    tipoToken: 'Recarga subsiada',
    valorUnitario: 10000,
    moneda: 'COP',
  },
]
export default function CreacionTokens() { 
  const [dataState, setDataState] = useState(data)
  const [validar, setValidar] = useState(false)
  const today = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(today);
  const form = useRef()

  function validarGuardar(e) {
    e.preventDefault()
    const formData = new FormData(form.current)
    const fecha = formData.get('fecha')
    const cantidad = formData.get('cantidad')
    const tipoToken = formData.get('tipoToken')
    const valorUnitario = formData.get('valorUnitario')
    const moneda = formData.get('moneda')
    if(!fecha || !cantidad || !tipoToken || !valorUnitario || !moneda) return alert('Por favor llenar todos los datos generales para crear un token')
    const newData = {
      fecha,
      cantidad,
      tipoToken,
      valorUnitario,
      moneda,
    }
    setSelectedDate(fecha)
    setDataState([newData, ...dataState])
    setValidar(true)
  }
  return (
    <div className='max-w-screen-md m-auto'>
    <hr className=''/>
    <h3 className='flex p-3 font-bold '>Datos Generales </h3>
    <hr />
    <form  action='submit' className='flex flex-col gap-3 my-3' ref={form}>
      <div className='flex gap-3 items-center'>
        <p className='w-28 flex'>Fecha</p>
        <input type="date" className='border border-cyan-800 w-36' name='fecha' defaultValue={selectedDate}/>
      </div>
      <div className='flex gap-3'>
        <p className='w-28 flex'>Cantidad</p>
        <input type="number" min={0} className='border border-cyan-800 w-36' name='cantidad'/>
      </div>
      <div className='flex gap-3'>
        <p className='w-28 flex'>Tipo Token</p>
        <select name="tipoToken" id="tipoToken" className='border border-cyan-800 w-36'>
          <option value="Venta tiquetes" className='p-2'>Venta tiquetes</option>
          <option value="Recarga subsidiada">Recarga subsidiada</option>
          <option value="Recarga QR">Recarga QR</option>
        </select>
      </div>
      <div className='flex gap-9'>
        <div className='flex gap-3'>
          <p className='w-28 flex'>Valor Unitario</p>
          <input type="number" min={0} className='border border-cyan-800 w-36' name='valorUnitario' />
        </div>
        <div className='flex gap-3'>
        <p className='w-28 flex'>Moneda</p>
        <select name="moneda" id="moneda" className='border border-cyan-800 w-36'>
          <option value="COP">COP</option>
          <option value="USD">USD</option>
        </select>
      </div>
      </div>
    </form>
    <hr />
    <h3 className='flex p-3 font-bold '>Usuarios Responsables</h3>
    <hr />
    <form action="" className='flex flex-col items-start gap-3 my-3 flex-wrap'>
      <div className='flex justify-start items-center gap-3'>
        <p className='flex w-40'>Usuario Administrador</p>
        <input type="text" className='border border-cyan-800 px-3'/>
        <p>Clave</p>
        <input type="password" className='border border-cyan-800 px-3'/>
        <Aprovar/>
      </div>
      <div className='flex justify-start items-center gap-3'>
        <p className='flex w-40'>Usuario Autoriza</p>
        <input type="text" className='border border-cyan-800 px-3' />
        <p>Clave</p>
        <input type="password" className='border border-cyan-800 px-3'/>
        <Aprovar/>
      </div>
      <div className='flex justify-start items-center gap-3'>
        <p className='flex w-40'>Usuario Valida</p>
        <input type="text" className='border border-cyan-800 px-3'/>
        <p>Clave</p>
        <input type="password" className='border border-cyan-800 px-3'/>
        <Aprovar />
      </div>
    </form>
    <div className='flex justify-center items-center mb-3'>
    {!validar ? (<button 
      className='border border-cyan-800 px-3 py-1 bg-cyan-800 text-white hover:bg-cyan-700' 
      onClick={(e) => validarGuardar(e)}>Validar</button>):(
      <h3 className='px-3 py-1 text-green-600 font-semibold ' >Datos validados exitosamente</h3>)}
    </div>
    <hr />
      <h3 className='flex p-3 font-bold '>Tokens Creados</h3>
    <hr />
    <div>
      <table className='w-full'>
        <thead className='border'>
          <tr className=' bg-cyan-700 text-white'>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Tipo Token</th>
            <th>Valor Unitario</th>
            <th>Moneda</th>
          </tr>
        </thead>
        <tbody className='border'>
          {dataState.map((item, index) => (
            <tr key={index} className='bg-gray-50'>
              <td>{item.fecha}</td>
              <td>{item.cantidad}</td>
              <td>{item.tipoToken}</td>
              <td>{item.valorUnitario}</td>
              <td>{item.moneda}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='flex justify-between mt-3'>
      <div className='flex gap-3'>
        <p>Registros recuperados</p>
        <p className=' font-semibold'>{dataState.length}</p> 
      </div>
      <button className='px-2 py-1 text-white bg-cyan-800 border border-solid hover:bg-cyan-700'>Descargar</button>
    </div>
  </div>
  )
}