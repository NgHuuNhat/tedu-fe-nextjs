import { findAdminByEmail } from "@/app/features/managers/model"
import { ICreateAdminInput } from "@/app/features/managers/type"
import { comparePassword } from "@/utils/common/password"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const loginAdmin = async (email: string, password: string) => {
    const exitedAdmin = await findAdminByEmail(email)
    if (!exitedAdmin) return null;

    const isMatchPassword = comparePassword(password, exitedAdmin.password)
    if (!isMatchPassword) return null;

    return {
        email: exitedAdmin.email,
        id: exitedAdmin.id
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials as ICreateAdminInput
                if (!email || !password) return null;
                const user = await loginAdmin(email, password)
                return user;

                // const creds = credentials as ICreateAdminInput
                // if (!creds?.email || !creds?.password) return null;
                // try {
                //     const user = await loginAdmin(creds.email, creds.password);
                //     return user;
                // } catch (error) {
                //     console.error("Login Error:", error);
                //     return null;
                // }
            }
        })
    ]
}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }