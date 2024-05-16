import { useNavigate } from 'react-router-dom'
import image3 from './assets/logoUbicom.png'
export default function Login() {
  const navigate = useNavigate()

  const handleLogIn = async (e) => {
    e.preventDefault()
    navigate('/')

  }
  return (
    <div className=' p-6 flex flex-col justify-center items-center w-full'>
        <div className='w-40 flex justify-center items-center mb-12'>
          <img  src={image3} alt="" className='w-full' />
        </div>
        <form className='flex gap-6 justify-center items-center flex-wrap bg-white p-6 rounded-lg shadow-lg'>
          <h1 className='text-xl font-semibold text-black/70'>Iniciar Sesión</h1>

          <label className='flex-grow '>
            <p className='flex justify-center text-[#868686]'>Usuario</p>
          <input
            type='text'
            name='username'
            autoComplete='current-username'
            className={`border  rounded-md p-1 bg-transparent flex-grow w-full autofill:bg-transparent outline-none`}
          />
        </label>
        <label className='flex-grow mb-3'>
          <p className='flex justify-center text-[#868686]'>Clave</p>
          <input
            type='password'
            name='password'
            autoComplete='new-password'
            className='border rounded-md p-1 bg-transparent autofill:bg-transparent outline-none w-full'
          />
        </label>
          <button 
            onClick={(e) => handleLogIn(e)} 
            className='bg-[#8bb2c2] text-white font-light text-xs rounded-md py-3 px-6 hover:bg-[#6eaac4] shadow-lg'>
            INGRESAR
          </button>
        </form>
    </div>
  )
}
