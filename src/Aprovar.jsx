import { useState } from "react"

export function Aprovar () {
  const [ok, setOk] = useState(false)
  function handleOk(event) {
    event.preventDefault()
    setOk(!ok)
  }
  return (
    <>
    {ok ?
          <button className='px-2 py-1 text-white bg-green-500 border border-solid' onClick={(event) => event.preventDefault()}>ok</button>:
          <button className='px-2 py-1 text-white bg-cyan-800 border border-solid' onClick={(event)=>handleOk(event)}>Aprovar</button>
    }
    </>
  )
}