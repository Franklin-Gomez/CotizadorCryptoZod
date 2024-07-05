import { z } from "zod";

export const dbSchema = z.object({ 
    code : z.string(),
    name : z.string()
})