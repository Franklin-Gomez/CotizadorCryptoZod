import { create } from 'zustand'
import { crypto, pair } from './Types';
import { devtools } from 'zustand/middleware';
import { getCryptos , fetchCurrentCryptoPrice } from './Service/CryptoService';

type useCryptoStoreType =  { 
    cryptocurrenciesState : crypto[]
    fetchCryptos: () => Promise<void>
    fetchData: ( pair : pair) => Promise<void>
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
            },

            fetchData : async ( pair ) => { 
                const cryptoInfo = await fetchCurrentCryptoPrice( pair )
                console.log( cryptoInfo )
                
            }
        })
    )
)