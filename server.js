const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve static files from 'public' folder
app.use(express.static("public"));

// Routes for different pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/donate", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "donate.html"));
});

app.get("/locate", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "locate.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});





