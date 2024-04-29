"use client"
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Login =() => {
    const path = usePathname();
    const isLinkActive = (href:any) => {
        return path == href;
    } 

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
                  <Link href="/" className={isLinkActive("/") ? "block bg-base-100 py-2 px-3 dark:bg-base text-yellow-400 rounded md:bg-transparent md:text-yellow-700 md:p-0 dark:text-yellow-400 md:dark:text-yellow-500":""} aria-current="page">Home</Link>
                </li>
                <li>
                  <Link href="/About" className={isLinkActive("/About") ?"block bg-primary py-2 px-3 dark:bg-base-100 text-gray-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-base-100 dark:hover:text-white md:dark:hover:bg-transparent":""}>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <div className="max-w-lg p-6 bg-none border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ backdropFilter: "blur(8px)", marginTop: "190px", marginLeft: "auto", marginRight: "auto"}}>
              
              <div className="w-full bg-base-50 rounded-lg shadow-6xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-base dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                      <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                          Sign in to Vote
                      </h1>
                      <form className="space-y-4 md:space-y-6" action="#">
                          <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique ID</label>
                              <input type="Uid" name="Uid" id="Uid" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Axker4533wa"/>
                          </div>
                          <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                          </div>
                          <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                  <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                  </div>
                                  <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-blue-500 dark:text-gray-300">Remember me</label>
                                  </div>
                              </div>
                        
                          </div>
                          <Link href="/ViewBallot" className={isLinkActive("/ViewBallot") ? "hover:underline w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800":""}>Sign in</Link>
                          <p className="text-sm font-light text-blue-500 dark:text-gray-400">
                              Dont have an account yet? <a href="#" className="font-medium text-pink-600 hover:underline dark:text-primary-500">Sign up</a>
                          </p>
                      </form>
                  </div>
              </div>
          </div>
    </Layout>
    )
}
export default Login;