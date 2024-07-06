import { useEffect, useState } from "react"
import { currencies } from "../Db/datos"
import { useCryptoStore } from "../store"
import { coinType } from "../Types"
import Alert from "./Alert"



export default function Formulario() {


    const fetchCoinList = useCryptoStore( (state) => state.fetchCoinList)
    const fetchData = useCryptoStore( (state) => state.fetchData)
    const coinlist = useCryptoStore( (state) => state.coinlist)

    const [ error , setError ] = useState(false)  
    
    const [ coin , setCoin  ] = useState<coinType>({ 
        Currency : '',
        CryptoCurrency : ''
    })

    useEffect( () => {
        fetchCoinList()
    },[])

    

    const handleChange = ( e : React.ChangeEvent<HTMLSelectElement> ) => { 
        setCoin({
            ...coin,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement> ) => { 
        e.preventDefault();

        if( Object.values( coin ).includes('') ) { 
            setError( true )
            return;
        }

        setError(false)
        fetchData( coin )

    }

    return (
        <form className="formulario" onSubmit={ handleSubmit } >

            { error && <Alert>llena esa monda</Alert>}

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
                <select name="CryptoCurrency" id="CryptoCurrency" onChange={ handleChange }> 

                    <option value="">--Seleccione La Crypto Moneda --</option>

                    { coinlist.map(( coin ) => (
                        <option 
                            value={coin.CoinInfo.Name}
                            key={coin.CoinInfo.Name}

                        >{ coin.CoinInfo.FullName}</option>
                    ))}

                </select>
            </div>

            <input type="submit" value="Buscar CryptoMoneda" />
        </form>
    )
}
