import { CryptoCurrenciesResponseSchema} from "../Schema/crypto-schema";
import axios from "axios";
import { pair } from "../Types";


export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD';

    try {
        
        const {data : { Data }} = await axios( url )
        const resultado = CryptoCurrenciesResponseSchema.safeParse( Data)
        
        if( resultado.success) { 
            return resultado.data
        }

    } catch (error) {
        console.log( error )
    }
}

export async function fetchCurrentCryptoPrice ( pair : pair) {  

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`;

    try {
        
        const {data : { DISPLAY }} = await axios( url )
        console.log(DISPLAY[pair.criptocurrency][pair.currency] )
        // const resultado = CryptoCurrenciesResponseSchema.safeParse( Data)
        
        // if( resultado.success) { 
        //     return resultado.data
        // }

    } catch (error) {
        console.log( error )
    }

}