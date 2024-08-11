"use server"
import prisma from "@/db"
import { createHash } from "@/lib/hash"

export const signUpAction = async (username: string,email: string, password: string) => {
    try {
        const passwordHash = await createHash(password);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                passwordHash
            },
            select: {
                id: true,
                email: true,
                username: true
            }
        })

        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}