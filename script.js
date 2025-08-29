// Counters
let heartCount = 0;
let copyCount = 0;
let coinCount = 100;

// DOM Elements
const heartDisplay = document.getElementById("heartCount");
const copyDisplay = document.getElementById("copyCount");
const coinDisplay = document.getElementById("coinCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Toggle Heart
function toggleHeart(icon) {
    icon.classList.toggle("text-red-500"); // change color
    heartCount += icon.classList.contains("text-red-500") ? 1 : -1;
    heartDisplay.textContent = heartCount;
}

// Copy Number
function copyNumber(number) {
    navigator.clipboard.writeText(number)
        .then(() => {
            copyCount++;
            copyDisplay.textContent = copyCount;
            alert(`${number} copied!`);
        })
        .catch(() => alert("Copy failed!"));
}

// Make Call
function makeCall(serviceName, number) {
    if (coinCount < 20) {
        alert("Not enough coins!");
        return;
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;
    alert(`📞 Calling ${serviceName} at ${number}`);

    const time = new Date().toLocaleTimeString();

    const li = document.createElement("li");
    li.className = "bg-blue-100 p-2 rounded mb-2 flex justify-between items-center shadow";
    li.innerHTML = `
        <div>
            <p class="font-bold">${serviceName}</p>
            <p class="text-sm text-gray-600">${number}</p>
        </div>
        <span class="text-xs text-gray-500">${time}</span>
    `;
    historyList.appendChild(li);
}

// Clear History
clearHistoryBtn.addEventListener("click", () => historyList.innerHTML = "");
