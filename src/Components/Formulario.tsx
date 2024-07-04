import { currencies } from "../db/db"
import { useCryptoStore } from "../store"

export default function Formulario() {

    const cryptos = useCryptoStore( store => store.cryptocurrenciesState)

    return (
        <form
            className="form"
        >
            <div className="field">
                <label htmlFor="currency">Moneda : </label>
                
                <select 
                    name="currency" 
                    id="currency"
                >

                    <option value=""> --Seleccione La Moneda -- </option>
                    { currencies.map((currency) =>(

                        <option 
                            value={currency.code}
                            key={currency.code} 
                        >  {currency.name} </option>

                    ))}
                </select>

            </div>

            <div className="field">
                <label htmlFor="criptocurrency">Criptomoneda : </label>
                
                <select 
                    name="criptocurrency" 
                    id="criptocurrency"
                >

                    <option value=""> --Seleccione La Crypto -- </option>
                    { cryptos.map( (crypto) => (
                        <option 
                            value={crypto.CoinInfo.Name}
                            key={crypto.CoinInfo.FullName}
                        
                        > {crypto.CoinInfo.FullName}</option>
                    ))}
                </select>

            </div>

            <input type="submit" value="Cotizar" />
        </form>
    )
}
