import { CurrencySchema , CryptoCurrencyResponseSchema , CryptoCurrenciesResponseSchema } from "../Schema/crypto-schema"
import { z } from "zod"

export type Currency = z.infer<typeof CurrencySchema>

// objeto
export type crypto = z.infer<typeof CryptoCurrencyResponseSchema>

// arreglo de objetos
export type cryptos = z.infer<typeof CryptoCurrenciesResponseSchema>

