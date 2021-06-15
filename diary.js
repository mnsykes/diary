// global variables
const entryForm = document.getElementById("entryForm");
const entriesSection = document.querySelector("#entries");
const entryTextbox = document.querySelector(".entryTextbox");
const entriesNav = document.querySelector(".entriesNav");

// functions
let buttonCounter = 1;
function addEntryToDom(event) {
	// prevents page reload on submit
	event.preventDefault();

	// append user entry to entries section and clear textbox on submit
	const entryDiv = document.createElement("div");
	entryDiv.className = "singleEntry";
	entryDiv.innerText = entryTextbox.value;
	// hides user entries by default
	entryDiv.style.display = "none";
	entriesSection.appendChild(entryDiv);
	entryTextbox.value = "";

	const displayEntryButton = document.createElement("button");
	displayEntryButton.className = "display-entry-button";

	displayEntryButton.innerText = buttonCounter;
	entriesNav.appendChild(displayEntryButton);

	// displays hidden user entry when button for entry is clicked
	displayEntryButton.addEventListener("click", function () {
		let allEntries = document.querySelectorAll(".singleEntry");
		// sets display for all entries to none
		for (let i = 0; i < allEntries.length; i++) {
			allEntries[i].style.display = "none";
		}
		// sets display of current item to block to be visible
		entryDiv.style.display = "block";
	});

	buttonCounter++;
}

// event listeners
entryForm.addEventListener("submit", addEntryToDom);
