import CadastroNavbar from './cadastroComponents/CadastroNavbar'
import CadastroForms from './cadastroComponents/CadastroForms'


function Cadastro() {
  return(
    <div className='min-h-screen bg-black'>
      <CadastroNavbar/>
      <main className='flex justi'>
        <CadastroForms/>
      </main>
    </div>


  )
}

export default Cadastro