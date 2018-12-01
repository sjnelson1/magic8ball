$(document).ready(function(){
    var magic8Ball = {};
    
     $("#answer").hide();
     
       magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so…", "Of course!", "Indubitably", "In your dreams."];
    
       magic8Ball.askQuestion = function(question){
         
              $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
         
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber *  this.listOfAnswers.length;
        var randomIndex =    Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#answer").fadeIn(4000);
        $("#answer").text( answer );
    
           console.log(question);
           console.log(answer);
       };
     
    var onClick = function() {
   
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        setTimeout(
          function() {
              //show prompt
            
              $("#8ball").effect("shake" );
              var question = prompt("Ask a yes or no question");
              magic8Ball.askQuestion(question);
          }, 500);
   
      };
     
     $("#questionButton").click( onClick );
   
   });
   
       