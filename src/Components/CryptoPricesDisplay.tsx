
import { priceType } from "../Types"

export default function CryptoPricesDisplay( {coinPrice} : {coinPrice : priceType} ) {

    return (
        
        <div className="cryptoContent">

            <img
                src={`https://cryptocompare.com/${coinPrice.IMAGEURL}`}
            />

            <div>
                <h1>Cotizacion</h1>

                <p>Precio: <span> {coinPrice.PRICE} </span></p>
                <p>Valor Max en 24h : <span> {coinPrice.HIGH24HOUR} </span></p>
                <p>Valor Min en 24h : <span> {coinPrice.LOW24HOUR} </span></p>
                <p>Intercambios en 24h : <span> {coinPrice.CHANGEPCT24HOUR} </span></p>
                <p>Market Cap: <span> {coinPrice.MKTCAP} </span></p>
                <p>Ultima Actualizacion: <span> {coinPrice.LASTUPDATE} </span></p>
            </div>
        </div>

    )
}
