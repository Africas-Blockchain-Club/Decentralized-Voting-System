"use client"
import React, {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LandingPage = () => { 
    const path = usePathname();
    const isLinkActive = (href: any) => {
        return path === href;
    };

    return (
        <div className="flex flex-col">
            <section className="mx-auto items-center justify-between max-full">
                <h1 className="mb-4 justify-center items-center mx-auto bg-base dark:bg-base-100 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to CryptoVotes_</h1>
                    <p className="mb-6 text-lg bg-base dark:bg-base-100 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">A decentralized voting application, that ensures security and transparency</p>
                        <Link href="/Register" className={ isLinkActive("/Register") ?"inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900":''}>
                        Let's Get Started
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
            </section>
            
        </div> 
    )
}
export default LandingPage;