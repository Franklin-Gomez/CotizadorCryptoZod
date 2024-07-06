import CryptoPricesDisplay from "./Components/CryptoPricesDisplay"
import Formulario from "./Components/Formulario"
import Spinner from "./Components/Spinner"
import { useCryptoStore } from "./store"

function App() {

  const coinPrice = useCryptoStore( (state) => state.coinPrice)
  const loading = useCryptoStore((state) => state.loading)

  return (

    <>
      <div className="container">

        <h1 className="app-title"> Cotizador De <span>Criptomonedas</span></h1>

        <div className="app-content">
          <Formulario/>

          { loading ? 
            <div className="spinner">
              <Spinner/> 
            </div>
            
          
          :
          
          
            coinPrice.CHANGEPCT24HOUR && 
              <CryptoPricesDisplay 
                coinPrice={coinPrice}
              /> 
          }
          
        </div>
        
      </div>
    </>

  )
}

export default App
