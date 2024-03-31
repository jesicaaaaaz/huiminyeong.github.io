function showGreeting() {
    const playerName = prompt("Please enter your name:");
    if (playerName) {
        const greetingMessage = "Hello, " + playerName + "! Hope you are doing well and happy!";
        alert(greetingMessage);
        window.location.href = "q5.html";
    }
}
