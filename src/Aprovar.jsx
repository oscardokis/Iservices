import { useState } from "react"
import { useContext } from "react"
import { GeneralContext } from "./context"


export function Aprovar () {
  const [ok, setOk] = useState(false)
  const { validarToken, setValidarToken } = useContext(GeneralContext)
  function handleOk(event) {
    event.preventDefault()
    setOk(!ok)
    setValidarToken(validarToken + 1)
  }
  return (
    <>
    {ok ?
          <button className='px-2 py-1 text-white bg-green-600 border border-solid' onClick={(event) => event.preventDefault()}>Aprovado</button>:
          <button className='px-2 py-1 text-white bg-cyan-800 border border-solid hover:bg-cyan-700' onClick={(event)=>handleOk(event)}>Aprovar</button>
    }
    </>
  )
}