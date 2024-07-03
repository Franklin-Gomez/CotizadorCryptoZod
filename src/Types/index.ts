import { CurrencySchema } from "../Schema/crypto-schema"
import { z } from "zod"

export type Currency = z.infer<typeof CurrencySchema>