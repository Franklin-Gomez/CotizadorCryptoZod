// state with zustand
import { create } from "zustand"
import { coinListType, coinType, priceType } from "./Types"
import { coinlist , fetchCurrentCryptoPrice } from "./Service/CryptoService"


type useCryptoStoreType =  { 
    coinlist : coinListType[]
    coinPrice : priceType
    fetchCoinList: () => void
    fetchData:  ( CryptoInfo : coinType ) => Promise<void>
    
}

export const useCryptoStore = create<useCryptoStoreType>(( set )=> ({ 

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

    fetchCoinList : async  () => { 
        const cryptos =  await coinlist()

        set(() => ({
            coinlist :  cryptos
        }))
    },

    fetchData  : async ( CryptoInfo ) => { 
        const pricesCrypto = await fetchCurrentCryptoPrice( {CryptoInfo} )

        set(() => ({ 
            coinPrice : pricesCrypto
        }))
    }
}))