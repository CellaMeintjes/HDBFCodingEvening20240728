// Variables for real-time chat application: MingleBox
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var usernameInput = document.getElementById("username");
var joinButton = document.getElementById("join-btn");
var usernameEntry = document.getElementById("username-entry");
var chatArea = document.getElementById("chat-area");
var username = "";
var onlineUsersList = document.getElementById("user-list");

// Function to add a message to the chat window
function addMessage(user, msg, timestamp = new Date().toLocaleTimeString()) {
    var newMessage = document.createElement("li");
    newMessage.textContent = `${user}: ${msg} (${timestamp})`;
    if (user === username) {
        newMessage.classList.add("user-message");
    } else {
        newMessage.classList.add("other-message");
    }
    messages.appendChild(newMessage);
    messages.scrollTop = messages.scrollHeight;
}

// Create event listener for join button
joinButton.addEventListener("click", function() {
    username = usernameInput.value.trim();
    if (username) {
        usernameEntry.style.display = "none";
        chatArea.style.display = "flex";
        addMessage("System", `${username} has joined the chat.`);
    } else {
        alert("Please enter a username.");
    }
});

// Create event listener for send button
button.addEventListener("click", function() {
    var newMessageText = textbox.value.trim();
    if (newMessageText) {
        addMessage(username, newMessageText);
        textbox.value = "";
    }
});

// Simulating receiving messages every 3 seconds
var simulatedMessages = [
    { user: "User1", text: "Hi! Welcome to Mingle Box" }
];
var messageIndex = 0;

setInterval(function() {
    if (messageIndex < simulatedMessages.length) {
        var msg = simulatedMessages[messageIndex];
        addMessage(msg.user, msg.text);
        messageIndex++;
    }
}, 3000);


//Source: https://www.linkedin.com/pulse/storing-accessing-displaying-json-data-local-storage-grace-hudgens/