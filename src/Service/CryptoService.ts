import { coinListsSchema } from "../Schema/Schemas"
import axios from "axios"

export const coinlist =  async () => { 
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    try {
        
        const {data : { Data } } = await axios( url  )
        const resultado = coinListsSchema.safeParse( Data )
        
        if( resultado.success ) { 
            return resultado.data
        }

    } catch (error) {
        console.log(error)
    }
} 