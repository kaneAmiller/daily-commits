const { execSync } = require("child_process");
const fs = require("fs");

const makeDailyCommit = () => {
  try {
    // Create a unique message with today's date
    const date = new Date().toISOString().split("T")[0];
    const message = `Daily commit for ${date}`;

    // Write a file to make a change in the repository
    fs.writeFileSync("temp.txt", message);

    // Stage, commit, and push the changes to GitHub
    execSync("git add temp.txt");
    execSync(`git commit -m "${message}"`);
    execSync("git push origin main");

    // Clean up the temporary file after a successful push
    fs.unlinkSync("temp.txt");
  } catch (error) {
    console.error("Error during daily commit:", error);
  }
};

// Run the function
makeDailyCommit();
