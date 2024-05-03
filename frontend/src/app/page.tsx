"use client"
import { useState } from "react";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";
import LandingPage from "./components/landingPage";
import Web3 from "web3";
import Register from "./Register/page";
import web3Instance from "./contract/web3Instance";
import ViewBallot from "./ViewBallot/page";
import voterContract from "./contract/voterContract";


export default function Home() {
    const [accounts, setAccounts] = useState<string[]>([]);
    const [contract, setContract] = useState(null);
    const [isConnected, setIsConnect] = useState(false);
    const [isRegisterd, setIsRegistered] = useState<any>(false);
  
  
    const connect = async () => {
      if ("https://scroll-sepolia.drpc.org") {
        try {


          const accounts = await web3Instance.eth.requestAccounts();
          setAccounts(accounts);

          if (accounts.length > 0) {
            setIsConnect(true);
            // TODO: check if is registered
            const registered = await voterContract().methods.isRegisters().call(
              {
                from: accounts[0],
                gasPrice: "1000000000",
                gas: "3000000"
              }
            )

            setIsRegistered(registered);
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
        {(isConnected) ? (isRegisterd) ? <ViewBallot /> : <Register /> : <LandingPage connect={connect}/>}
      </div>
    <BottomNav/>
    </div>
  );
}
