"use client"
import React, {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Layout from "./layout";

const LandingPage = () => { 
    const path = usePathname();
    const isLinkActive = (href: any) => {
        return path === href;
    };

    return (
    <Layout>
        <section className="h-full w-full bg-base dark:bg-base-100 flex justify-center items-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to CryptoVotes_</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">A decentralized voting app. Givin you Security and Transparency</p>
                <div className="flex flex-col mb-8 lg:mb-16 hover:text-blue-700 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link href="/Register" className={isLinkActive("/Register")?"inline-flex justify-center bg-primary items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900":""}>
                        Get Started
                    </Link>  
                </div>
            </div>
        </section>
    </Layout>
    )
}
export default LandingPage;