function showGreeting() {
    const playerName = prompt("Please enter your name:");
    if (playerName) {
        const greetingMessage = "Hello, " + playerName + "! Hope you enjoy this game.";
        alert(greetingMessage);
        window.location.href = "nextpage.html"; 
    }
}
