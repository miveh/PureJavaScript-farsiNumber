const prompt = require("prompt-sync")({ sigint: true });
const rockPaperScissors = [
  {
    name: "rock",
    competitorMakesYouScore: "scissor",
    competitorMakesYouLose: "paper",
  },
  {
    name: "paper",
    competitorMakesYouScore: "rock",
    competitorMakesYouLose: "scissor",
  },
  {
    name: "scissor",
    competitorMakesYouScore: "paper",
    competitorMakesYouLose: "rock",
  },
];

//compare hands
let userScore = 0;
let systemScore = 0;
let winner = "";

// function compareHands(arr) {
//   for (obj in arr) {
//     if (userHand == arr[obj].name) {
//       if (systemHand == arr[obj].competitorMakesYouLose) {
//         return (userScore = 0), (systemScore = 1), (winner = "system");
//       } else if (systemHand == arr[obj].competitorMakesYouScore) {
//         return (userScore = 1), (systemScore = 0), (winner = "You");
//       } else {
//         return (winner = "anyone");
//       }
//     } //if
//   } //for
// } //func

function compareHands(arr) {
  let searchItem = arr.find((obj) => obj.name == userHand);
  // console.log(searchItem);
  //who is winner?!
  if (systemHand == searchItem.competitorMakesYouLose) {
    return (userScore = 0), (systemScore = 1), (winner = "system");
  } else if (systemHand == searchItem.competitorMakesYouScore) {
    return (userScore = 1), (systemScore = 0), (winner = "You");
  } else {
    return (winner = "anyone");
  }
}

/*play the game*/
while (true) {
  //system hand and user hand
  let randomSystemHand = (arr) => arr[parseInt(Math.random() * 3)].name;
  var systemHand = randomSystemHand(rockPaperScissors);
  var userHand = prompt("put your hand...");

  //output
  compareHands(rockPaperScissors),
    // console.log(systemHand, userHand, compareHands(rockPaperScissors));
    console.log(
      `YOU: ${userHand} - SYSTEM: ${systemHand}, WINNER: ${winner}, ${userScore}-${systemScore}`
    );
}
