import './App.css'

import { GeneralProvider } from './context'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Home from './Home'
import CreacionTokens from './CreacionTokens'
import LogTokens from './LogTokens'
import Tarifas from './Tarifas'
import Segmentos from './Segmentos'
import SegementoTarifas from './SegementoTarifas'
import Navbar from './Navbar'

const AppRouter = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/CreacionTokens', element: <CreacionTokens /> },
    { path: '/LogTokens', element: <LogTokens /> },
    { path: '/Tarifas', element: <Tarifas /> },
    { path: '/Segmentos', element: <Segmentos /> },
    { path: '/SegmentoTarifas', element: <SegementoTarifas /> },

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
