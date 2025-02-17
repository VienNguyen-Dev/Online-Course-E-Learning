"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

export const HeaderPage = () => {
  let currentpage = "sign-up";
  const pathname = usePathname();
  if (pathname === "/sign-up") {
    currentpage = "sign-up";
  } else if (pathname === "/sign-in") {
    currentpage = "sign-in";
  }

  const router = useRouter();
  const [authButton, setAuthButton] = useState("Sign Up");
  return (
    <div className="header mt-[20px]">
      <div className="top-banner">
        <span className="text-header-page">Free Courses 🌟 Sale Ends Soon, Get It Now</span>
        <div className="header-icon">
          <img className="max-w-[24px] max-h-[24px]" src="/assets/icons/right-arrow.svg" alt="right-arrow" />
        </div>
      </div>
      <div className="navbar">
        <div className="content-container">
          <div className="logo-navbar" onClick={() => router.push("/")}>
            <img className=" object-cover " src="/assets/images/logo.svg" alt="logo" />
          </div>
          <ul className="item-navbar ">
            {[
              { name: "Home", path: "/" },
              { name: "Courses", path: "/courses" },
              { name: "About Us", path: "/about-us" },
              { name: "Pricing", path: "/pricing" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <div
                key={item.path}
                className={` ${pathname === item.path ? "bg-[#F1F1F3] text-[#262626] 2xl:py-[14px] 2xl:px-[20px] py-[12px] px-[20px]" : ""}  rounded-[8px]  2xl:text-[18px] text-[14px] text-center`}
              >
                <Link href={item.path}>{item.name}</Link>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex">
          <div className="button-container">
            <Link href={"/sign-up"}>
              <Button onClick={() => setAuthButton("Sign Up")} className={`${authButton === "Sign Up" ? "active-button-container" : "unactive-button-container"}`}>
                Sign Up
              </Button>
            </Link>
            <Link href={"/sign-in"}>
              <Button
                onClick={() => {
                  setAuthButton("Sign In");
                }}
                className={`${authButton === "Sign In" ? "active-button-container" : "unactive-button-container"}`}
              >
                Login
              </Button>
            </Link>
          </div>
          <div className=" block sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button>
                  <img src="/assets/icons/dropdown-icon.svg" alt="dropdown-icon" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-white font-semibold text-2xl">Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <ul className="mobile-item-navbar">
                    <Link href={"/"}>Home</Link>
                    <Link className="hover:text-[#262626]/50" href={"/courses"}>
                      Courses
                    </Link>

                    <Link className="hover:text-[#262626]/50" href={"/about-us"}>
                      About Us
                    </Link>

                    <Link className="hover:text-[#262626]/50" href={"/pricing"}>
                      Pricing
                    </Link>

                    <Link className="hover:text-[#262626]/50" href={"/contact"}>
                      Contact
                    </Link>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};
