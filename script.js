const contractAddress = "0x7e63a6128679d6efdcaae4987f9a19a2037835a7";
const contractABI = [
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
];

let provider, signer, contract;
let totalVotesCount = 0;
// Map to store candidate IDs by position and index
let candidateIdMap = {};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("connectWallet").addEventListener("click", connectWallet);
    
    // Initialize the voted candidates section in the right sidebar
    if (!document.getElementById("votedCandidatesList")) {
        const votedCandidatesSection = document.createElement("div");
        votedCandidatesSection.className = "voted-candidates";
        votedCandidatesSection.innerHTML = `
            <h4>Your Votes</h4>
            <ul id="votedCandidatesList" class="voted-list"></ul>
        `;
        
        // Add this section to the info-content in the right sidebar
        const infoContent = document.querySelector(".info-content");
        if (infoContent) {
            infoContent.appendChild(votedCandidatesSection);
        }
    }
    
    // Initialize countdown (example: 3 days from now)
    startCountdown(3);
});

// Connect to MetaMask
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

// Connect contract candidate IDs with our frontend structure
async function setupCandidateIds() {
    try {
        // Get all candidates from the contract
        const allCandidates = await contract.getAllCandidates();
        
        // Reset the map
        candidateIdMap = {};
        
        // Create mappings by position and create an index within each position
        for (let i = 0; i < allCandidates.length; i++) {
            const candidate = allCandidates[i];
            const position = candidate.position;
            
            // Initialize position arrays if needed
            if (!candidateIdMap[position]) {
                candidateIdMap[position] = [];
            }
            
            // Find the matching candidate in our frontend data
            const frontendIndex = candidatesData[position].findIndex(
                c => c.name === candidate.name
            );
            
            if (frontendIndex !== -1) {
                // Store the contract ID for this candidate
                candidateIdMap[position][frontendIndex] = i;
                
                // Update the votes count from the blockchain
                candidatesData[position][frontendIndex].votes = parseInt(candidate.voteCount);
            }
        }
        
        // If a position is currently displayed, refresh it
        const activePosition = document.querySelector(".position-btn.active");
        if (activePosition) {
            loadCandidates(activePosition.dataset.position);
        }
        
    } catch (error) {
        console.error("Error setting up candidate IDs:", error);
    }
}

// Update total votes display from blockchain data
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

// Candidate data - keep this as is
const candidatesData = {
    president: [
        { name: "George Adams", dob: "September 11, 1985", age: 39, achievements: "Community Organizer", votes: 0, image: "assets/man.jpg" },
        { name: "Samantha Green", dob: "December 29, 1991", age: 33, achievements: "Public Policy Expert", votes: 0, image: "assets/woman.jpg" },
        { name: "Benjamin Parker", dob: "May 14, 1987", age: 37, achievements: "City Planner", votes: 0, image: "assets/man.jpg" },
        { name: "Lily Roberts", dob: "January 8, 1990", age: 34, achievements: "Education Reformer", votes: 0, image: "assets/woman.jpg" },
        { name: "Ethan Foster", dob: "April 22, 1988", age: 36, achievements: "Urban Developer", votes: 0, image: "assets/man.jpg" }
    ],
    vicePresident: [
        { name: "Michael Brown", dob: "March 15, 1980", age: 44, achievements: "Legal Expert", votes: 0, image: "assets/man.jpg" },
        { name: "Emma Watson", dob: "July 22, 1992", age: 32, achievements: "Social Worker", votes: 0, image: "assets/woman.jpg" },
        { name: "John Doe", dob: "October 5, 1985", age: 39, achievements: "Business Leader", votes: 0, image: "assets/man.jpg" },
        { name: "Sarah White", dob: "June 3, 1990", age: 34, achievements: "Policy Advisor", votes: 0, image: "assets/woman.jpg" },
        { name: "Robert King", dob: "November 30, 1987", age: 37, achievements: "Economist", votes: 0, image: "assets/man.jpg" }
    ],
    senator: [
        { name: "Olivia Smith", dob: "January 12, 1978", age: 46, achievements: "Human Rights Advocate", votes: 0, image: "assets/woman.jpg" },
        { name: "William Johnson", dob: "April 25, 1982", age: 42, achievements: "Law Professor", votes: 0, image: "assets/man.jpg" },
        { name: "Sophia Martinez", dob: "December 7, 1990", age: 34, achievements: "Environmentalist", votes: 0, image: "assets/woman.jpg" },
        { name: "Daniel Lee", dob: "September 9, 1983", age: 41, achievements: "Healthcare Advocate", votes: 0, image: "assets/man.jpg" },
        { name: "Jessica Taylor", dob: "February 18, 1989", age: 35, achievements: "Education Policy Expert", votes: 0, image: "assets/woman.jpg" }
    ],
    governor: [
        { name: "Christopher Hall", dob: "May 20, 1981", age: 43, achievements: "Economic Strategist", votes: 0, image: "assets/man.jpg" },
        { name: "Victoria Harris", dob: "August 14, 1986", age: 38, achievements: "Community Leader", votes: 0, image: "assets/woman.jpg" },
        { name: "Anthony Moore", dob: "November 5, 1984", age: 40, achievements: "Social Policy Expert", votes: 0, image: "assets/man.jpg" },
        { name: "Elizabeth Davis", dob: "March 30, 1991", age: 33, achievements: "Infrastructure Developer", votes: 0, image: "assets/woman.jpg" },
        { name: "Brian Carter", dob: "July 8, 1988", age: 36, achievements: "Technology Innovator", votes: 0, image: "assets/man.jpg" }
    ],
    mayor: [
        { name: "Megan Wright", dob: "April 2, 1980", age: 44, achievements: "Urban Development Leader", votes: 0, image: "assets/woman.jpg" },
        { name: "Kevin Thomas", dob: "September 28, 1983", age: 41, achievements: "Public Safety Advocate", votes: 0, image: "assets/man.jpg" },
        { name: "Angela Wilson", dob: "June 17, 1985", age: 39, achievements: "Housing Policy Expert", votes: 0, image: "assets/woman.jpg" },
        { name: "David Miller", dob: "January 11, 1990", age: 34, achievements: "Transportation Planner", votes: 0, image: "assets/man.jpg" },
        { name: "Rachel Scott", dob: "October 22, 1987", age: 37, achievements: "Environmental Policy Specialist", votes: 0, image: "assets/man.jpg" }
    ]
};

