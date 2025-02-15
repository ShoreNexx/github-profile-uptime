const fs = require("fs");

//  birth date
const birthDate = new Date("2004-02-12T00:00:00Z");
const now = new Date();
const diff = now - birthDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const years = Math.floor(days / 365);
const remainingDays = days % 365;

// Read README
const readmePath = "README.md";
let readme = fs.readFileSync(readmePath, "utf8");


const uptimeLine = `Uptime: ${years} years ${remainingDays} days`;

// Check if README already has the correct uptime
if (!readme.includes(uptimeLine)) {
    readme = readme.replace(/Uptime: \d+ years \d+ days/, uptimeLine);
    fs.writeFileSync(readmePath, readme);
    console.log("README updated successfully!");
} else {
    console.log("No changes needed. README is already up to date.");
}
