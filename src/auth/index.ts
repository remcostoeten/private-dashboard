import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        usernameOrEmail: {
          label: "Username or Email",
          type: "text",
          placeholder: "jsmith or jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: process.env.ADMIN_USERNAME,
            userName: process.env.ADMIN_USERNAME,
            name: process.env.ADMIN_NAME,
            password: process.env.ADMIN_PASSWORD,
            email: process.env.ADMIN_EMAIL,
          },
          {
            id: "test-user-2",
            userName: "test2",
            name: "Test 2",
            password: "pass",
            email: "test2@donotreply.com",
          },
        ];
        const user = users.find(
          (user) =>
            (user.userName === credentials.usernameOrEmail ||
              user.email === credentials.usernameOrEmail) &&
            user.password === credentials.password,
        );
        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
