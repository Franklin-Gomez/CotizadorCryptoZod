import { coinListsSchema, coinPriceSchema } from "../Schema/Schemas"
import axios from "axios"
import { coinType } from "../Types"


export const coinlist =  async () => { 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    try {
        
        const {data : { Data } } = await axios( url  )
        const resultado = coinListsSchema.safeParse( Data )
        
        if( resultado.success ) { 
            return resultado.data
        }

    } catch (error) {
        console.log(error)
    }
} 


export const fetchCurrentCryptoPrice  = async ( { CryptoInfo } : { CryptoInfo : coinType } ) => { 
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${CryptoInfo.CryptoCurrency}&tsyms=${CryptoInfo.Currency}`

    try {
        
        const {data : { DISPLAY }} = await axios ( url )
        const resultado = coinPriceSchema.safeParse( DISPLAY[CryptoInfo.CryptoCurrency][CryptoInfo.Currency] )

        if( resultado.success) { 
            return resultado.data
        }

    } catch (error) {
        console.log( error )
    }
}