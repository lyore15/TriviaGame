$(document).ready(function(){

$("#start").on("click", gameStart.startimer);
start();

});
var correctGuesses = 0;
var incorrectGuesses = 0;
var timer = 60;
var gameStart = {
    timeRemaining: 60,

startTimer: function() {
    $("#timer").text("Time remaining: " + gameStart.timeRemaining);
    setInterval(gameStart.countDown, 1000);
    $("#quiz").hide();
    trivia.showQuestions();
},
countDown: function() {
    gameStart.timeRemaining--;
    $("#timer").text("Time remaining: " + gameStart.timeRemaining);
    if (gameStart.timeRemaining ===0) {
        gameStart.stopTimer();
        $("#timer").empty();
    }
// },

// }
// for (var i = 0; i < question.length; i++){

}
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
}, {

}];