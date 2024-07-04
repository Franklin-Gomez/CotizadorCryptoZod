import { z } from 'zod'

export const CurrencySchema = z.object({
    code : z.string(),
    name : z.string()
})

// objetos
export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo : z.object({
        Name : z.string(),
        FullName : z.string()
    })
})

// arreglos
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

export const PairSchema = z.object({   
    currency: z.string(),
    criptocurrency: z.string()
})
