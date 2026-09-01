import LoginNavbar from './loginComponents/LoginNavbar'
import LoginForms from './loginComponents/LoginForms'


export default function Login() {
  return(
    <div className='bg-gray-950 min-h-screen w-full'>
      <LoginNavbar/>
      <main className='flex items-center min-h-[calc(100vh-80px)] justify-center py-50'>
        <LoginForms/>
      </main>
    </div>
  )
}