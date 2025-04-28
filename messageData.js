// messageData.js (Optional: move this into a separate file later)
const messages = {
  inspiration: {
    subjects: [
      "A curious developer",
      "An ambitious learner",
      "A late-night coder",
      "A creative problem-solver",
      "A fearless student",
    ],
    actions: [
      "debugs a tricky error",
      "writes elegant code",
      "learns a new framework",
      "ships a cool feature",
      "stays curious",
    ],
    consequences: [
      "and levels up their skills.",
      "and inspires the world.",
      "and lands their dream job.",
      "and builds something impactful.",
      "and makes their mark.",
    ],
  },
  funny: {
    subjects: [
      "A sleep-deprived coder",
      "A rubber duck",
      "An overcaffeinated engineer",
      "A broken semicolon",
      "A wild syntax error",
    ],
    actions: [
      "accidentally deploys to production",
      "refactors their coffee instead of code",
      "types 'git push force' with confidence",
      "starts talking to their code",
      "googles the same error for the 10th time",
    ],
    consequences: [
      "and still gets a raise.",
      "and breaks the space-time continuum.",
      "and becomes a meme.",
      "and wins the internet.",
      "and gets featured on Stack Overflow.",
    ],
  },
};

// Utility
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Main message generator
function generateMessage(theme) {
  const themeData = messages[theme];
  if (!themeData) {
    console.log(
      `❌ Theme "${theme}" not found. Available themes: ${Object.keys(
        messages
      ).join(", ")}`
    );
    return;
  }

  const subject = getRandomItem(themeData.subjects);
  const action = getRandomItem(themeData.actions);
  const consequence = getRandomItem(themeData.consequences);

  console.log(`💬 ${subject} ${action} ${consequence}`);
}

// Parse CLI input
const args = process.argv.slice(2);
const userTheme = args[0] || "inspiration";

generateMessage(userTheme);
