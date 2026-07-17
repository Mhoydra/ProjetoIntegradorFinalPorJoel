import CadastroNavbar from './cadastroComponents/CadastroNavbar'
import CadastroForms from './cadastroComponents/CadastroForms'


export default function Cadastro() {
  return(
    <div>
      <div className='bg-white justify-center items-center'>
        <CadastroNavbar/>
        <main className='flex justify-center py-50'>
          <CadastroForms/>
        </main>
      </div>
    </div>

  )
}