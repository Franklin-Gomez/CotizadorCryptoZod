
export default function Formulario() {
    return (
        <form className="formulario" >
            <div className="field">
                <label htmlFor="Currency"> Moneda : </label>
                <select name="Currency" id="Currency">

                    <option value="">-- Seleccione La Moneda--</option>

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
