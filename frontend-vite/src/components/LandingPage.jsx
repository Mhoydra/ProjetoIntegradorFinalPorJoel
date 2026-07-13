import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <body className='bg-blue-100'>
      <nav className='bg-blue-300'>
        <div className='flex justify-between items-center p-5'>
          <h1 className='font-semibold text-3xl'>Biblio<span className='text-purple-600'>verso</span></h1>
          <button onClick={() => navigate('/login')}
          className='flex bg-purple-500 text-white px-6 py-3 rounded-2xl'>Fazer Login</button>
        </div>
      </nav>
    </body>
  );
};

export default LandingPage;