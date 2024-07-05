import { create } from 'zustand'
import { crypto, CryptoPrice, pair } from './Types';
import { devtools } from 'zustand/middleware';
import { getCryptos , fetchCurrentCryptoPrice } from './Service/CryptoService';

type useCryptoStoreType =  { 
    cryptocurrenciesState : crypto[]
    result : CryptoPrice
    loading : boolean
    fetchCryptos: () => Promise<void>
    fetchData: ( pair : pair) => Promise<void>
}


export const useCryptoStore = create<useCryptoStoreType>()(
    
    devtools(
        ( set ) => ({ 

            cryptocurrenciesState : [] ,

            result : {    
                IMAGEURL: '',
                PRICE : '',
                HIGHDAY : '',
                LOWDAY : '',
                CHANGEPCT24HOUR : '',
                LASTUPDATE : ''
            },  // o {} as CryptoPrice

            loading : false ,

            fetchCryptos : async () => { 
                const cryptocurrencies =  await getCryptos()

                set (() => ({
                    cryptocurrenciesState : cryptocurrencies
                }))
            },

            fetchData : async ( pair ) => { 

                set (() => ({
                    loading : true
                }))

                const cryptoInfo = await fetchCurrentCryptoPrice( pair )

                set (() => ({
                    result :  cryptoInfo ,
                    loading : false
                }))
                
            }
        })
    )
)