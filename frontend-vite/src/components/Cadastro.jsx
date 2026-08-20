import CadastroNavbar from './cadastroComponents/CadastroNavbar'
import CadastroForms from './cadastroComponents/CadastroForms'


export default function Cadastro() {
  return(
    <div className='bg-gray-950 justify-center items-center'>
      <div>
        <CadastroNavbar/>
        <main className='flex justify-center py-50'>
          <CadastroForms/>
        </main>
      </div>
    </div>

  )
}