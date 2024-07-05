import { useEffect, useState } from "react"
import { currencies } from "../Db/datos"
import { useCryptoStore } from "../store"


export default function Formulario() {


    const fetchCoinList = useCryptoStore( (state) => state.fetchCoinList)
    const coinlist = useCryptoStore( (state) => state.coinlist)
    
    const [ coin , setCoin  ] = useState({ 
        Currency : '',
        CryptoCurrency : ''
    })

    useEffect( () => {
        fetchCoinList()
    },[])

    console.log( coinlist )

    const handleChange = ( e : React.ChangeEvent<HTMLSelectElement>) => { 
        console.log( e.target.value )
    }

    return (
        <form className="formulario" >
            <div className="field">
                <label htmlFor="Currency"> Moneda : </label>
                <select name="Currency" id="Currency" onChange={ handleChange }>

                    <option value="">-- Seleccione La Moneda--</option>

                    { currencies.map ((currency) => (
                        <option 
                            value={currency.code}
                            key={currency.code}
                        >{currency.name}</option>
                    ))}

                </select>
            </div>

            <div className="field">
                <label htmlFor="CryptoCurrency"> Criptomoneda : </label>
                <select name="CryptoCurrency" id="CryptoCurrency"> 

                    <option value="">--Seleccione La Crypto Moneda --</option>

                    

                </select>
            </div>

            <input type="submit" value="Buscar CryptoMoneda" />
        </form>
    )
}
