"use client"
import React, {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Layout from '../components/layout';

const LandingPage = () => { 
    const path = usePathname();
    const isLinkActive = (href: any) => {
        return path === href;
    };

    return (
    <Layout>
        <nav className="bg-gray-800 border-base-100 dark:bg-gray-800">
          <div className="max-w-screen-xl bbg-transparent flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/Gemini_Generated_Image_c1tds7c1tds7c1td-removebg.png" className="h-10 w-10" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CryptoVotes</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-base-100 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden bg-transparent w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex bg-transparent flex-col p-4 md:p-0 mt-4 border border-base-100 rounded-lg dark:bg-base-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-base md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <Link href="/" className={isLinkActive("/") ? "block bg-base-100 py-2 px-3 dark:bg-base text-white rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500":""} aria-current="page">HOME</Link>
                </li>
                {/* <li>
                  <Link href="/ConnectWallet" className={isLinkActive("/ConnectWallet") ?"block bg-primary py-2 px-3 dark:bg-base-100 text-gray-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-base-100 dark:hover:text-white md:dark:hover:bg-transparent":""}>ConnectWallet</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <section className="h-full w-500 bg-base dark:bg-base-100 flex justify-center items-center">
            <div className="mx-20 p-6 bg-none border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 justify-center" style={{ backdropFilter: "blur(8px)", marginTop: "-80px"}}>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="pb-10 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to CryptoVotes_</h1>
                    <p className="mb-8 text-lg font-normal text-yellow lg:text-2xl sm:px-16 xl:px-48 ">The DecentralizedDynamos group want to join the efforts to revolutionize traditional voting systems as we know them, by developing a blockchain-based voting system that is decentralized, transparent, accessible, and secure. </p>
                    <p className="mb-8 text-lg font-normal text-yellow lg:text-2xl sm:px-16 xl:px-48 ">With the upcoming elections in South Africa, we were urged to think about the traditional voting systems we have in place. This typically involves a voter queuing at designated voting stations to vote, and using paper-based ballots to cast their vote. These ballots are then manually counted by election officials to determine the results. </p>
                    <p className="mb-8 text-lg font-normal text-yellow lg:text-2xl sm:px-16 xl:px-48 ">We have decided to develop a voting system using blockchain technologies, that will help mitigate the challenges that traditional voting systems may face.</p>
                    
                </div>
            </div>
        </section>
        
    </Layout>
    )
}
export default LandingPage;