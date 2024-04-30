"use client"
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import voterContract from '../contract/voterContract';
import web3Instance from '../contract/web3Instance';
import { The_Nautigal } from 'next/font/google';


const Ballot = (props: {selectCandidate: Function}) => { 
    const [candidates, setCandidates] = useState<Array<any>>([])
    const [candidate, setCandidate] = useState(0)
    useEffect(() => {
      // TODO: get candidate from contract
      getCandidate();

    })

    const selectCandidate = (index: number)  => {
      props.selectCandidate(index);
    }


    const getCandidate = async () => {
      const accounts = await  web3Instance.eth.requestAccounts();
      
      const _candidates: Array<any> = await voterContract().methods.getCandidates().call(
        {
          from: accounts[0],
          gasPrice: "1000000000",
          gas: "3000000"
        }
      );

      setCandidates(_candidates);

    }




    const renderCandidate = () => {

      const rendercandidateList: Array<any> = []

      candidates.forEach((item: Array<any>) => {
        rendercandidateList.push(
          
          <div className="block" onClick={() => {
            console.log("Selected Candidate : ", item[0]);
            selectCandidate(item[0])
          }}>
            <input type="radio" name="radio-right" className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100" id={`${item[0]}`} checked={item[0] == candidate} />
            <label htmlFor={`${item[0]}`} className="flex flex-row-reverse p-3 block w-full bg-white border border-gray-200 rounded-md text-sm ">
              <span className="border border-gray-300  rounded-full mr-2 w-4 h-4 mt-0.5 ml-auto"></span>
              <h5 className="text-sm text-gray-500">{`${item[1]}`}</h5>
            </label>
          </div>
    
        )
      })

      return (
        <div className="flex flex-col">{rendercandidateList}</div>
        );
      
    }



    return renderCandidate();

}

const ViewBallot = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(0);

  const selectCandidate = (candidateID: number) => {
    setSelectedCandidate(candidateID);
  }


  const castVote = async () => {
    const accounts = await  web3Instance.eth.requestAccounts();
    if (selectCandidate == null || selectedCandidate == undefined) {
      console.log("Are you crazy.")
    }
    await voterContract().methods.castVote(selectedCandidate).send(
      {
        from: accounts[0],
        gasPrice: "1000000000",
        gas: "3000000"
      }
    );

  }



  // const viewCandidates = (electionId: number) => {
  //   // Functionality to view candidates goes here
  //   console.log(`Viewing candidates for Election ${electionId}`);
  // };

  return (
    <Layout>

      <div className="max-w-lg p-6 bg-none border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{ backdropFilter: "blur(8px)", marginTop: "100px", marginLeft: "auto", marginRight: "auto"}}>
        <div className="w-full bg-base-50 rounded-lg shadow-6xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-base dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="pb-6 text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Voting Ballot
            </h1>
            <main className="row justify-content-between" style={{ padding : "10px"}} >
              

            <Ballot selectCandidate={selectCandidate}/>
            </main>
            <div className="flex flex-col mb-8 lg:mb-16 hover:text-blue-700 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-0">
                <div  onClick={castVote} className={"inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:outline-none focus:ring-4 dark:focus:ring-primary-900 bg-gray-800 text-yellow-400 hover:bg-gray-700 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"}>
                Cast Vote
                </div>
            </div>

           
          </div>
        </div>
      </div>
    </Layout>
  );
  
};

export default ViewBallot;
