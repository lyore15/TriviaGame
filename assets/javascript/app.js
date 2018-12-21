var quizArea = $('#quiz');

$(document).on("click", '#start', function () {
    gameStart.start();
});

$(document).on('click', '#done', function () {
    gameStart.start();
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
    quesiton: "5) Who is the youngest captain in Starfleet history?",
    answers: ["Jonathan Archer", "Kathryn Janeway", "James T. Kirk", "Christopher Pike"],
    correctAnswer: "James T. Kirk"
}];


var gameStart = {
    correctGuesses = 0,
    incorrectGuesses = 0,
    timerRemaining = 60,

    countDown: function () {
        gameStart.timeRemaining--;
        $("#countdown").text("Time remaining: " + gameStart.timeRemainimg);

        if (gameStart.timeRemaining === 0) {
            console.log('Time Up!');
            gameStart.done();

            // gameStart.stopTimer();
            // $("#timer").empty();
        }
    },

    start: function () {
        timer = setInterval(gameStart.countDown, 1000);


        $('.container2').prepend('<h2>Time Remaining: <span id="countdown">60</span> Seconds</h2>');
        $('#start').remove();
    },

    //Now it's time for some for looping

    for (var i = 0; i < questions.length; i++) {
        quizArea.append('<h2>' + questions[i].question + '<h2>');

        for (var j = 0; j < questions[i].answers.length; j++) {
            quizArea.append('input type="radio" name="question" + ' - ' + i + "value=" + questions[i].answers[j] + ' ">' questions[i].answers[j]");
        }
    }

quizArea.append('<button id="done">ENGAGE!</button>');
}

done: function() {
    $.each($("imput[name='question-0"]: "checked"), function () {
        if ($(this).val() == question[0].correctAnswer) {
            gameStart.correct++;
        } else {
            gameStart.incorrect++;
        }
    });

    $.each($("imput[name='question-1"}: "checked"), function() {
        if ($(this).val() == question[1].correctAnswer) {
            gameStart.correct++;
        } else {
            gameStart.incorrect++;
        }
    });

    $.each($("imput[name='question-2"}: "checked"), function () {
    if ($(this).val() == question[2].correctAnswer) {
        gameStart.correct++;
    } else {
        gameStart.incorrect++;
    }
    });

    $.each($("imput[name='question-3"}: "checked"), function () {
    if ($(this).val() == question[3].correctAnswer) {
        gameStart.correct++;
    } else {
        gameStart.incorrect++;
    }
    });

    $.each($("imput[name='question-4"}: "checked"), function () {
    if ($(this).val() == question[4].correctAnswer) {
        gameStart.correct++;
    } else {
        gameStart.incorrect++;
    }
    
    });

this.result();
};


//Display the results for the user
result: function () {

    clearInterval(timer);

    $('.container2 h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.correct + this.incorrect)) + '</h3>');
}

};