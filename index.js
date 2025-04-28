// Data arrays
const subjects = [
  "A curious developer",
  "An ambitious learner",
  "A late-night coder",
  "A creative problem-solver",
  "A fearless student",
];

const actions = [
  "debugs a tricky error",
  "writes elegant code",
  "learns a new framework",
  "ships a cool feature",
  "stays curious",
];

const consequences = [
  "and levels up their skills.",
  "and inspires the world.",
  "and lands their dream job.",
  "and builds something impactful.",
  "and makes their mark.",
];

// Function to get a random item from an array
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Generate the message
function generateMessage() {
  const subject = getRandomItem(subjects);
  const action = getRandomItem(actions);
  const consequence = getRandomItem(consequences);
  console.log(`${subject} ${action} ${consequence}`);
}

// Run the generator
generateMessage();
