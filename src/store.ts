import { create } from 'zustand'
import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from './Schema/crypto-schema';
import { crypto } from './Types';
import { devtools } from 'zustand/middleware';

type useCryptoStoreType =  { 
    cryptocurrenciesState : crypto[]
    fetchCryptos: () => Promise<void>
}


async function getCryptos() {
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

export const useCryptoStore = create<useCryptoStoreType>()(
    
    devtools(
        ( set ) => ({ 

        cryptocurrenciesState : [] ,

        fetchCryptos : async () => { 
            const cryptocurrencies =  await getCryptos()

            set (() => ({
                cryptocurrenciesState : cryptocurrencies
            }))
            
        }
        }),
    )
)