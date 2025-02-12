"use client";
import React from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import CustomFormField from "./CustomFormField";
import Link from "next/link";
import { Checkbox } from "./ui/checkbox";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface AuthFormType {
  type: string;
}

const formSchema = z.object({
  fullname: z.string().min(3, {
    message: "Full Name must be at least 3 characters.",
  }),
  email: z.string().email().max(50, {
    message: "Email is not format or must not be longger than 50 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
const AuthForm = ({ type }: AuthFormType) => {
  const { data: session } = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  let subitButton = type === "sign-in" ? "Sign In" : "Sign Up";
  const router = useRouter();
  return (
    <div className="auth-form">
      <div className="header-form">
        <h1 className=" font-semibold text-[28px] lg:text-[38px] xl:text-[48px] text-center text-[rgb(38,38,38)]">{type === "sign-up" ? "Sign Up" : "Sign In"}</h1>
        <p className="font-normal text-sm lg:text-[16px] xl:text-[18px] text-center text-[#4C4C4D] ">Welcome back! Please log in to access your account.</p>
      </div>
      <div className="content-form">
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" ? (
                <div className="form-sign-up">
                  <CustomFormField control={form.control} name="fullname" />
                  <CustomFormField control={form.control} name="email" />
                  <CustomFormField control={form.control} name="password" />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm xl:text-[16px] 2xl:text-[18px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      <p className=" text-wrap">
                        I agree with{" "}
                        <Link href={"/term-of-use"} className=" underline hover:opacity-75 hover:text-blue-500">
                          Terms of Use
                        </Link>{" "}
                        and{" "}
                        <Link href={"/privacy-policy"} className=" underline hover:opacity-75 hover:text-blue-500">
                          Privacy Policy
                        </Link>
                      </p>
                    </label>
                  </div>
                </div>
              ) : (
                <div className="form-sign-in">
                  <CustomFormField control={form.control} name="email" />
                  <div className="flex flex-col gap-[10px]">
                    <CustomFormField control={form.control} name="password" />
                    <Link href={"/forgot-password"} className="hover:text-blue-500 hover:underline flex justify-end mt-0">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember-me" />
                    <label htmlFor="remember-me" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Remember Me
                    </label>
                  </div>
                </div>
              )}
              <Button className="bg-[rgb(255,149,0)] h-[56px] w-full py-[16px] px-[24px] rounded-[8px] text-white text-sm font-medium" type="submit">
                {subitButton}
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex justify-center items-center gap-3">
          <hr className="text-[#E4E4E7] border w-full" />
          <span className="text-[#98989A]">OR</span>
          <hr className="text-[#E4E4E7] border w-full" />
        </div>
        <div className="authentication-social">
          <Button onClick={() => signIn("google")} className=" flex gap-[14px] text-center justify-center w-full rounded-[8px] py-[16px] px-[24px] bg-[#F7F7F8] border border-[#F1F1F3] h-[56px]">
            <img src="/assets/icons/google-icon.svg" alt="google-icon" />
            {`${type === "sign-up" ? "Sign Up" : "Sign In"} with Google`}
          </Button>
        </div>
        {type === "sign-up" ? (
          <div className="flex gap-[6px] justify-center items-center text-[16px] font-normal">
            <div className="flex gap-1">
              <p className=" text-[16px] font-normal ">Already have an account?</p>
              <span className="text-[16px] font-medium underline">Login</span>
            </div>
            <img className="hover:opacity-75 hover:text-blue-600 cursor-pointer w-[20px] h-[20px]" onClick={() => router.push("/sign-in")} src="/assets/icons/arrow-icon.svg" alt="arrow-icon" />
          </div>
        ) : (
          <div className="flex gap-[6px] justify-center items-center text-[16px] font-normal">
            <div className="flex gap-1">
              <p className=" text-[16px] font-normal ">Don’t have an account? </p>
              <span className="text-[16px] font-medium underline">Sign Up</span>
            </div>
            <img className="hover:opacity-75 hover:text-blue-600 cursor-pointer" onClick={() => router.push("/sign-up")} src="/assets/icons/arrow-icon.svg" alt="arrow-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
