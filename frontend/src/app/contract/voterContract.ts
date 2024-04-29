import Web3 from "web3";
import abi from "./abi.json"

const voterContract = () => {
    const web3Instance = new Web3(window.ethereum);
    
    return new web3Instance.eth.Contract(
        abi,
        "CONTRACT_ADDRRESS"
    )
}

export default voterContract;

