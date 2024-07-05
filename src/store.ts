// state with zustand
import { create } from "zustand"
import { coinListType } from "./Types"
import { coinlist } from "./Service/CryptoService"

type useCryptoStoreType =  { 
    coinlist : coinListType[] ,
    fetchCoinList: () => void
    
}

export const useCryptoStore = create<useCryptoStoreType>(( set )=> ({ 

    coinlist : [],

    fetchCoinList : async  () => { 
        const cryptos =  await coinlist()

        set(() => ({
            coinlist :  cryptos
        }))
    }
}))