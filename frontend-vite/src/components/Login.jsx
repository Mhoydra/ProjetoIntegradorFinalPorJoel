import LoginNavbar from './loginComponents/LoginNavbar'
import LoginForms from './loginComponents/LoginForms'
import fundo from '../assets/LeandingPage/EdiçãoTecladoE.jpg'

export default function Login() {
  return(
    <div 
      className='bg-gray-950 bg-cover bg-center bg-no-repeat min-h-screen w-full'
      style={{ backgroundImage: `url(${fundo})`}}
    >
      <LoginNavbar/>
      <main className='flex items-center min-h-[calc(100vh-80px)] justify-center py-50'>
        <LoginForms/>
      </main>
    </div>
  )
}