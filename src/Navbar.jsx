import { useEffect, useState } from 'react'
import burger from './assets/Burger.svg'
import { NavLink, useLocation } from 'react-router-dom'
const dataMenu = [
  {
    path: '/CreacionTokens',
    name: 'Creación de Tokens'
  },
  {
    path: '/TrazabilidadTokens',
    name: 'Trazabilidad de Tokens'
  },
  {
    path: '/Tarifas',
    name: 'Tarifas'
  },
  {
    path: '/Segmentos',
    name: 'Segmentos'
  },
  {
    path: '/SegmentoTarifas',
    name: 'Segmentos Tarifas'
  },
  {
    path: '/CierreDiario',
    name: 'Cierre Diario'
  },
  {
    path: '/Login',
    name: 'Iniciar Sesión'
  }

]
export default function Navbar () {
  const [burgerButton, setBurgerButton] = useState(false)
  const { pathname } = useLocation();
  const [title, setTitle] = useState('CREACIÓN DE TOKENS')
  useEffect(() => {
    const matchedItem = dataMenu.find(item => pathname.includes(item.path));
    if (matchedItem) {
      setTitle(matchedItem.name.toUpperCase());
    } else {
      setTitle('DEFAULT TITLE');
    }
  }, [pathname]);
  
  function handleBurger(item) {
    setBurgerButton(!burgerButton)
    setTitle(item.name.toUpperCase())
    
  }
  return (
    <div className='bg-cyan-800 h-12 flex pl-3 items-center w-full justify-center relative'>
      <img src={burger} alt="Logo"  className='w-9  absolute left-3 cursor-pointer' onClick={() => setBurgerButton(!burgerButton)}/>
      <h2 className='text-center text-white font-semibold'>{title}</h2>
      {burgerButton && (
        <ul className="flex flex-col text-md justify-center items-center absolute left-0 top-14 bg-cyan-800 rounded-sm min-w-36 text-white">
          {dataMenu.map((item, index) => (
            <li key={index} className='flex w-full' onClick={() => handleBurger(item)}><NavLink className='hover:bg-cyan-700 cursor- w-full p-3' to={item.path}>{item.name}</NavLink></li>
          ))}
        </ul>
      )}
    </div>
  )
}