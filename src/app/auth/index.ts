import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from "next-auth";

export const BASE_PATH = "/api/auth";

const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "remcostoeten"},
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<User | null> {
                const users = [
                    { id: 1, name: "Remco", email: process.env.NEXT_PUBLIC_ADMIN_EMAIL, password: process.env.NEXT_ADMIN_PASSWORD },
                    { id: 2, name: "Test", email: "test@test.nl", password: "password" },
                ];
                const user = users.find(
                    (user) => user.email === credentials.username &&
                    user.password === credentials.password
                );
                return user
                  ? {name: user.name, email: user.email, image: null} : null;
            },
        }),
    ],
    basePath: BASE_PATH,
    secret: process.env.NEXTAUTH_SECRET,
};

export const { signIn, signOut, getSession, session, providers } = NextAuth(authOptions);