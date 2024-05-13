import './App.css'

import { GeneralProvider } from './context'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from './Home'
import CreacionTokens from './CreacionTokens'
import TrazabilidadTokens from './TrazabilidadTokens'
import Tarifas from './Tarifas'
import Segmentos from './Segmentos'
import SegementoTarifas from './SegementoTarifas'
import Navbar from './Navbar'
import CierreDiario from './CierreDiario'

const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/CreacionTokens', element: <CreacionTokens /> },
    { path: '/TrazabilidadTokens', element: <TrazabilidadTokens /> },
    { path: '/Tarifas', element: <Tarifas /> },
    { path: '/Segmentos', element: <Segmentos /> },
    { path: '/SegmentoTarifas', element: <SegementoTarifas /> },
    { path: '/CierreDiario', element: <CierreDiario /> },

  ])
  return routes
}
function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRouter />
      </BrowserRouter>
    </GeneralProvider>
  )
}

export default App
