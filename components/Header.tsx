"use client";
import React from "react";
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
  return (
    <div className="header">
      <div className="top-banner">
        <span className="text-header-page">Free Courses 🌟 Sale Ends Soon, Get It Now</span>
        <div className="header-icon">
          <img className="max-w-[24px] max-h-[24px]" src="/assets/icons/right-arrow.svg" alt="right-arrow" />
        </div>
      </div>
      <div className="navbar">
        <div className="content-container">
          <div className="logo-navbar" onClick={() => router.push("/")}>
            <img className="max-w-[44px] " src="/assets/images/logo.svg" alt="logo" />
          </div>
          <ul className="item-navbar">
            <Link className="hover:text-[#262626]/50" href={"/"}>
              Home
            </Link>
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
        <div className="button-container">
          <Link href={"/sign-up"}>
            <Button className={`${currentpage === "sign-up" ? "active-button-container" : "unactive-button-container"}`}>Sign Up</Button>
          </Link>
          <Link href={"/sign-in"}>
            <Button className={`${currentpage === "sign-in" ? "active-button-container" : "unactive-button-container"}`}>Sign In</Button>
          </Link>
          <div className="block sm:hidden">
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
