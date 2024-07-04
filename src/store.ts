import { create } from 'zustand'
import { crypto } from './Types';
import { devtools } from 'zustand/middleware';
import { getCryptos } from './Service/CryptoService';

type useCryptoStoreType =  { 
    cryptocurrenciesState : crypto[]
    fetchCryptos: () => Promise<void>
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
        })
    )
)