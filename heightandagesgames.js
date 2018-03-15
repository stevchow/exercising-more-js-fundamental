/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

// const player1 = {
//   heights: 170,
//   ages: 23,
// }

// const player2 = {
//   heights: 179,
//   ages: 26
// }

// const player3 = {
//   heights: 180,
//   ages: 27
// }

const Player = function(heights,ages){
  this.heights = heights;
  this.ages = ages;
}

Player.prototype.score = function(){
  return this.heights + (5 * this.ages);
}

const Mark = new Player(189,23).score();
const Zuck = new Player(189,26).score();
const Bill = new Player(189,26).score();


if(Mark > Zuck && Mark > Bill) console.log('Mark wins with ' + Mark);
else if(Zuck > Mark && Zuck > Bill) console.log('Zuck wins with ' + Zuck);
else if(Bill > Mark && Bill > Zuck) console.log('Bill wins with ' + Bill);
else console.log("There's and draw");


console.log(`Mark : ${Mark}, Zuck: ${Zuck}, Bill: ${Bill}`)