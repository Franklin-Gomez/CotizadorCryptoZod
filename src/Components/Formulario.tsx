import { useState } from "react"
import { currencies } from "../db/db"
import { useCryptoStore } from "../store"
import { pair } from "../Types"

export default function Formulario() {

    const cryptos = useCryptoStore( store => store.cryptocurrenciesState)

    const [ pair , setPair ] = useState<pair> ({
        currency : '',
        criptocurrency : ''
    })
    
    const handleChange = ( e : React.ChangeEvent<HTMLSelectElement> ) => { 
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form
            className="form"
        >
            <div className="field">
                <label htmlFor="currency">Moneda : </label>
                
                <select 
                    name="currency" 
                    id="currency"
                    onChange={ handleChange }
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
                    onChange={ handleChange }
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
