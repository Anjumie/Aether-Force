const rewards = [
    "🌿 Eco Badge",
    "♻️ Bonus Points",
    "🌎 Plant a Tree Virtually",
    "🧼 Free Eco Sticker",
    "💚 Surprise Tip!",
    "🔋 Battery Saver Award"
  ];
  
  const wheel = document.getElementById("wheel");
  const ctx = wheel.getContext("2d");
  const segmentAngle = 360 / rewards.length;
  const colors = ["#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50", "#388e3c"];
  
  function drawWheel() {
    for (let i = 0; i < rewards.length; i++) {
      ctx.beginPath();
      ctx.fillStyle = colors[i];
      ctx.moveTo(150, 150);
      ctx.arc(150, 150, 150, (i * segmentAngle) * Math.PI/180, ((i + 1) * segmentAngle) * Math.PI/180);
      ctx.fill();
      ctx.fillStyle = "#1b5e20";
      ctx.font = "14px Arial";
      ctx.save();
      ctx.translate(150, 150);
      ctx.rotate(((i + 0.5) * segmentAngle) * Math.PI/180);
      ctx.fillText(rewards[i], 60, 5);
      ctx.restore();
    }
  }
  
  drawWheel();
  
  function spinWheel() {
    const angle = Math.floor(Math.random() * 360);
    const spinAmount = 360 * 5 + angle; // 5 full spins + angle
    wheel.style.transform = `rotate(${spinAmount}deg)`;
    setTimeout(() => {
      const index = Math.floor(((360 - angle) % 360) / segmentAngle);
      document.getElementById("resultMessage").innerText = `You won: ${rewards[index]} 🎉`;
    }, 4200);
  }
  