// Load candidates dynamically
function loadCandidates(position) {
    document.getElementById("candidateList").innerHTML = "";
    
    // Update UI to show active position button
    const positionBtns = document.querySelectorAll('.position-btn');
    positionBtns.forEach(btn => {
        if (btn.dataset.position === position) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    candidatesData[position].forEach(async (candidate, index) => {
        const candidateCard = document.createElement("div");
        candidateCard.className = "candidate-card";
        
        // Check if the user can vote for this candidate
        let voteButtonDisabled = "";
        let voteButtonText = "Vote";
        
        if (contract && signer) {
            try {
                const userAddress = await signer.getAddress();
                
                // Check if user has already voted for this position
                const hasVoted = await contract.hasUserVotedForPosition(userAddress, position);
                
                // For restricted positions, check all restricted positions
                if (["president", "vicePresident", "governor", "mayor"].includes(position)) {
                    const hasVotedForPosition = await contract.hasUserVotedForPosition(userAddress, position);

                    if (hasVotedForPosition) {
                        voteButtonDisabled = "disabled";
                        voteButtonText = "Already Voted";
                    }
                } 
                
                // For senator, check if the user has voted for 5 candidates
                else if (position === "senator") {
                    const candidateId = candidateIdMap[position][index];
                    if (candidateId !== undefined) {
                        const hasVotedForCandidate = await contract.hasVotedForCandidate(userAddress, candidateId);
                        if (hasVotedForCandidate) {
                            voteButtonDisabled = "disabled";
                            voteButtonText = "Already Voted";
                        }
                    }
                    
                    // Check if the user has already voted for 5 senators
                    const votesForSenators = await contract.votesForPosition(userAddress, "senator");
                    if (votesForSenators >= 5) {
                        voteButtonDisabled = "disabled";
                        voteButtonText = "Already Voted for 5 Senators";
                    }
                }

            } catch (error) {
                console.error("Error checking vote status:", error);
            }
        }
        
        candidateCard.innerHTML = `
            <div class="candidate-info">
                <img src="${candidate.image}" class="candidate-img" alt="${candidate.name}">
                <div class="text-info">
                    <h3>${candidate.name}</h3>
                    <p class="details">
                        <strong>Date of Birth:</strong> ${candidate.dob} <br>
                        <strong>Age:</strong> ${candidate.age} <br>
                        <strong>Achievements:</strong> ${candidate.achievements} <br>
                        <strong>Votes:</strong> <span id="votes-${position}-${index}">${candidate.votes}</span>
                    </p>
                </div>
            </div>
            <button class="vote-btn" onclick="vote('${position}', ${index})" ${voteButtonDisabled}>${voteButtonText}</button>
        `;
        document.getElementById("candidateList").appendChild(candidateCard);
    });
}

// Voting function - using blockchain only
async function vote(position, index) {
    if (!contract || !signer) {
        alert("Please connect to MetaMask first!");
        return;
    }

    const candidate = candidatesData[position][index];
    const positionLabel = position.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, str => str.toUpperCase());
    
    try {
        // Get the corresponding blockchain candidate ID
        const blockchainCandidateId = candidateIdMap[position][index];
        
        if (blockchainCandidateId === undefined) {
            alert("Error: Could not find candidate in blockchain. Please try again.");
            return;
        }
        
        // Check if the user can vote
        const userAddress = await signer.getAddress();
        
        // For restricted positions (president, vicePresident, governor, mayor), check all of them
        if (["president", "vicePresident", "governor", "mayor"].includes(position)) {
            const hasVotedForPosition = await contract.hasUserVotedForPosition(userAddress, position);

            if (hasVotedForPosition) {
                alert(`You have already voted for the ${positionLabel}.`);
                return;
            }
        }
        
        // For senator, check if the user has voted for 5 candidates
        if (position === "senator") {
            const votesForSenators = await contract.votesForPosition(userAddress, "senator");
            if (votesForSenators >= 5) {
                alert("You have already voted for 5 Senators.");
                return;
            }
        }
        
        // Get voting fee
        const votingFee = await contract.votingFee();
        
        // Notify user about the transaction
        alert(`Please confirm the transaction in MetaMask to vote for ${candidate.name} as ${positionLabel}. You'll need to pay ${ethers.formatEther(votingFee)} ETH plus gas fees.`);
        
        // Send transaction
        const tx = await contract.vote(blockchainCandidateId, { value: votingFee });
        
        // Wait for confirmation
        await tx.wait();
        
        // Update UI - get fresh data from blockchain
        await setupCandidateIds(); // Refresh all vote counts
        await updateTotalVotes(); 
        await loadUserVotes();  // Update the voted candidates list
        
        // Reload the current position's candidates to refresh UI
        loadCandidates(position);
        
        alert(`Successfully voted for ${candidate.name} as ${positionLabel}`);
    } catch (error) {
        console.error("Error voting:", error);
        
        if (error.code === 4001) {
            alert("Transaction rejected: You canceled the MetaMask transaction.");
        } else if (error.message && error.message.includes("You have already voted")) {
            alert("You have already voted for this position.");
        } else {
            alert("Error while voting. Please check the console for details.");
        }
    }
}


// Load the user's votes from blockchain
async function loadUserVotes() {
    if (!contract || !signer) return;
    
    try {
        const userAddress = await signer.getAddress();
        const votedList = document.getElementById("votedCandidatesList");
        if (!votedList) return;
        
        // Clear the list first
        votedList.innerHTML = "";
        
        // Get all candidates
        const allCandidates = await contract.getAllCandidates();
        
        // Check each candidate if the user has voted for them
        for (let i = 0; i < allCandidates.length; i++) {
            const hasVoted = await contract.hasVotedForCandidate(userAddress, i);
            
            if (hasVoted) {
                const candidate = allCandidates[i];
                addVotedCandidate(candidate.name, formatPositionName(candidate.position));
            }
        }
    } catch (error) {
        console.error("Error loading user votes:", error);
    }
}

// Helper function to format position names
function formatPositionName(position) {
    return position
        .replace(/([A-Z])/g, ' $1') // Insert a space before all uppercase letters
        .toLowerCase() // Convert to lowercase
        .replace(/^./, str => str.toUpperCase()); // Capitalize the first letter
}

// Function to add a candidate to the voted list in the right sidebar
function addVotedCandidate(name, position) {
    const votedList = document.getElementById("votedCandidatesList");
    if (votedList) {
        const listItem = document.createElement("li");
        listItem.className = "voted-item";
        listItem.innerHTML = `
            <span class="voted-position">${position}:</span>
            <span class="voted-name">${name}</span>
        `;
        votedList.appendChild(listItem);
    }
}

// Function to start countdown timer
function startCountdown(days) {
    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;
    
    // Set end date
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + days);
    
    // Update the countdown every second
    const interval = setInterval(function() {
        const now = new Date().getTime();
        const distance = endDate - now;
        
        // Calculate days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Format and display the countdown
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        
        // If the countdown is over
        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "ELECTION CLOSED";
        }
    }, 1000);
}

let timeout;
window.addEventListener("scroll", function () {
    clearTimeout(timeout); // Clear the previous timeout
    timeout = setTimeout(function () {
        let cards = document.querySelectorAll(".candidate-card");
        let navbar = document.querySelector(".navbar");

        if (!cards.length) return; // Prevents errors if no cards exist

        let top = cards[0].getBoundingClientRect().top;

        if (top < 10) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }, 100);
});