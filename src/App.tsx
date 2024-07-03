import { useEffect } from "react"
import Formulario from "./Components/Formulario"
import { useCryptoStore } from "./store"

function App() {

  const fetchCyptos = useCryptoStore( store => store.fetchCryptos )

  // inicia la app y llamamos la funcion
  useEffect(() =>
    fetchCyptos()
  ,[])

  return (
    <>
      <div className="container">
        <h1 className="app-title"> 
          Cotizador de <span>Criptomonedas</span> 
        </h1>

        <div className="content">
          <Formulario/>
        </div>
      </div>
    </>
  )
}

export default App
