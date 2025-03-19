// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EnhancedVoting {
    struct Candidate {
        string name;
        string position;  // president, vicePresident, senator, governor, mayor
        uint256 voteCount;
    }

    // Main candidates storage
    Candidate[] public candidates;
    
    // Mapping to track votes by position per user
    mapping(address => mapping(string => uint256)) public votesForPosition;
    
    // Mapping to track individual candidate votes
    mapping(address => mapping(uint256 => bool)) public hasVotedForCandidate;
    
    uint256 public totalVotes;
    address public owner;

    // Payment related variables
    uint256 public votingFee = 0.01 ether;
    
    // Events
    event CandidateAdded(uint256 candidateId, string name, string position);
    event VoteCast(address voter, uint256 candidateId, string position);
    
    constructor() {
        owner = msg.sender;
        
        // Initialize with all candidates from the JS file
        // President candidates
        addCandidate("George Adams", "president");
        addCandidate("Samantha Green", "president");
        addCandidate("Benjamin Parker", "president");
        addCandidate("Lily Roberts", "president");
        addCandidate("Ethan Foster", "president");
        
        // Vice President candidates
        addCandidate("Michael Brown", "vicePresident");
        addCandidate("Emma Watson", "vicePresident");
        addCandidate("John Doe", "vicePresident");
        addCandidate("Sarah White", "vicePresident");
        addCandidate("Robert King", "vicePresident");
        
        // Senator candidates
        addCandidate("Olivia Smith", "senator");
        addCandidate("William Johnson", "senator");
        addCandidate("Sophia Martinez", "senator");
        addCandidate("Daniel Lee", "senator");
        addCandidate("Jessica Taylor", "senator");
        
        // Governor candidates
        addCandidate("Christopher Hall", "governor");
        addCandidate("Victoria Harris", "governor");
        addCandidate("Anthony Moore", "governor");
        addCandidate("Elizabeth Davis", "governor");
        addCandidate("Brian Carter", "governor");
        
        // Mayor candidates
        addCandidate("Megan Wright", "mayor");
        addCandidate("Kevin Thomas", "mayor");
        addCandidate("Angela Wilson", "mayor");
        addCandidate("David Miller", "mayor");
        addCandidate("Rachel Scott", "mayor");
    }
    
    function addCandidate(string memory _name, string memory _position) public {
        require(msg.sender == owner, "Only the owner can add candidates");
        candidates.push(Candidate(_name, _position, 0));
        emit CandidateAdded(candidates.length - 1, _name, _position);
    }
    
    function vote(uint256 candidateId) public payable {
        require(candidateId < candidates.length, "Invalid candidate ID");
        require(!hasVotedForCandidate[msg.sender][candidateId], "You have already voted for this candidate");
        require(msg.value >= votingFee, "Voting requires a fee of 0.01 ETH");
        
        string memory position = candidates[candidateId].position;
        
        // Check if user has already voted for the maximum allowed number of candidates in the given position
        if (isEqualStrings(position, "senator")) {
            require(votesForPosition[msg.sender][position] < 5, "You can only vote for 5 senators");
        } else {
            require(votesForPosition[msg.sender][position] == 0, "You can only vote for 1 candidate per position");
        }
        
        // Record the vote
        candidates[candidateId].voteCount++;
        hasVotedForCandidate[msg.sender][candidateId] = true;
        
        // Track how many candidates the user has voted for in the given position
        votesForPosition[msg.sender][position]++;
        
        totalVotes++;
        
        emit VoteCast(msg.sender, candidateId, position);
    }
    
    function isEqualStrings(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
    
    function getCandidate(uint256 candidateId) public view returns (string memory, string memory, uint256) {
        require(candidateId < candidates.length, "Invalid candidate ID");
        return (candidates[candidateId].name, candidates[candidateId].position, candidates[candidateId].voteCount);
    }
    
    function getCandidatesByPosition(string memory position) public view returns (Candidate[] memory) {
        // First, count candidates in the position
        uint256 count = 0;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (isEqualStrings(candidates[i].position, position)) {
                count++;
            }
        }
        
        // Then create and fill the array
        Candidate[] memory positionCandidates = new Candidate[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (isEqualStrings(candidates[i].position, position)) {
                positionCandidates[index] = candidates[i];
                index++;
            }
        }
        
        return positionCandidates;
    }
    
    function getAllCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }
    
    function getCandidatesCount() public view returns (uint256) {
        return candidates.length;
    }
    
    function getTotalVotes() public view returns (uint256) {
        return totalVotes;
    }
    
    function hasUserVotedForPosition(address user, string memory position) public view returns (bool) {
        return votesForPosition[user][position] > 0;
    }
    
    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        payable(owner).transfer(address(this).balance);
    }
}
