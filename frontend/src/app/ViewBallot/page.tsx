"use client"
import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ViewBallot = () => {
  const path = usePathname();
  const isLinkActive = (href: any) => {
    return path === href;
  };

  const viewCandidates = (electionId: number) => {
    // Functionality to view candidates goes here
    console.log(`Viewing candidates for Election ${electionId}`);
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
                  <Link href="/" className={isLinkActive("/") ? "block bg-base-100 py-2 px-3 dark:bg-base text-white rounded md:bg-transparent md:text-white-700 md:p-0 dark:text-white md:dark:text-white-500":""} aria-current="page">Home</Link>
                </li>
                <li>
                  <Link href="/About" className={isLinkActive("/About") ?"block bg-primary py-2 px-3 dark:bg-base-100 text-gray-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-base-100 dark:hover:text-white md:dark:hover:bg-transparent":""}>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      <div className="max-w-lg p-6 bg-none border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ backdropFilter: "blur(8px)", marginTop: "100px", marginLeft: "auto", marginRight: "auto"}}>
        <div className="w-full bg-base-50 rounded-lg shadow-6xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-base dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="pb-6 text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              View Ballot
            </h1>
            <main className="row justify-content-between" style={{ padding : "10px"}} >
              <div className="col-sm-12 col-md-4 p-2 shadow-sm border rounded">
                <h3 className='font-bold text-gray-900 pb-6 underline' >Election 1</h3>
                <p className='pb-4'>Description of Election 1</p>
                <button className="rounded-lg bg-gray-900 hover:bg-gray-800" onClick={() => viewCandidates(1)}>View Candidates</button>
              </div>
              <div className="col-sm-12 col-md-4 p-2 shadow-sm border rounded">
                <h3 className='font-bold text-gray-900 pb-6 underline'>Election 2</h3>
                <p className='pb-4'>Description of Election 2</p>
                <button className="rounded-lg bg-gray-900 hover:bg-gray-800" onClick={() => viewCandidates(2)}>View Candidates</button>
              </div>
              <div className="col-sm-12 col-md-4 p-2 shadow-sm border rounded">
                <h3 className='font-bold text-gray-900 pb-6 underline'>Election 3</h3>
                <p className='pb-4'>Description of Election 3</p>
                <button className='rounded-lg bg-gray-900 hover:bg-gray-800' onClick={() => viewCandidates(3)}>View Candidates</button>
              </div>
            </main>
            <div className="flex flex-col mb-8 lg:mb-16 hover:text-blue-700 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-0">
                    <Link href="/Castvote">
                        <div className={"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:outline-none focus:ring-4 dark:focus:ring-primary-900 " + (isLinkActive("/Castvote") ? "bg-gray-800 text-white hover:bg-gray-900 focus:ring-primary-300" : "bg-gray-800 text-yellow-400 hover:bg-gray-700 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700")}>
                        Cast Vote
                        </div>
                    </Link>
                    </div>

           
          </div>
        </div>
      </div>
    </Layout>
  );
  
};

export default ViewBallot;
