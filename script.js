let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// Display Elements
const heartDisplay = document.getElementById("heartCount");
const copyDisplay = document.getElementById("copyCount");
const coinDisplay = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Heart Toggle Function
function toggleHeart(icon) {
    const isActive = icon.classList.toggle("text-red-500");
    icon.classList.toggle("fa-solid", isActive);

    // Increment or Decrement based on toggle
    heartCount += isActive ? 1 : -1;
    heartDisplay.textContent = heartCount;
}

// Copy Function
function copyNumber(number) {
    navigator.clipboard.writeText(number).then(() => {
        alert(`Number ${number} copied!`);
        copyCount++;
        copyDisplay.textContent = copyCount;
    }).catch(() => {
        alert("Failed to copy number!");
    });
}

// Call Function
function makeCall(serviceName, number) {
    if (coinCount < 20) {
        alert("Not enough coins to make a call!");
        return;
    }

    // Deduct coins & update display
    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    // Show alert
    alert(`Calling ${serviceName} at ${number}`);

    // Add to Call History
    const time = new Date().toLocaleTimeString();
    const listItem = document.createElement("li");
    listItem.textContent = `${serviceName} - ${number} (Time: ${time})`;
    historyList.appendChild(listItem);
}

// Clear History
clearHistoryBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
});
