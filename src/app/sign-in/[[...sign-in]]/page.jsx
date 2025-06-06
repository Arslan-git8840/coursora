"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Apple } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white px-4">
      <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-[#1a1a1a]">
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="text-left">
          <h1 className="text-2xl font-semibold mb-1">Log in</h1>
          <p className="text-gray-400">Welcome back to Coursora 👋</p>
        </div>

        <SignIn.Root>
          <SignIn.Step name="start" className="space-y-5">
            <Clerk.GlobalError className="block text-sm text-red-400 text-center" />

            <Clerk.Connection
              name="google"
              className="w-full flex items-center justify-center gap-2 p-3 bg-[#2a2a2a] hover:bg-[#333] rounded-md transition duration-200"
            >
              <svg viewBox="0 0 48 48" width="20" height="20">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              Log in with Google
            </Clerk.Connection>

            <Clerk.Connection
              name="apple"
              className="w-full flex items-center justify-center gap-2 p-3 bg-black hover:bg-[#111] rounded-md transition duration-200 border border-white/20"
            >
              <Apple size={20} />
              Log in with Apple
            </Clerk.Connection>

            <div className="text-right">
              <Clerk.Field
                name="reset"
                render={({ value }) => (
                  <Link href={value} className="text-sm text-gray-400 hover:text-white transition">
                    Forgot Password?
                  </Link>
                )}
              />
            </div>


            <Clerk.Submit asChild>
              <Button className="w-full bg-[#ff3366] hover:bg-[#ff1a53] text-white rounded-xl font-semibold py-3 text-base transition duration-200">
                Log in
              </Button>
            </Clerk.Submit>
          </SignIn.Step>
        </SignIn.Root>

        <div className="text-center text-gray-400 pt-6 text-sm">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-white hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
