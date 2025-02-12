"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

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
        <span className="text-header">Free Courses 🌟 Sale Ends Soon, Get It Now</span>
        <div className="header-icon">
          <img src="/assets/icons/right-arrow.svg" alt="right-arrow" />
        </div>
      </div>
      <div className="navbar">
        <div className="content-container">
          <div className="logo-navbar" onClick={() => router.push("/")}>
            <img src="/assets/images/logo.svg" alt="logo" />
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
            <DropdownMenu>
              <DropdownMenuTrigger>
                <img src="/assets/icons/dropdown-icon.svg" alt="dropdown-icon" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <ul className="mobile-item-navbar">
                  <DropdownMenuItem>
                    <Link className="hover:text-[#262626]/50" href={"/"}>
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className="hover:text-[#262626]/50" href={"/courses"}>
                      Courses
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className="hover:text-[#262626]/50" href={"/about-us"}>
                      About Us
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className="hover:text-[#262626]/50" href={"/pricing"}>
                      Pricing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link className="hover:text-[#262626]/50" href={"/contact"}>
                      Contact
                    </Link>
                  </DropdownMenuItem>
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};
