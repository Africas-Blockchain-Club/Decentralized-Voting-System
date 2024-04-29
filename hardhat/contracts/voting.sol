// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract VotingContract {
    string public name;
    string public description;

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    struct Voter {
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

        for (uint256 i = 0; i < _candidates.length; i++) {
            addCandidate(_candidates[i]);
        }
    }

    function addCandidate(string memory _name) private {
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        candidatesCount++;
    }

    function registerVoter() public {
        require(!voters[msg.sender].registered, "Already registered.");
        voters[msg.sender].registered = true;
        registeredVoters.push(msg.sender);
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