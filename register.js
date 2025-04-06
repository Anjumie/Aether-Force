document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Save to localStorage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password); // in real apps, never store password like this
  
    alert("🎉 Registered successfully, " + name + "!");
    window.location.href = "login.html"; // move to login
  });
  