import { create } from 'zustand'
import axios from 'axios';

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD';

    try {
        
        const {data : { Data }} = await axios( url )
        console.log( Data )

    } catch (error) {
        console.log( error )
    }
}

export const useCryptoStore = create(() => ({ 
    fetchCryptos : () => { 
        getCryptos()
    }
}))