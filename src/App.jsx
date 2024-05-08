import './App.css'
import burger from './assets/Burger.svg'
import { Aprovar } from './Aprovar'

function App() {
  return (
    <div className='max-w-screen-md m-auto'>
      <div className='bg-cyan-800 h-12 flex pl-3'>
      <img src={burger} alt="Logo"  className='w-9'/>
      </div>
      <hr className=''/>
      <h3 className='flex p-3 font-bold '>Datos Generales </h3>
      <hr />
      <form action="" className='flex flex-col gap-3 my-3'>
        <div className='flex gap-3 items-center'>
          <p className='w-28 flex'>Fecha</p>
          <input type="date" className='border border-cyan-800 w-36' />
        </div>
        <div className='flex gap-3'>
          <p className='w-28 flex'>Cantidad</p>
          <input type="number" min={0} className='border border-cyan-800 w-36'/>
        </div>
        <div className='flex gap-3'>
          <p className='w-28 flex'>Tipo Token</p>
          <select name="" id="" className='border border-cyan-800 w-36'>
            <option value="" className='p-2'>Venta tiquetes</option>
            <option value="">Recarga subsidiada</option>
            <option value="">Recarga QR</option>
          </select>
        </div>
        <div className='flex gap-9'>
          <div className='flex gap-3'>
            <p className='w-28 flex'>Valor Unitario</p>
            <input type="number" min={0} className='border border-cyan-800 w-36' />
          </div>
          <div className='flex gap-3'>
          <p className='w-28 flex'>Moneda</p>
          <select name="" id="" className='border border-cyan-800 w-36'>
            <option value="">COP</option>
            <option value="">USD</option>
          </select>
        </div>
        </div>
      </form>
      <hr />
      <h3 className='flex p-3 font-bold '>Usuarios Responsables</h3>
      <hr />
      <form action="" className='flex flex-col items-baseline gap-3 my-3 w-full flex-wrap'>
        <div className='flex justify-center items-center gap-3'>
          <p className='flex w-40'>Usuario Administrador</p>
          <input type="text" className='border border-cyan-800 px-3'/>
          <p>Clave</p>
          <input type="password" className='border border-cyan-800 px-3'/>
          <Aprovar/>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <p className='flex w-40'>Usuario Autoriza</p>
          <input type="text" className='border border-cyan-800 px-3' />
          <p>Clave</p>
          <input type="password" className='border border-cyan-800 px-3'/>
          <Aprovar/>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <p className='flex w-40'>Usuario Valida</p>
          <input type="text" className='border border-cyan-800 px-3'/>
          <p>Clave</p>
          <input type="password" className='border border-cyan-800 px-3'/>
          <Aprovar />
        </div>
      </form>
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
            <tr>
              <td>2021-09-01</td>
              <td>100</td>
              <td>Venta de tiquetes</td>
              <td>1.00</td>
              <td>USD</td>
            </tr>
            <tr>
              <td>2021-09-02</td>
              <td>200</td>
              <td>Recarga QR</td>
              <td>20000</td>
              <td>COP</td>
            </tr>
            <tr>
              <td>2021-09-03</td>
              <td>300</td>
              <td>Recarga subsiada</td>
              <td>10000</td>
              <td>COP</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-between mt-3'>
        <div className='flex gap-3'>
          <p>Registros recuperados</p>
          <p className=' font-semibold'>3</p> 
        </div>
        <button className='px-2 py-1 text-white bg-cyan-800 border border-solid'>Descargar</button>
      </div>
    </div>
  )
}

export default App
