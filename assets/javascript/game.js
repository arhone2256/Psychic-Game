
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

      /*
      var rnd = Math.random();
      var l = rnd * letters.length;
      var floor = Math.floor(l);

      console.log('random: ' + rnd);
      console.log('l ' + l);
      console.log('floor: ' + floor);
      */

      // Get random letter
      var computerChoice = letters[Math.floor(Math.random() * letters.length)];

      var logMe = "Computer choose " + computerChoice;
      console.log(logMe);

      logMe = "User choose " + userGuess;
      console.log(logMe);

      // This logic determines the outcome of the game (win/loss/guesses), and increments the appropriate number
    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        wins = 0;
        losses = 0;
        guesses = 10;
        document.getElementById('computerchoice').innerHTML = "Computer choice: ";
        document.getElementById('userguess').innerHTML = "Your choice: ";


        alert('You LOST!!!');
    }else{
        document.getElementById('userguess').innerHTML = document.getElementById('userguess').innerHTML + userGuess + ', ';
        document.getElementById('computerchoice').innerHTML ="Computer choice:" + computerChoice;
    }

    document.getElementById('wins').innerHTML = "Wins!: " + wins;
    document.getElementById('losses').innerHTML = "losses!: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left!: " + guesses;

   
}
