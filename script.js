let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCounter = document.getElementById("heartCount");
const coinCounter = document.getElementById("coinCount");
const copyCounter = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

// Heart Toggle Function
function toggleHeart(icon) {
    if (icon.classList.contains("text-gray-400")) {
        icon.classList.remove("text-gray-400");
        icon.classList.add("text-red-500");
        heartCount++;
    } else {
        icon.classList.remove("text-red-500");
        icon.classList.add("text-gray-400");
        heartCount--;
    }
    heartCounter.innerText = heartCount;
}

// Copy Function
function copyNumber(number) {
    navigator.clipboard.writeText(number);
    alert(`Copied: ${number}`);
    copyCount++;
    copyCounter.innerText = copyCount;
}

// Call Function
function makeCall(name, number) {
    if (coinCount < 20) {
        alert("Not enough coins!");
        return;
    }

    coinCount -= 20;
    coinCounter.innerText = coinCount;

    alert(`Calling ${name} (${number})`);

    const time = new Date().toLocaleTimeString();
    const listItem = document.createElement("li");
    listItem.textContent = `${name} - ${number} at ${time}`;
    historyList.appendChild(listItem);
}

// Clear History
document.getElementById("clearHistory").addEventListener("click", () => {
    historyList.innerHTML = "";
});