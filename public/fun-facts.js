const facts = [
    "Recycling one million laptops saves the energy equivalent of 3,500 U.S. homes in a year!",
    "E-waste contains precious metals like gold, silver, and platinum.",
    "Only 20% of global e-waste is recycled properly.",
    "You can recycle old phones and turn them into solar lamps!",
    "Throwing e-waste in trash can harm groundwater and soil!"
  ];
  
  function showFunFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("fun-fact-text").innerText = randomFact;
    document.getElementById("fun-fact-popup").classList.remove("hidden");
  }
  
  function closeFact() {
    document.getElementById("fun-fact-popup").classList.add("hidden");
  }
  
  window.onload = function() {
    setTimeout(showFunFact, 3000); // Show after 3 seconds
  };
  