"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Logo = () => {
    const router = useRouter();
    return (
        <Image
            src={"/images/logo-green.png"}
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height={"150"}
            width={"150"}
        />
    );
};

export default Logo;
