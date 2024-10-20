let chatLog = document.getElementById('chat-log');
let messageInput = document.getElementById('message-input');
let sendButton = document.getElementById('send-button');

let messages = [];

sendButton.addEventListener('click', () => {
    let message = messageInput.value.trim();
    if (message !== '') {
        messages.push(message);
        chatLog.innerHTML += `<p>${message}</p>`;
        messageInput.value = '';
    }
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

setInterval(() => {
    // Simulate receiving a new message from the server
    let newMessage = `Server: ${Math.random().toString(36).substr(2, 5)}`;
    messages.push(newMessage);
    chatLog.innerHTML += `<p>${newMessage}</p>`;
}, 2000);