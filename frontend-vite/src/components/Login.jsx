import LoginNavbar from './loginComponents/LoginNavbar'
import LoginForms from './loginComponents/LoginForms'


export default function Login() {
  return(
    <body className='bg-gray-950'>
      <LoginNavbar/>
      <main className='flex items-center justify-center py-50'>
        <LoginForms/>
      </main>
    </body>
  )
}