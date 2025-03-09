//Task 2: Adding Support Tickets Dynamically

//Write a function that uses createElement to build a support ticket
function buildSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticketDiv = document.createElement("div");
    ticketDiv.setAttribute("class", "id"); //Set attributes (such as class and id) using setAttribute

//A heading for the customer’s name
    const customerName = document.createElement("h3");
    customerName.textContent = name;
    
//A paragraph for the issue description
    const issueDesc = document.createElement("p");
    issueDesc.textContent = issue;
    
//A label indicating priority level
    const priorityLabel = document.createElement("span");
    priorityLabel.setAttribute("class", "priority-label");
    priorityLabel.textContent = `Priority: ${priority}`;
    
//A "Resolve" button to remove the ticket
    const resolveButton = document.createElement("button");
    resolveButton.setAttribute("class", "resolve-btn");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function() {
        ticket.remove();
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