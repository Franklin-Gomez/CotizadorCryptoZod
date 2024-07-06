import { coinListSchema, coinListsSchema, coinSchema, dbSchema } from "../Schema/Schemas";
import { z } from "zod";

// database type
export type dbType = z.infer<typeof dbSchema>

// first call API
export type coinListType = z.infer<typeof coinListSchema>
export type coinListsType = z.infer<typeof coinListsSchema>

// state coin 
export type coinType = z.infer<typeof coinSchema>

