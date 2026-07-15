function CadastroNavbar(){
    return(
        <header className="flex items-center justify-between bg-blue-300 px-6 py-4 border-b text-white">
           
            <div className="flex items-center gap-3">
               <h2 className='font-semibold text-3xl'>Biblio<span className='text-purple-600'>verso</span></h2>
            </div>

             <nav className="flex gap-6 text-sm"> 
                <a href="">Ajuda</a>
                <a href="">Início</a>
            </nav>
        </header>
    )
}
export default CadastroNavbar       