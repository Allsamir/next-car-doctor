import User from "@/models/User";
import { compareSync } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const user = await User.findOne({ email });
        if (!user) {
          return null;
        }
        const isPasswordMatched = compareSync(password, user.password);
        if (!isPasswordMatched) {
          return null;
        }
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { email, name, image } = user;
        try {
          const newUser = new User({
            name,
            email,
            image,
          });
          await newUser.save();
          return user;
        } catch (err) {
          console.log(err);
          return user;
        }
      } else {
        return user;
      }
    },
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
