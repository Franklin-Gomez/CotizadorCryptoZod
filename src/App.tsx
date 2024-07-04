import { useEffect } from "react"
import Formulario from "./Components/Formulario"
import { useCryptoStore } from "./store"
import CryptoPriceDisplay from "./Components/CryptoPriceDisplay"

function App() {

  const fetchCyptos = useCryptoStore( store => store.fetchCryptos )

  // inicia la app y llamamos la funcion
  useEffect(() => {
    fetchCyptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title"> 
          Cotizador de <span>Criptomonedas</span> 
        </h1>

        <div className="content">
          <Formulario/>
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App
