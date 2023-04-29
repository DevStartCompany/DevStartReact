import startLogo from '/logo765.png'
import './App.css'

function App() {

  return (
    <>
          <header>
            <div className='background'>
            <a href="https://vitejs.dev" target="_blank">
                <img src={startLogo} className="logo" alt="DevStart Logo" />
            </a>
            </div>
            
            <div className='buttons'>
              <a href=''>
                EQUIPE
              </a>
              <a href=''>
                SOBRE
              </a>
              <a href=''>
                CURSOS
              </a>
             </div>
      
            <div className='login'>
               <a href=''>
                ENTRAR
              </a>
            </div>
          </header>

    </>
  )
}

export default App
