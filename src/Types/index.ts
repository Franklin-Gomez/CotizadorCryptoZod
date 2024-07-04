import { CurrencySchema , CryptoCurrencyResponseSchema , CryptoCurrenciesResponseSchema , PairSchema , CryptoPricesSchema } from "../Schema/crypto-schema"
import { z } from "zod"

export type Currency = z.infer<typeof CurrencySchema>

// objeto
export type crypto = z.infer<typeof CryptoCurrencyResponseSchema>

// arreglo de objetos
export type cryptos = z.infer<typeof CryptoCurrenciesResponseSchema>

// state form
export type pair = z.infer<typeof PairSchema>

export type CryptoPrice = z.infer<typeof CryptoPricesSchema>

