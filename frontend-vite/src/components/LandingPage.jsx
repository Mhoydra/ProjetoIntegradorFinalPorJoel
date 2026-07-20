import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigate = useNavigate()

  return (
      <nav className="flex items-center bg-blue-300 justify-between">
          <div className='m-5'>
            <h2 className='font-semibold text-3xl text-white'>
              Biblio
              <span className='text-purple-600'>
                verso
              </span>
            </h2>
          </div>
          <div>
            <button onClick={() => navigate('/login')}
            className='flex bg-purple-500 text-white px-6 py-3 rounded-2xl'>
              Fazer Login
            </button>
          </div>
    </nav>
  );
};

export default LandingPage;

       