const { execSync } = require("child_process");
const fs = require("fs");

const makeDailyCommit = () => {
  try {
    // Change directory to the Git repository
    const repoPath = "/volume3/homes/Kanemiller/daily-commits-home";
    process.chdir(repoPath);

    // Ensure we're on the main branch and reset any changes
    execSync("git checkout main");
    execSync("git fetch origin main");
    execSync("git reset --hard origin/main");  // Overwrites local changes with the remote

    // Create a unique message with today's date and time
    const date = new Date().toISOString();
    const message = `Daily commit for ${date}`;

    // Write a new file with the updated content
    fs.writeFileSync("temp.txt", message);

    // Stage, commit, and push the changes
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
