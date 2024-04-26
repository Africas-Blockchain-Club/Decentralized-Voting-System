function viewCandidates(electionId) {
    // Display the list of candidates for the selected election
    alert(`Viewing candidates for Election ${electionId}`);
  }

const form = document.querySelector("main form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const election = document.querySelector("#election").value;
  const candidate = document.querySelector("#candidate").value;

  // Save the user's vote to a JSON file or database
  // You can use the fetch API or a library like axios to send a POST request to your server
  // For example:
  // fetch("/api/vote", {
  //     method: "POST",
  //     body: JSON.stringify({ election, candidate }),
  //     headers: { "Content-Type": "application/json" },
  // })
  // .then(response => response.json())
  // .then(data => {
  //     if (data.success) {
  //         alert("Yourvote has been successfully cast!");
  //         window.location.href = "confirmation.html";
  //     } else {
  //         alert("There was an error casting your vote. Please try again.");
  //     }
  // });

  // For this example, we'll just display an alert with the user's vote
  alert(`Casting a vote for Candidate ${candidate} in Election ${election}`);

  // Redirect the user to the confirmation page
  window.location.href = "confirmation.html";
});