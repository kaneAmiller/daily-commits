# Daily Commits Automation

![Status](https://img.shields.io/badge/status-live-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-orange)
![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-green)
![GitHub Actions](https://img.shields.io/badge/Automation-Cron%20Job%20%7C%20Task%20Scheduler-lightgrey)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-blue)

This project automates daily commits to keep your GitHub contribution graph active. It generates a new commit each day with a unique message, pushes it to the repository, and handles potential conflicts automatically.

## Features

- **Automated Daily Commits**: Automatically commits a file (`temp.txt`) with a new timestamp every day.
- **Conflict Handling**: Resolves conflicts by force-syncing the local branch with the remote branch before each commit.
- **Customizable**: Easily adjust the commit message or modify the content of each commit.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:kaneAmiller/daily-commits.git
   cd daily-commits
   ```

2. **Install Node.js**: Make sure you have Node.js installed to run the script. [Download Node.js here](https://nodejs.org/).

3. **Set Up GitHub SSH Authentication**:
   - [Generate an SSH key](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh) if you haven't already.
   - Add the key to your GitHub account.

4. **Edit `dailyCommit.js` (Optional)**:
   - By default, the script creates a unique message using the current date and time.
   - If you want to change the commit message format, update the `message` variable in `dailyCommit.js`.

## Usage

### Running the Script Manually

To run the script manually, navigate to the project directory and execute:

```bash
node dailyCommit.js
```

This will:
1. Force-sync the local branch with the remote branch.
2. Generate a new commit message with the current date and time.
3. Push the new commit to the GitHub repository.

### Automate with a Cron Job (macOS/Linux)

To run this script automatically every day, set up a cron job:

1. Open your crontab:
   ```bash
   crontab -e
   ```

2. Add the following line to schedule the script to run daily at 9 AM:
   ```bash
   0 9 * * * /usr/local/bin/node /path/to/dailyCommit.js
   ```

   Replace `/path/to/dailyCommit.js` with the full path to your `dailyCommit.js` file.

### Automate with Task Scheduler (Windows)

1. Open **Task Scheduler**.
2. Create a new task with the following settings:
   - **Trigger**: Daily at your preferred time.
   - **Action**: Start a Program.
   - **Program**: Path to `node.exe`, usually `C:\Program Files\nodejs\node.exe`.
   - **Arguments**: Full path to `dailyCommit.js`, e.g., `C:\path\to\dailyCommit.js`.

## Customization

- **Change Commit Message**: Update the `message` variable in `dailyCommit.js` to customize the commit message format.
- **File Content**: The script writes a new message to `temp.txt` daily. You can modify this to add different content or even add more files if needed.

## Troubleshooting

- **Conflict Issues**: This script uses `git reset --hard` to resolve conflicts by syncing the local branch with the remote branch before each commit.
- **GitHub Authentication**: Make sure your SSH key is properly set up on GitHub if you encounter authentication issues.

## License

This project is licensed under the MIT License.
