import CadastroNavbar from './cadastroComponents/CadastroNavbar'
import CadastroForms from './cadastroComponents/CadastroForms'


export default function Cadastro() {
  return(
    <div className='bg-gray-950 min-h-screen justify-center items-center'>
      <div>
        <CadastroNavbar/>
        <main className='min-h-[calc(100vh-80px)] flex justify-center py-50'>
          <CadastroForms/>
        </main>
      </div>
    </div>

  )
}