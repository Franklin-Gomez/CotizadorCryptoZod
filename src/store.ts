import { create } from 'zustand'
import axios from 'axios';
import { CryptoCurrenciesResponseSchema } from './Schema/crypto-schema';

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD';

    try {
        
        const {data : { Data }} = await axios( url )
        const resultado = CryptoCurrenciesResponseSchema.safeParse( Data)
        console.log( resultado )

    } catch (error) {
        console.log( error )
    }
}

export const useCryptoStore = create(() => ({ 
    fetchCryptos : () => { 
        getCryptos()
    }
}))