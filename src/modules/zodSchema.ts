import { z } from "zod"

export const typeOption = ["Restaurant", "Hotel", "Park"] 

export const placeSchema = z.object({
    Name: z.string().min(1, 'name is required').max(25, "no more then 25 characters"),
    Address: z.string().min(1,"address is required" ),
    Type: z.string()
});