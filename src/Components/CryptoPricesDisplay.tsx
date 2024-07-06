import { useCryptoStore } from "../store"

export default function CryptoPricesDisplay() {

    const coinPrice = useCryptoStore( (state) => state.coinPrice)

    return (
        
        <div className="cryptoContent">

            <img
                src={`https://cryptocompare.com/${coinPrice.IMAGEURL}`}
            />

            <div>
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
