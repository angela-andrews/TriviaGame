$(document).ready(function(){

var correct=0;
var incorrect=0;
var unanswered=0;
var pctCorrect=0;
var quizAns=" ";
var valueAns= " ";
var theQuestion= " ";
var quiz =[
    {   question : "How many nephews does Popeye have?",
        guesses: [2, 3, 4],
        correctAnswer: 2,
        data: "popeye"
    },
    {   question : "What phrase was Dexter stuck repeating over and over?",
        guesses: ["I concure","DeeDee, please","Omlet du Fromage"],
        correctAnswer: 2,
        data: "dexter"
    },
    {   question : "Who was Tommie Pickles little brother?",
        guesses: ["Dill","Chuckie","Peter"],
        correctAnswer: 0,
        data: "tommie"
    },
    {   question : "On Casper The Friendly Ghost, what was the little witches name?",
        guesses: ["Amber", "Wendy", "Glenda"],
        correctAnswer: 1,
        data: "casper"
    },
    {
        question : "Name the Animaniacs?",
        guesses: ["Ed, Edd, Eddie","Yakko, Wacko, Dot","Linus, Lucy, Patty"],
        correctAnswer: 1,
        data: "wb"
        },
    {
        question : "On Hey Arnold, who was Arnold's best friend?",
        guesses: ["Gerald Johanssen","Helga Pataki","Roger Benson"],
        correctAnswer: 0,
        data: "arnold"
        }
];

//start game button on click, hide button, start timer and show buttons
    
  function startScreen() {
    $("#startButton").on("click", function(){
        $("#startButton").hide();
        $("#timeRemaining").show();
        $("#question").show();
        timer();
        startGame();
    });
   
} //end of startScreen()

startScreen();
    
    function startGame() {
       //if answer button = quiz.correctAnswer
     $(".answer").on("click",function(){
        quizAns = ($(this).attr('data-answer')); //the question attr 
        valueAns = ($(this).attr('value')); //the index of the answer in array
        theQuestion = ($(this).text()); // button text 
        

    //    $('[data-answer]').each(function(){
    //         quizAns = ($(this).attr('data-answer'));
    //         for(var i=0; i<quiz.length; i++) {
    //             var x = quiz[i].data
    //                 if (x === quizAns)  {
    //                     console.log(x + " " + quizAns)
                  
                   
    //            } 
    //         }
    //    });
        for(var i=0; i<quiz.length; i++) {


            if((valueAns == quiz[i].correctAnswer) && (quizAns == quiz[i].data)   ) {
              
                console.log("correct");
                // console.log("data:" + quizAns + " data-answer: " + quiz[i].data);
                // console.log("correctAnswer:" + valueAns + " value: "+ quiz[i].correctAnswer);
                correct++;
             } else {
                console.log("wrong");
                
                incorrect++;
             }      
                    
        }
        


     });


    };
    function checkAnswers() {
        console.log("checkAnswers")
        }

        function gameOver(){
            console.log("game over")
        }
    function timer(){
       var counter =10;
        countdown = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                checkAnswers()
                gameOver()
                clearInterval(countdown);
                
            }
            if (counter > 0) {
                counter--;
            }
            $("#seconds").html(counter);
        }
      }

});


/*
Open issues:
startGame() 
I started with radio buttons, but couldn't get them working during Thursday with my
tutor. They wouldn't register as 'checked', even when they were
even after working on them,  so I moved to buttons, thinking they would be easier.

I can register wrong or right, but will hit every other data-answer attr,
so I end up with 1 correct and 5 wrong or 6 wrong console.logs
 > also, the user can hit multiple answer buttons.
 > tried .each() and a for loop and similar behavior occurs.

I haven't started on how to get the game to stop in 30 seconds. 

No function yet for the end of game tally (too busy with the buttons)

No game reset


*/