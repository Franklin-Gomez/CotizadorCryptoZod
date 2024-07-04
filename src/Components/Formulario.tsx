import { useState } from "react"
import { currencies } from "../db/db"
import { useCryptoStore } from "../store"
import { pair } from "../Types"
import Alert from "./Alert"

export default function Formulario() {

    const cryptos = useCryptoStore( store => store.cryptocurrenciesState)

    const [ pair , setPair ] = useState<pair> ({
        currency : '',
        criptocurrency : ''
    })
    
    const [ error , setError ] = useState('')

    const handleChange = ( e : React.ChangeEvent<HTMLSelectElement> ) => { 
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = ( e  : React.FormEvent<HTMLFormElement> ) => { 
        e.preventDefault()

        if ( Object.values(pair).includes('') ){ 
            setError('papi rellena esa monda')
            return;
        }

        setError('')
    }

    return (
        <form
            className="form"
            onSubmit={ handleSubmit  }
        >

            { error  && <Alert>{ error }</Alert>}

            <div className="field">
                <label htmlFor="currency">Moneda : </label>
                
                <select 
                    name="currency" 
                    id="currency"
                    onChange={ handleChange }
                    value={pair.currency}
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
                    value={pair.criptocurrency}
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
