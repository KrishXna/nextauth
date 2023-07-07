import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google"


export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
          }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter Username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter Password"
                }
            },
            async authorize(credentials) {
                const user = { id: "1", name: "krishna", password: "password" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                    
                } else {
                    return null
                }
            }
        })
    ],
}