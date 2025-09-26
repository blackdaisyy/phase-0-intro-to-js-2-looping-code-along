// Code your solutions in this file
// Function 1: writeCards
function writeCards(names, eventName) {
  const messages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }

  return messages;
}

// Example usage:
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
// Output:
// [
//   "Thank you, Charlie, for the wonderful birthday gift!",
//   "Thank you, Samip, for the wonderful birthday gift!",
//   "Thank you, Ali, for the wonderful birthday gift!"
// ]


// Function 2: countDown
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

// Example usage:
countDown(10);
// Output:
// 10
// 9
// ...
// 0

