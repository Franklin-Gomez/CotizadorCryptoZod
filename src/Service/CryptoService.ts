import { CryptoCurrenciesResponseSchema} from "../Schema/crypto-schema";
import axios from "axios";


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