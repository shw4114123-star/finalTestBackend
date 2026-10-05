import { z } from "zod"

export const alertsSchema = z.object({
    body: z.object({
        displayName: z.string(),
        description: z.string(),
        priority: z.enum(["Low", "Medium", "High", "Critical"]),
        arena: z.enum(["North", "South", "Center"]),
        status: z.enum(["Active", "Handled"]),
        lon: z.number(),
        lat: z.number()
    })
})

export const updateAlertsSchema = z.object({
    body: z.object({
        displayName: z.string().optional(),
        description: z.string().optional(),
        priority: z.enum(["Low", "Medium", "High", "Critical"]).optional(),
        arena: z.enum(["North", "South", "Center"]).optional(),
        status: z.enum(["Active", "Handled"]).optional(),
        lon: z.number().min(-90).max(90).optional(),
        lat: z.number().min(-180).max(180).optional()
    })
})