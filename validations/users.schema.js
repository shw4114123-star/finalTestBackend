import {z} from "zod"


export const usersSchema = z.object({
    body: z.object({
        userName: z.string(),
        password: z.string().min(5, "password must be minimum 5 characters"),
        email: z.string().email(),
        role: z.enum(["arena_user", "general_user", "admin"]),
        assignedArena: z.enum(["North", "South", "Center", "All"])
    })
})