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
      <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="/Gemini_Generated_Image_c1tds7c1tds7c1td-removebg.png" alt="logo" />
          CryptoVotes_
        </a>
        <div className="w-full bg-base-50 rounded-lg shadow-6xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-base dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              View Ballot
            </h1>
            <main>
              <h2>Available Elections</h2>
              <ul>
                <li>
                  <h3>Election 1</h3>
                  <p>Description of Election 1</p>
                  <button onClick={() => viewCandidates(1)}>View Candidates</button>
                </li>
                <li>
                  <h3>Election 2</h3>
                  <p>Description of Election 2</p>
                  <button onClick={() => viewCandidates(2)}>View Candidates</button>
                </li>
                <li>
                  <h3>Election 3</h3>
                  <p>Description of Election 3</p>
                  <button onClick={() => viewCandidates(3)}>View Candidates</button>
                </li>
              </ul>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewBallot;
