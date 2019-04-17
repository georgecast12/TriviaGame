
// coverHTML

// on click direct to UI (index.html) incorporated on HTML



//timer states and call for results that its triggered by timer. 
$(document).ready(function () {
    // timerGame structure variable
    var triviaGame = {

        //once on  main index file start countdown timer (120seconds)
        countDownInitial: 120,

        // load page + Start timer and interval by calling for countdown, and call the display questions function  
        startCount: function () {
            $(".timer").html("Time Left: " + (triviaGame.countDownInitial + " seconds"));
            setInterval(triviaGame.timerCountDown, 1000);
            startTrivia.displayQs();

            console.log(startCount);
            console.log(startTrivia.displayQs);

        },

        // if the timer runs out its call result function
        // when the timer = 0, call for results.html and call for endtimer/interval and show results fuction
        timerCountDown: function () {
            triviaGame.countDownInitial--;
            $(".timer").html("Time Left: " + (triviaGame.countDownInitial) + " seconds");
            if (countDownInitial === 0) {
                triviaGame.endTimer();
                (window.open(href = "results.html", "_self"));
                $(".timer").empty();
            }
            console.log(timerCountDown);
            console.log(triviaGame.endTimer)

        },

        //stop timer interval and calling function to display answers;
        endTimer: function () {
            clearInterval(triviaGame);
            startTrivia.reviewAs();

            console.log(endTimer);
            console.log(startTrivia.reviewAs)
        },

        // function to display results and where they will apear on HTML
        showResults: function (correct, incorrect, unanswered) {
            $(".timer").empty();
            $("#result-page").show();
            $("#totalCorrect").html("Correct Answers: " + correct);
            $("#noAnswer").html("Unanswered: " + unanswered);
            $("#totalWrong").html("Incorrect Answers: " + incorrect);

            console.log("correct: " + correct);
            console.log("incorrects: " + incorrect);
            console.log("unanswered: " + unanswered);
        }

    }


    // trivia()
    // attempt #3

    //general game stucture - display all questions / review answers and 
    var startTrivia = {

        // show array of questions and mutliple options and its location@ index.html
        displayQs: function () {
            var container = $("#qDiv");

            for (var i = 0; i < triviaQs.length; i++) {

                container.append('<div id="question">' + triviaQs[i].question + '</div>');

                var answer1 = triviaQs[i].answers[0];
                var answer2 = triviaQs[i].answers[1];
                var answer3 = triviaQs[i].answers[2];
                var answer4 = triviaQs[i].answers[3];

                container.append('<div class="form-check"><input class="form-check-input" type="radio"' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer1 + '</label></div>');
                container.append('<div class="form-check"><input class="form-check-input" type="radio"' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer2 + '</label></div>');
                container.append('<div class="form-check"><input class="form-check-input" type="radio"' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer3 + '</label></div>');
                container.append('<div class="form-check"><input class="form-check-input" type="radio"' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + answer4 + '</label></div>');


                console.log(container);
                console.log(answers[0]);
                console.log(answers[1]);
                console.log(answers[2]);
                console.log(answers[3]);
                console.log(displayQs);

            }

        },
        // review questions to determine if user had the response right, wrong or unanswered
        reviewAs: function () {
            var correctAnswer;
            var userAnswer;
            var correct = 0;
            var incorrect = 0;
            var unanswered = 0;

            // loop to compare userAnswer vs correctAnswer and increment score  depending on result

            for (var i = 0; i < triviaQs.length; i++) {
                correctAnswer = triviaQs[i].correct;
                userAnswer = $('input[id=radio' + i + ']:checked + label').text();

                if (userAnswer === correctAnswer) {
                    correct++;
                } else if (userAnswer === "") {
                    unanswered++;
                } else if (userAnswer !== correctAnswer) {
                    incorrect++;

                }
                console.log(correct);
                console.log(incorrect);
                console.log(unanswered);
            }

            triviaGame.showResults(correct, incorrectm, unanswered);

            console.log(triviaGame.showResults);

        },

    }




    //Array with all Trivia questions/options and answers

    var triviaQs =
        [
            {
                question: "How many World Series Championships did the Dodgers win while in Brooklyn?",
                answers: ["Two", "Three", "One", "none"],
                correct: "One"
            },

            {
                question: "When did the Dodgers have their last 100 win season?",
                answers: ["1988", "2018", "1974", "2001"],
                correct: "1974"
            },
            {
                question: "The Dodgers won ____ World Series Championship(s) under manager Tommy Lasorda.",
                answers: ["Two", "Three", "One", "none"],
                correct: "Two"
            },
            {
                question: "How many Manager of the Year Awards did Tommy Lasorda win?",
                answers: ["Two", "Three", "One", "none"],
                correct: "Two"
            },
            {
                question: "In 2013, the Dodgers were ranked ____ in home attendance among the National League.",
                answers: ["First", "Fourth", "Fith", "Second"],
                correct: "First"
            },
            {
                question: "How many World Championships have the Dodgers won?",
                answers: ["2", "3", "7", "6"],
                correct: "6"
            },
            {
                question: "How many National League pennants have the Dodgers won?",
                answers: ["26", "21", "16", "12"],
                correct: "21"
            },
            {
                question: "In the 1990's, how many consecutive Rookie of the Year awards did the Dodgers win?",
                answers: ["Five", "Two", "One", "Four"],
                correct: "Five"
            },
            {
                question: "What year did Eric Gagne set the club record for saves in a single-season with 55?",
                answers: ["2001", "2003", "2004", "2000"],
                correct: "2003"
            },
            {
                question: "What year was the Dodgers first season in Dodger Stadium?",
                answers: ["1962", "1958", "1963", "1968"],
                correct: "1962"
            }
        ]


})



