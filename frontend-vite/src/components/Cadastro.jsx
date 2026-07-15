import CadastroNavbar from './cadastroComponents/CadastroNavbar'
import CadastroForms from './cadastroComponents/CadastroForms'


function Cadastro() {
  return(
    <body className='bg-blue-100'>
      <div className='bg-blue-100 justify-center items-center'>
        <CadastroNavbar/>
        <main className='flex justify-center py-50'>
          <CadastroForms/>
        </main>
      </div>
    </body>

  )
}

export default Cadastro