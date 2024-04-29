
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract VotingContract {
    string public name;
    string public description;
    
    struct Candidate {
        string name;
        bool registered;
        uint256 voteCount;
    }

    struct Voter {
        bool voted;
        bool registered;
        address vote;
    }

    
    uint256 public candidatesCount = 0;
    address[] _candidateAddresses;
    address public owner;

    mapping(address => Candidate) public candidates;
    mapping(address => bool) public voters;
    uint256 public totalVotes;

    constructor(string[] memory _nameDescr, string[] memory _candidates) public {
        require(_candidates.length > 0, "No candidates to vote for.");

        name = _nameDescr[0];
        description = _nameDescr[1];

        for(uint256 i = 0; i < _candidates.length; i++){
            addCandidate(_candidates[i]);
        }
    }
    
    // function addCandidate(string memory _name) private {
    //     candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    //     candidatesCount ++;
    }

    function CastVote (uint256 _candidate) public {
        require(!voters[msg.sender], "Already voted!");
        voters[msg.sender] = true;
        candidates[_candidate].voteCount++;
    }

}