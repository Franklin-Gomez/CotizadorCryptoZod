// state with zustand
import axios from "axios"
import { create } from "zustand"

type useCryptoStoreType =  { 
    fetchCoinList: () => void
}

export const useCryptoStore = create<useCryptoStoreType>(()=> ({ 


    fetchCoinList : async () => { 
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

        try {
            
            const {data : { Data } } = await axios( url  )
            console.log( Data )

        } catch (error) {
            console.log(error)
        }
    }
}))