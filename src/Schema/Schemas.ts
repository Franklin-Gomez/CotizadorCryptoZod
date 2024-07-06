import { z } from "zod";

export const dbSchema = z.object({ 
    code : z.string(),
    name : z.string()
})

export const coinListSchema = z.object({
    CoinInfo : z.object({ 
        Name : z.string(),
        FullName : z.string()
    })
})

export const coinListsSchema = z.array( coinListSchema )

export const coinSchema = z.object({
    Currency : z.string(),
    CryptoCurrency : z.string()
})

export const coinPriceSchema = z.object({
    IMAGEURL : z.string(),
    PRICE : z.string(),
    LASTUPDATE : z.string(),
    HIGH24HOUR : z.string(),
    LOW24HOUR : z.string(),
    MKTCAP : z.string(),
    CHANGEPCT24HOUR  : z.string()
})