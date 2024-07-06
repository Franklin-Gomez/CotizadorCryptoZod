import CryptoPricesDisplay from "./Components/CryptoPricesDisplay"
import Formulario from "./Components/Formulario"

function App() {


  return (

    <>
      <div className="container">

        <h1 className="app-title"> Cotizador De <span>Criptomonedas</span></h1>

        <div className="app-content">
          <Formulario/>
          <CryptoPricesDisplay/>
        </div>
        
      </div>
    </>

  )
}

export default App
