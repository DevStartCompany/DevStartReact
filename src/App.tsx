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
              <a>
                EQUIPE
              </a>
              <a>
                SOBRE
              </a>
              <a>
                CURSOS
              </a>
            </div>
          </header>

    </>
  )
}

export default App
