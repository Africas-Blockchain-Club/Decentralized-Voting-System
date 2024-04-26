// SPDX_License-Identifier: MIT
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.16;

contract Voting {
    //creating structure template for each of candidates

    struct Candidate {
        uint256 id;
        string name;
        uint256 numberOfVotes;
    }

    // list of all candidiates
    Candidate[] public candidates;

    //this will be the owner's address
    address public owner;

    //mapp all voters addresses, bool-> true if voted and false if not voted
    mapping (address => bool) public voters;

    //list of voters
    address[] public listOfVoters;

    //creating a voting start and end session
    uint256 public votingStart;
    uint256 public votingEnd;

    //creating an election status
    bool public electionStarted;

    // Restrict creating election to the owner
    modifier  onlyOwner() {
        require(msg.sender == owner, "You are not authorized to start an election");
    _;
    }

    // Check if an election is ongoing
    modifier electionOngoing() {
        require(electionStarted, "No election yet");
        _;
    } 

    //creating a constructor
    constructor() {
        owner = msg.sender;
    }

    //funciton to start an election 
    function startElection(string[] memory _candidates, uint256 _votingDuration) public onlyOwner {
        require(electionStarted == false, "Election is currently ongoing");
        delete candidates;
        resetAllVoterStatus();

        for(uint256 i = 0; i < _candidates.length; i++){
            candidates.push(
                Candidate({id: i, name: _candidates[i], numberOfVotes:0})
            );
        }
        electionStarted = true;
        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_votingDuration * 1 minutes);

    }

    //function to add a new candidate
    function addCandidate(string memory _name) public onlyOwner electionOngoing {
        require(checkElectionPeriod(),"Election period has ended");
        candidates.push(
            Candidate({id: candidates.length, name: _name, numberOfVotes: 0})
        );
    }

    //check voter's status
    function voterStatus(address _voter) public view electionOngoing returns (bool) {
        if(voters[_voter] == true){
            return true;
        }
        return false;
    }

    // function to vote
    function voteTo(uint256 _id) public electionOngoing {
        require(checkElectionPeriod(), "Election pperiod has ended");
        require(!voterStatus(msg.sender), "you already voted.YOu can only vote once");
        candidates[_id].numberOfVotes++;
        voters[msg.sender] = true;
        listOfVoters.push(msg.sender);
    }
    //get number of votes
    function retrieveVOtes() public view returns (Candidate[] memory){
        return candidates;
    }

    //monitor the election time
    function electionTimer() public view electionOngoing returns (uint256){
        if(block.timestamp >= votingEnd){
            return 0;
        }
        return (votingEnd -block.timestamp);
    }

    //check if lection period is still ongoind
    function checkElectionPeriod() public returns (bool){
        if(electionTimer() > 0){
            return true;
        }
        electionStarted =false;
        return false;
    }

    // reset all voters status
    function resetAllVoterStatus() public onlyOwner{
        for (uint256 i = 0; i < listOfVoters.length; i++){
            voters[listOfVoters[i]] = false;
        }
        delete listOfVoters;
    }
}