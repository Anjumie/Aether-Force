const buddyTips = [
    "Did you recycle today?",
    "Old phones can become solar lamps!",
    "Turn off unused electronics 🌿",
    "You're doing great! ♻️",
    "Let’s make Earth happy 🌍"
  ];
  
  function talkToBuddy() {
    const msgBox = document.getElementById("buddyMessage");
    const randomTip = buddyTips[Math.floor(Math.random() * buddyTips.length)];
    msgBox.innerText = randomTip;
    msgBox.style.display = "block";
    setTimeout(() => {
      msgBox.style.display = "none";
    }, 4000);
  }
  