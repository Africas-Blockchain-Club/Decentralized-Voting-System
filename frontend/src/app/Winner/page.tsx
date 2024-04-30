"use client"
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import web3Instance from "../contract/web3Instance";
import voterContract from "../contract/voterContract";

const Leader = (props: {selectCandidate: Function}) => { 
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
            <h5 className="text-sm text-gray-500">{`${item[3]}`}</h5>
          </label>
        </div>
  
      )
    })

    return (
      <div className="flex flex-col">{rendercandidateList}</div>
      );
    
  }
}
export default Leader;