const fs = require("fs");

//  birth date
const birthDate = new Date("2004-02-12T00:00:00Z");
const now = new Date();
const diff = now - birthDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const years = Math.floor(days / 365);
const remainingDays = days % 365;

// Read README
let readme = fs.readFileSync("README.md", "utf8");

// Replace the uptime line 
const uptimeLine = `Uptime: ${years} years ${remainingDays} days`;
readme = readme.replace(/Uptime: \d+ years \d+ days/, uptimeLine);

// Write back to README
fs.writeFileSync("README.md", readme);
console.log("README updated successfully!");
