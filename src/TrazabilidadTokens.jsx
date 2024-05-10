import { useRef, useState } from 'react'
import tokensData from './assets/tokensData.json'
export default function TrazabilidadTokens() { 
  const [dataState, setDataState] = useState([])
  const form = useRef()
  function consultar(e) {
    e.preventDefault()
    const formData = new FormData(form.current)
    const tipoToken = formData.get('tipoToken')
    const accion = formData.get('accion')
    let fechaInicial = formData.get('fechaInicial')
    let fechaFinal = formData.get('fechaFinal')
    const idInicial = formData.get('idInicial')
    let idHasta = formData.get('idHasta')



    if( idHasta === "") {
      idHasta = 99999999
    }
    if(fechaFinal === ""){
      fechaFinal = "2030-09-30";
    }
    if(fechaInicial === ""){
      fechaInicial = "2010-09-30";
      console.log(fechaInicial)
    }

    const dataFilter = []
    const dateInitial = new Date(fechaInicial);
    const dateFinal = new Date(fechaFinal);
    
    if(dateInitial > dateFinal) return alert('La fecha inicial no puede ser mayor a la fecha final')
    if(idInicial > idHasta) return alert('El id inicial no puede ser mayor al id final')

    tokensData.forEach(token => {
      const dateActual = new Date(token.fecha);
      if(token.tipo === tipoToken || tipoToken === 'todos'){
        if(token.accion === accion || accion === 'todas'){
          if(dateActual >= dateInitial && dateActual <= dateFinal){
            if(token.id >= idInicial && token.id <= idHasta){
              dataFilter.push(token)
            }
          }
        }
      }
    })
    setDataState(dataFilter)
  }
  return (
    <div className="max-w-screen-lg m-auto">
    <form className='flex flex-col justify-between items-center gap-6 my-3' ref={form}>
      <div className='flex gap-12 w-full justify-center'>
        <div className='flex gap-3'>
          <p className='w-28 flex'>Tipo Token</p>
          <select name="tipoToken" id="tipoToken" className='outline-none border border-cyan-700 w-48'>
            <option value="todos" className='p-2'>Todos</option>
            <option value="Venta tiquetes" className='p-2'>Venta tiquetes</option>
            <option value="Recarga subsidiada">Recarga subsidiada</option>
            <option value="Recarga QR">Recarga QR</option>
          </select>
        </div>
        <div className='flex'>
          <p className='w-28 flex'>Accion</p>
          <select name="accion" id="accion" className='outline-none border border-cyan-700 w-48'>
            <option value="todas" className='p-2'>Todas</option>
            <option value="Creado">Creado</option>
            <option value="Reservado">Reservado</option>
            <option value="Consumido">Consumido</option>
            <option value="Trasladado">Trasladado</option>
            <option value="Anulado">Anulado</option>
          </select>
        </div>
      </div>
      <div className='flex gap-12'>
        <div className="flex gap-3 items-center">
          <p className='w-28 flex'>Fecha Inicial</p>
          <input type="date" className='outline-none border border-cyan-700 w-48' name='fechaInicial'/>
        </div>
        <div className="flex items-center">
          <p className='w-28 flex'>Fecha Final</p>
          <input type="date" className='outline-none border border-cyan-700 w-48' name='fechaFinal'/>
        </div>
      </div>
      <div className='flex gap-12'>
        <div className="flex gap-3 items-center">
          <p className='w-28 flex'>Id Inicial</p>
          <input type="number" className='outline-none border border-cyan-700 w-48' name='idInicial'/>
        </div>
        <div className="flex items-center">
          <p className='w-28 flex'>Id Hasta</p>
          <input type="number" className='outline-none border border-cyan-700 w-48' name='idHasta'/>
        </div>
      </div>
      <button className='bg-cyan-800 hover:bg-cyan-700 text-white p-2 rounded-sm text-center w-56' onClick={consultar}>Consultar</button>
      {dataState.length > 0 && <table className='w-full'>
        <thead className='border'>
          <tr className=' bg-cyan-700 text-white'>
            <th>IdToken</th>
            <th>Tipo</th>
            <th>Acción</th>
            <th>Fecha</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody className='border'>
          {dataState.map((token, index) => (
            <tr key={index} className='bg-gray-50'>
              <td>{token.id}</td>
              <td>{token.tipo}</td>
              <td>{token.accion}</td>
              <td>{token.fecha}</td>
              <td>{token.usuario}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </form>
    </div>
  )
}