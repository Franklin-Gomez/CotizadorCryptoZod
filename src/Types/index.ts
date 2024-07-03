import { CurrencySchema , CryptoCurrencyResponseSchema , CryptoCurrenciesResponseSchema } from "../Schema/crypto-schema"
import { z } from "zod"

export type Currency = z.infer<typeof CurrencySchema>

export type crypto = z.infer<typeof CryptoCurrencyResponseSchema>

export type cryptos = z.infer<typeof CryptoCurrenciesResponseSchema>

