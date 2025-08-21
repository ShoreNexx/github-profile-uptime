const fs = require("fs");

//  birth date
const birthDate = new Date("2004-02-12T00:00:00Z");
const now = new Date();
const diff = now - birthDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const years = Math.floor(days / 365);
const remainingDaysAfterYears = days % 365;
const months = Math.floor(remainingDaysAfterYears / 30);
const remainingDays = remainingDaysAfterYears % 30;

// Read README
const readmePath = "README.md";
let readme = fs.readFileSync(readmePath, "utf8");

// New uptime line
const uptimeLine = `Uptime: ${years} years ${months} months ${remainingDays} days`;

// Check if README already has the correct uptime
const uptimeRegex = /Uptime: \d+ years \d+ months \d+ days/;
if (!uptimeRegex.test(readme) || !readme.includes(uptimeLine)) {
    readme = readme.replace(uptimeRegex, uptimeLine);
    fs.writeFileSync(readmePath, readme);
    console.log("✅ README updated successfully!");
} else {
    console.log("⚡ No changes needed. README is already up to date.");
}
