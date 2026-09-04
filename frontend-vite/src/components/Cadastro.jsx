import CadastroNavbar from './cadastroComponents/CadastroNavbar'
import CadastroForms from './cadastroComponents/CadastroForms'
import fundo from '../assets/LeandingPage/BaixoMaisClaroR.jpg'

export default function Cadastro() {
  return(
    <div className='bg-gray-950 min-h-screen justify-center items-center'>
      <div>
        <CadastroNavbar/>
        <main 
        className='min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat flex justify-center py-50'
        style={{ backgroundImage: `url(${fundo})`}}
        >
          <CadastroForms/>
        </main>
      </div>
    </div>
  )
}