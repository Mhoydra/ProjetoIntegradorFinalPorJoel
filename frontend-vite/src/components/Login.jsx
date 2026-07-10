import LoginNavbar from './loginComponents/LoginNavbar'
import LoginForms from './loginComponents/LoginForms'


function Login() {
  return(
    <body className='bg-blue-100'>
      <LoginNavbar/>
      <main className='flex items-center justify-center'>
        <LoginForms/>
      </main>
    </body>
    


  )
}

export default Login