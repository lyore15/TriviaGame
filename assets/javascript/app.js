var quizArea = $("#quiz");

$(document).on("click", '#start', function () {
    game.start();
});

$(document).on("click", "#done", function () {
    game.done();
});

//Trivia Question and Answers
var questions = [{
    question: "1) Which species was the first discover warp drive?",
    answers: ["Humans", "Vulcans", "Romulans", "Klingons"],
    correctAnswer: "Vulcans"
}, {
    question: "2) What is Sulu's primary position on the U.S.S. Enterprise?",
    answers: ["Science Officer", "Chief Engineer", "Helmsman", "Navigator"],
    correctAnswer: "Helmsman"
}, {
    question: "3) Who was the first real astronaut to appear in any Star Trek Episode?",
    answers: ["John Glenn", "Mae Jemison", "Sally Ride", "Jim Wetherbee"],
    correctAnswer: "Mae Jemison"
}, {
    question: "4) What is Uhura's first name?",
    answers: ["Nya", "Chiku", "Johari", "Nyota"],
    correctAnswer: "Nyota"
}, {
    question: "5) Who is the youngest captain in Starfleet history?",
    answers: ["Jonathan Archer", "Kathryn Janeway", "James T. Kirk", "Christopher Pike"],
    correctAnswer: "James T. Kirk"
}];


var game = {
    correctGuesses: 0,
    incorrectGuesses: 0,
    timer: 60,

    countdown: function () {
        game.timer--;
        $("#timer-number").html(game.timer);

        if (game.timer === 0) {
            console.log('Time Up!');
            game.done();

            // game.stopTimer();
            // $("#timer").empty();
        }
    },

    start: function () {
        clock = setInterval(game.countdown, 1000);

        $(".container2").prepend('<h3>Time Remaining: <span id="timer-number">60</span> Seconds</h3>');
        $("#start").remove();
        $("#trek").remove();

        //Now it's time for some for looping

        for (var i = 0; i < questions.length; i++) {
            quizArea.append('<h3>' + questions[i].question + '</h3>');

            for (var j = 0; j < questions[i].answers.length; j++) {
                quizArea.append('<input type="radio" id="ans" name="question' + '-' + i + '"value="' +  questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }

        quizArea.append('<button id="done">ENGAGE!</button>');
    },

    done: function () {

        $.each($('input[name="question-0"]:checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correctGuesses++;
            } else {
                game.incorrectGuesses++;
            }
        });

        $.each($('input[name="question-1"]:checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correctGuesses++;
            } else {
                game.incorrectGuesses++;
            }
        });

        $.each($('input[name="question-2"]:checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correctGuesses++;
            } else {
                game.incorrectGuesses++;
            }
        });

        $.each($('input[name="question-3"]:checked'), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correctGuesses++;
            } else {
                game.incorrectGuesses++;
            }
        });

        $.each($('input[name="question-4"]:checked'), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correctGuesses++;
            } else {
                game.incorrectGuesses++;
            }

        });

        this.result();
    },


    //Display the results for the user
    result: function () {

        clearInterval(clock);

        $(".container2 h3").remove();
        quizArea.html("<h2>All Done!</h2>");
        quizArea.append("<h3>Correct Answers: " + this.correctGuesses + '</h3>');
        quizArea.append("<h3>Incorrect Answers: " + this.incorrectGuesses + '</h3>');
        quizArea.append("<h3>Unanswered: " + (questions.length - (this.correctGuesses + this.incorrectGuesses)) + '</h3>');
    }

};