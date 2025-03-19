// dashboard.js
let provider, signer, contract;
let contractAddress = "0x7e63a6128679d6efdcaae4987f9a19a2037835a7"; // Replace with your actual contract address
let contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_position",
				"type": "string"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "position",
				"type": "string"
			}
		],
		"name": "CandidateAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			}
		],
		"name": "vote",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "position",
				"type": "string"
			}
		],
		"name": "VoteCast",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCandidates",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "position",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"internalType": "struct EnhancedVoting.Candidate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "candidateId",
				"type": "uint256"
			}
		],
		"name": "getCandidate",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			}
		],
		"name": "getCandidatesByPosition",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "position",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "voteCount",
						"type": "uint256"
					}
				],
				"internalType": "struct EnhancedVoting.Candidate[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidatesCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			}
		],
		"name": "hasUserVotedForPosition",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hasVotedForCandidate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalVotes",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "votesForPosition",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]; // Your contract ABI goes here


document.addEventListener("DOMContentLoaded", function() {
    // Connect wallet button functionality
    document.getElementById("connectWallet").addEventListener("click", connectWallet);
    
    // Add candidate form submission
    const addCandidateForm = document.getElementById('addCandidateForm');
    if (addCandidateForm) {
        addCandidateForm.addEventListener('submit', handleAddCandidate);
    }
    
    // Election management buttons
    if (document.getElementById("createElectionBtn")) {
        document.getElementById("createElectionBtn").addEventListener("click", createNewElection);
    }
    
    if (document.getElementById("endElectionBtn")) {
        document.getElementById("endElectionBtn").addEventListener("click", endOngoingElection);
    }
});

// Connect to MetaMask and the blockchain
// Connect to MetaMask and the blockchain
async function connectWallet() {
    if (window.ethereum) {
        try {
            provider = new ethers.BrowserProvider(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });
            signer = await provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            console.log("Connected:", await signer.getAddress());
            document.getElementById("connectWallet").innerText = "Connected";
            
            // After connection, fetch blockchain data
            await updateTotalVotes();
            await setupCandidateIds();
            await loadUserVotes();
        } catch (error) {
            console.error("Connection error:", error);
        }
    } else {
        alert("MetaMask is not installed!");
    }
}
// Handle adding a new candidate
async function handleAddCandidate(event) {
    event.preventDefault();
    
    if (!contract || !signer) {
        alert("Please connect to MetaMask first!");
        return;
    }
    
    // Get form values
    const candidateName = document.getElementById('candidateName').value;
    const candidatePosition = document.getElementById('candidatePosition').value;
    const candidateParty = document.getElementById('candidateParty').value;
    
    try {
        // Call the blockchain function to add candidate
        // Note: We're only sending name and position as per the contract ABI
        await addCandidateToBlockchain(candidateName, candidatePosition);
        
        // Clear the form after submission
        document.getElementById('addCandidateForm').reset();
    } catch (error) {
        console.error("Error adding candidate:", error);
        alert("Error adding candidate. Check console for details.");
    }
}

// Add candidate to blockchain
async function addCandidateToBlockchain(name, position) {
    if (!contract || !signer) {
        throw new Error("Not connected to blockchain");
    }
    
    // This call matches your contract's addCandidate function (which takes only name and position)
    const tx = await contract.addCandidate(name, position);
    await tx.wait();
    
    console.log("Candidate added to blockchain:", name, position);
    alert("Candidate added successfully!");
}

// Update dashboard statistics from blockchain
async function updateDashboardStats() {
    if (!contract) return;
    
    try {
        // Get total votes - this function exists in your contract
        const totalVotes = await contract.getTotalVotes();
        document.getElementById("totalVotesCount").innerText = totalVotes.toString();
        
        // These functions don't exist in your contract, so we're creating placeholders
        // You'll need to implement these in your smart contract or modify this code
        
        // For registered voters (placeholder)
        document.getElementById("registeredVoters").innerText = "N/A";
        
        // For ongoing elections (placeholder)
        document.getElementById("ongoingElections").innerText = "N/A";
        
        // Alternative: Get candidates count as a substitute stat
        try {
            const candidatesCount = await contract.getCandidatesCount();
            document.getElementById("registeredVoters").innerText = candidatesCount.toString() + " candidates";
        } catch (error) {
            console.error("Error getting candidates count:", error);
        }
    } catch (error) {
        console.error("Error updating stats:", error);
    }
}

// Set up blockchain event listeners for real-time updates
function setupEventListeners() {
    if (!contract) return;
    
    // Listen for vote cast events
    contract.on("VoteCast", (voter, candidateId, position) => {
        console.log("New vote cast by:", voter, "for candidate:", candidateId, "position:", position);
        updateDashboardStats();
    });
    
    // Listen for candidate added events
    contract.on("CandidateAdded", (candidateId, name, position) => {
        console.log("New candidate added:", name, position);
        updateDashboardStats();
    });
}

// Create a new election (placeholder - adjust based on your actual contract)
async function createNewElection() {
    if (!contract || !signer) {
        alert("Please connect to MetaMask first!");
        return;
    }
    
    alert("This function is not implemented in the current contract.");
    // Uncomment and modify if you implement this in your contract
    /*
    try {
        const tx = await contract.createElection();
        await tx.wait();
        
        alert("New election created successfully!");
        updateDashboardStats();
    } catch (error) {
        console.error("Error creating election:", error);
        alert("Error creating election. Check console for details.");
    }
    */
}

// End an ongoing election (placeholder - adjust based on your actual contract)
async function endOngoingElection() {
    if (!contract || !signer) {
        alert("Please connect to MetaMask first!");
        return;
    }
    
    alert("This function is not implemented in the current contract.");
    // Uncomment and modify if you implement this in your contract
    /*
    try {
        const tx = await contract.endElection();
        await tx.wait();
        
        alert("Election ended successfully!");
        updateDashboardStats();
    } catch (error) {
        console.error("Error ending election:", error);
        alert("Error ending election. Check console for details.");
    }
    */
}

async function updateTotalVotes() {
    if (contract) {
        try {
            // Get total votes from the contract
            totalVotesCount = await contract.getTotalVotes();
            document.getElementById("totalVotes").innerText = totalVotesCount.toString();
            
            // Update active voters (this is an estimate)
            const activeVoters = Math.ceil(totalVotesCount / 2); 
            document.getElementById("activeVoters").innerText = activeVoters.toString();
        } catch (error) {
            console.error("Error getting total votes:", error);
        }
    }
}