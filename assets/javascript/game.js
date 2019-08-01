
    // Creates an array that lists out all of the options
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 
    //  variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 10;

    document.getElementById('wins').innerHTML = "Wins!: " + wins;
    document.getElementById('losses').innerHTML = "losses!: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left!: " + guesses;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Get random letter
      var computerChoice = letters[Math.floor(Math.random() * letters.length)];

      var logMe = "Computer choose " + computerChoice;
      console.log(logMe);

      logMe = "User choose " + userGuess;
      console.log(logMe);

      // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }

    document.getElementById('wins').innerHTML = "Wins!: " + wins;
    document.getElementById('losses').innerHTML = "losses!: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left!: " + guesses;
       
};
