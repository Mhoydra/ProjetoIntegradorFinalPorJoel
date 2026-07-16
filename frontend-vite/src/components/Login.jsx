import LoginNavbar from './loginComponents/LoginNavbar'
import LoginForms from './loginComponents/LoginForms'


function Login() {
  return(
    <div>
      <LoginNavbar/>
      <main className='flex items-center justify-center py-50'>
        <LoginForms/>
      </main>
    </div>
  )
}

export default Login