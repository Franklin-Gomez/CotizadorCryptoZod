import { currencies } from "../Db/datos"

export default function Formulario() {

    

    return (
        <form className="formulario" >
            <div className="field">
                <label htmlFor="Currency"> Moneda : </label>
                <select name="Currency" id="Currency">

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
