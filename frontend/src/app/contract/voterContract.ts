import Web3 from "web3";
import abi from "./abi.json"
import web3Instance from "./web3Instance";

const voterContract = () => {
    
    
    return new web3Instance.eth.Contract(
        abi,
        "0xD3De82C15ceB12AFCA10e0c0c8F54729575F4E75"
    )
}

export default voterContract;

