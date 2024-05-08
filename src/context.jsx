/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState } from "react";

export const GeneralContext = createContext()

export const GeneralProvider = ({children}) => {
  const [validarToken, setValidarToken] = useState(0)
  return (
    <GeneralContext.Provider value={{validarToken, setValidarToken}}>
      {children}
    </GeneralContext.Provider>
  )
}