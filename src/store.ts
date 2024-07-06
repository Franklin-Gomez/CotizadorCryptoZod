// state with zustand
import { create } from "zustand"
import { coinListType, coinType, priceType } from "./Types"
import { coinlist , fetchCurrentCryptoPrice } from "./Service/CryptoService"
import { devtools } from "zustand/middleware"


type useCryptoStoreType =  { 
    coinlist : coinListType[]
    coinPrice : priceType
    loading : boolean
    fetchCoinList: () => void
    fetchData:  ( CryptoInfo : coinType ) => Promise<void>
}

export const useCryptoStore = create<useCryptoStoreType>()(
    devtools(
        
        ( set ) => ({ 

        coinlist : [],

        coinPrice : { 
            IMAGEURL: '',
            PRICE: '',
            LASTUPDATE: '',
            HIGH24HOUR: '',
            LOW24HOUR: '',
            MKTCAP: '',
            CHANGEPCT24HOUR: ''
        } ,

        loading : false,

        fetchCoinList : async  () => { 
            const cryptos =  await coinlist()

            set(() => ({
                coinlist :  cryptos
            }))
        },

        fetchData  : async ( CryptoInfo ) => { 
            set(() => ({ 
                loading : true
            }))

            const pricesCrypto = await fetchCurrentCryptoPrice( {CryptoInfo} )

            set(() => ({ 
                coinPrice : pricesCrypto,
                loading : false
            }))
        }
    } // cierre del set
)))