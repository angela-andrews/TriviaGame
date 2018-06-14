$(document).ready(function(){

var correct=0;
var incorrect=0;
var unanswered=0;
var pctCorrect=0;
var quiz =[
    {   question : "How many nephew does Popeye have?",
        guesses: {
            a: 2,
            b: 3,
            c: 4
            },
        correctAnswer: 'c'
    },
    {   question : "What phrase was Dexter stuck repeating over and over?",
        guesses: {
            a: "I concure",
            b: "DeeDee, please",
            c: "Omlet du Fromage"
            },
        correctAnswer: 'c'
    },
    {   question : "Who was Tommie Pickles little brother?",
        guesses: {
            a: "Dill",
            b: "Chuckie",
            c: "Peter"
            },
        correctAnswer: 'a'
    },
    {   question : "What phrase was Dexter stuck repeating over and over?",
        guesses: {
            a: "I concure",
            b: "DeeDee, please",
            c: "Omlet du Fromage"
            },
        correctAnswer: 'c'
    },
    {
        question : "Name the Animaniacs?",
        guesses: {
            a: "Ed, Ed, DeeDee",
            b: "Yakko, Wacko, Dot",
            c: "Sam, Petey, Patty"
            },
        correctAnswer: 'b'
        },
    {
        question : "On Hey Arnold, who was his best friend?",
        guesses: {
            a: "Gerald Martin Johanssen",
            b: "Helga Geraldine Pataki",
            c: "Roger Maximillian Benson"
            },
        correctAnswer: 'a'
        }
];

//start game button on click, hid button, start timer and show buttons
    
  function startScreen() {
    $("#startButton").on("click", function(){
        $("#startButton").hide();
        $("#timeRemaining").show();
        timer();
        //startGame();
    });
   
} //end of startScreen()

startScreen();
    
    function startGame() {
    //30 sec timer
    

    };

    function timer(){
       var counter =10;
        countdown = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                checkAnswers()
                clearInterval(countdown);
                
            }
            if (counter > 0) {
                counter--;
            }
            $("#seconds").html(counter);
        }
        
    }

   
            $("#done").on("click",checkAnswers());
            
            function checkAnswers() {

            if( $("input[name='nephew']:checked")["0"].value === '4') {
                correct++
                console.log(correct);
                } else {
                    incorrect++
                    console.log("wrong");
                }

            if( $("input[name='dexter']:checked")["0"].value === 'omlet') {
            correct++
            console.log(correct);
           } else {
               incorrect++
               console.log("wrong");
           }

           if( $("input[name='tommie']:checked")["0"].value === 'dill') {
            correct++
            console.log(correct);
           } else {
               incorrect++
               console.log("wrong");
           }
             


            };

   
//30 sec timer



//use $(this).attr for button click to register the corret answer

// add correct number to correc++ & go to next questions & reset times

// if not answered in time, incorrect++ & go to next question & reset timer

//create array for questions and answers 

//create logic for 


});