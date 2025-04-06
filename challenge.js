let count = 0;

document.getElementById("joinBtn").addEventListener("click", () => {
  document.getElementById("progressArea").style.display = "block";
});

document.getElementById("addItemBtn").addEventListener("click", () => {
  if (count < 5) {
    count++;
    document.getElementById("count").textContent = count;
    if (count === 5) {
      document.getElementById("completionMessage").style.display = "block";
    }
  }
});

document.getElementById("shareBtn").addEventListener("click", () => {
  navigator.clipboard.writeText("I completed my e-waste challenge! ♻️🌱 #EcoWarrior");
  alert("Achievement copied to clipboard!");
});
