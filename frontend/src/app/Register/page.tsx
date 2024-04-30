"use client"
import React from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import voterContract from "../contract/voterContract";
import web3Instance from "../contract/web3Instance";

const Register = () => {
  const path = usePathname();
  const isLinkActive = (href: any) => {
    return path == href;
  }

  const register = async () => {
    const accounts = await web3Instance.eth.requestAccounts();
    voterContract().methods.registerVoter().send(
      {
        from: accounts[0],
        gasPrice: "1000000000",
        gas: "3000000"
      }
    )
  }
  
  return(
      <Layout>
        {/* TODO: list of candidate */}
        
        {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={async () => { await register()}}>Register</button> */}
        <div className="max-w-lg p-6 bg-none border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{backdropFilter: "blur(8px)", marginTop: "100px", marginLeft: "auto", marginRight: "auto"}}> 
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="pb-6 text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Register To Vote
            </h1>
            </div>
            <main>
              <div className="flex flex-col mb-8 lg:mb-16 hover:text-blue-700 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-0">
                <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:outline-none focus:ring-4 dark:focus:ring-primary-900 bg-gray-800 text-yellow-400 hover:bg-gray-700 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" onClick={async () => { await register()}}>Register</button> 
              </div>
          </main>
          </div>
      </Layout>
    )
}
export default Register;