import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60, // 1 week 

    },
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};