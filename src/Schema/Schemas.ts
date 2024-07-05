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

