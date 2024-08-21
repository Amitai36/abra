import { z } from "zod"

export const typeOption = ["Restaurant", "Hotel", "Park"] 

export const placeSchema = z.object({
    name: z.string().min(1, 'name is required').max(25, "no more then 25 characters"),
    address: z.string().min(1,"address is required" ),
    type: z.string()
});