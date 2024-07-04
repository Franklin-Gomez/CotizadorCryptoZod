import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spinner from "./Spinner"


export default function CryptoPriceDisplay() {

    const result = useCryptoStore( ( store ) => store.result )
    const loading = useCryptoStore( ( store ) => store.loading )
    const hasResult = useMemo(() => !Object.values( result ).includes('') , [result] )

    return (
        <div className="result-wrapper">

            { loading ? <Spinner/>  : hasResult && 
                <>
                    <h2> Cotizacion </h2>

                    <div className="result">

                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen Cryptomodena"
                        />

                        <div>
                            <p>El precio es de : <span> { result.PRICE }</span></p>
                            <p>Precio mas Alto del Dia : <span> { result.HIGHDAY }</span></p>
                            <p>Precio mas Bajo del Dia : <span> { result.LOWDAY }</span></p>
                            <p>Variacion ultimas 24 Horas : <span> { result.CHANGEPCT24HOUR }</span></p>
                            <p>Ultima vez Actualizado : <span> { result.LASTUPDATE }</span></p>
                        </div>
                    </div>
            
                </>
            }
        </div>
    )
}
