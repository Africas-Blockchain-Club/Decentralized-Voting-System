// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract VotingContract {
    string public name;
    string public description;
    address public owner;

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    struct Voter {
        address uid;
        bool voted;
        bool registered;
        uint256 vote;
    }

    uint256 public candidatesCount = 0;
    mapping(uint256 => Candidate) public candidates;
    mapping(address => Voter) public voters;
    address[] public registeredVoters;

    constructor(string memory _name, string memory _description, string[] memory _candidates) {
        require(_candidates.length > 0, "No candidates to vote for.");
        name = _name;
        description = _description;
        owner = msg.sender;

        for (uint256 i = 0; i < _candidates.length; i++) {
            addCandidate(_candidates[i]);
        }
    }

    function addCandidate(string memory _name) private {
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        candidatesCount++;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function registerVoter() public {
        require(!voters[msg.sender].registered, "Already registered.");
        voters[msg.sender].registered = true;
        voters[msg.sender].uid = msg.sender;
        registeredVoters.push(msg.sender);
    }

    function isRegisters() public view returns (bool) {
        if (voters[msg.sender].uid == msg.sender) {
            return true;
        } else {
            return false;
        }
    }

    function castVote(uint256 _candidateId) public {
        require(voters[msg.sender].registered, "Voter is not registered.");
        require(!voters[msg.sender].voted, "Already voted.");
        require(_candidateId < candidatesCount, "Invalid candidate id.");

        voters[msg.sender].voted = true;
        voters[msg.sender].vote = _candidateId;
        candidates[_candidateId].voteCount++;
    }
}