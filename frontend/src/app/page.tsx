"use client"
import { useState } from "react";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import LandingPage from "./components/landingPage";
import Web3 from "web3";
import Register from "./Register/page";


export default function Home() {
  const [web3, setWeb3] = useState<Web3 | null>(null);
    const [accounts, setAccounts] = useState<string[]>([]);
    const [contract, setContract] = useState(null);
    const [isConnected, setIsConnect] = useState(false);
  
  
    const connect = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.requestAccounts();
          setAccounts(accounts);

          if (accounts.length > 0) {
            setIsConnect(true)
          }

        } catch (error) {
          console.error(error);
        }
      } else {
        console.error('Web3 not found');
      }
    };

  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        {(isConnected) ? <Register /> : <LandingPage connect={connect}/>}
      </div>
    <BottomNav/>
    </div>
  );
}
