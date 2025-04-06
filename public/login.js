document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");
    const savedName = localStorage.getItem("userName");
  
    if (email === savedEmail && password === savedPassword) {
      alert("👋 Welcome back, " + savedName + "!");
      // you can redirect to dashboard or main app
      window.location.href = "dashboard.html";
    } else {
      alert("❌ Invalid credentials. Try again!");
    }
  });
  