// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

const processItem = str=> str+ str;
processFirstItem(['foo', 'bar'], processItem)




// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2? counter2 uses a global variable for count
 * 
 * 2. Which of the two uses a closure?  How can you tell? counter1. it has a function nested in another function.
 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 is preferrable to use to avoid using global variable. counter2 should be avoided(maybe on edge
 * cases where count variable needs to be used as a global variable multiple times)
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){

    /*Code Here*/
    return Math.floor(Math.random()*3)
    

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, numInnings){

  /*Code Here*/
  let homeScore = 0;
  let awayScore = 0;
  for(let i =0; i< numInnings; i++){
     homeScore += callback();
     awayScore += callback();
  }
  return {
    "Home" : homeScore,
    "Away" : awayScore,
  }
}

console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback2){
  let homeScore = 0;
  let awayScore = 0;
  let totalHome = 0;
  let totalAway = 0;
  let currentInning = 0;
  
  return function(){
  currentInning++;
  if(currentInning === 10)
  return "Final Score: Awayteam: "+ totalAway + " - Hometeam: " + totalHome;
  else{
  awayScore = callback2();
  homeScore = callback2();
  totalAway += awayScore;
  totalHome += homeScore;
  
  
  return "Awayteam: " + awayScore  + " - Hometeam: " + homeScore
  }
  
  
  }

}

function scoreboard(callback, callback2, numInnings) {
  /* CODE HERE */
  
  let temp = getInningScore(inning)

  for(let i=1; i<numInnings+1; i++){
    if(i >= 4)
    console.log(i + "th inning: " + temp())
    else if(i === 3)
    console.log(i + "rd inning: " + temp())
    else if (i===2)
    console.log(i + "nd inning: " + temp())
    else
    console.log(i + "st inning: " + temp())
  }

    console.log(temp())

}

scoreboard(getInningScore, inning, 9)


