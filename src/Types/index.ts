import { dbSchema } from "../Schema/Schemas";
import { z } from "zod";

// database type
export type dbType = z.infer<typeof dbSchema>