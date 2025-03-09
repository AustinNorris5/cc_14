//Task 2: Adding Support Tickets Dynamically

//Write a function that uses createElement to build a support ticket
function buildSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketDiv = document.createElement("div");
    ticketDiv.setAttribute("class", "id"); //Set attributes (such as class and id) using setAttribute

//A heading for the customer’s name
    const customerName = document.createElement("h3");
    customerName.textContent = name;
    
//A paragraph for the issue description
    const issueDescription = document.createElement("p");
    issueDescription.textContent = issue;
    
//A label indicating priority level
    const priorityLabel = document.createElement("span");
    priorityLabel.setAttribute("class", "priorityLabel");
    priorityLabel.textContent = `Priority: ${priority}`;
    
//A "Resolve" button to remove the ticket
    const resolveButton = document.createElement("button");
    resolveButton.setAttribute("class", "resolveButton");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function(event) {
        event.stopPropagation(); //Use stopPropagation() in the "Resolve" button’s event handler to prevent bubbling
        ticket.parentNode.removeChild(ticket); //Attach a click event listener to the "Resolve" button that removes its parent ticket using removeChild
    });
//Append the support ticket to "ticketContainer" using appendChild
    ticket.appendChild(customerName);
    ticket.appendChild(issueDesc);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);
};

//Task 3: Converting NodeLists to Arrays for Bulk Updates

//Use document.querySelectorAll to select all tickets with a "High" priority class
function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll(".high-priority");
    
//Convert the NodeList into an array using Array.from() or the spread operator
    const ticketArray = Array.from(highPriorityTickets);
    
//Use an array method (e.g., .forEach()) to update the appearance of high-priority tickets
    ticketArray.forEach(ticket => {
        ticket.style.backgroundColor = "red";
    });
};

//Task 4: Implementing Ticket Resolution with Event Bubbling

//Also, attach a click event listener to "ticketContainer" that logs a message when any ticket is clicked
const ticketContainer = document.getElementById("ticketContainer");
ticketContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("supportTicket")) {
        console.log("Ticket clicked:", event.target.id);
    };
});