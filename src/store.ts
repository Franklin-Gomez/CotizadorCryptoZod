// state with zustand
import { create } from "zustand"
import { coinListType, coinType } from "./Types"
import { coinlist , fetchCurrentCryptoPrice } from "./Service/CryptoService"


type useCryptoStoreType =  { 
    coinlist : coinListType[] ,
    fetchCoinList: () => void
    fetchData:  ( CryptoInfo : coinType ) => Promise<void>
    
}

export const useCryptoStore = create<useCryptoStoreType>(( set )=> ({ 

    coinlist : [],

    fetchCoinList : async  () => { 
        const cryptos =  await coinlist()

        set(() => ({
            coinlist :  cryptos
        }))
    },

    fetchData  : async ( CryptoInfo ) => { 
        const pricesCrypto = await fetchCurrentCryptoPrice( {CryptoInfo} )
    }
}))