var buttonColors = ["red" , "blue" , "green" , "yellow"];
var gamePattern = [];
var userClickPattern = [];
var start = false;
var level = 0;

$(document).keypress(function() {
    if (!start) {
        $("#level-title").text("Level " + level);
        nextSequence();
        start = true;
    }
});


$(".btn").click(function() {

    var userChoosenColor = $(this).attr("id");

    userClickPattern.push(userChoosenColor);

    playSound(userChoosenColor);
    animatePress(userChoosenColor);
    checkAnswer(userClickPattern.length -1);


});


function nextSequence() {

    level++;

    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        console.log("suc");

        if (userClickPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }

    }else {
        console.log("worng");
    }
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    } , 100);
}


