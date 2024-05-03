"use client"
import React, {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Layout from "./layout";
import Web3 from "web3";

const LandingPage = (props: {connect: Function}) => { 
    // const path = usePathname();
    // const isLinkActive = (href: any) => {
    //     return path === href;
    // };

    



    return (
    <Layout>
        
        <section className="h-full w-full bg-base dark:bg-base-100 flex justify-center items-center">
            <div className="p-6 bg-none border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center" style={{ backdropFilter: "blur(8px)", marginTop: "-200px"}}>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to CryptoVotes_</h1>
                    <p className="mb-8 text-lg font-normal text-yellow lg:text-2xl sm:px-16 xl:px-48 ">A decentralized voting app. Giving you Security and Transparency</p>
                    <div className="flex flex-col mb-8 lg:mb-16 hover:text-blue-700 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-0">
                    {/* <Link href="/ConnectWallet"> */}
                        <div onClick={() => {props.connect()}}  className={"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:outline-none focus:ring-4 dark:focus:ring-primary-900 bg-gray-800 text-yellow-400 hover:bg-gray-700 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"}>
                        Connect To Vote
                        </div>
                    {/* </Link> */}
                    </div>
                </div>
            </div>
        </section>
        
    </Layout>
    )
}
export default LandingPage;