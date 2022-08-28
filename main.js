function rock() {
    document.getElementById('paper').style.display = "none";
    document.getElementById('scissor').style.display = "none";
    document.getElementById("reset").style.display = "block";


}
function paper() {
    document.getElementById('rock').style.display = "none";
    document.getElementById('scissor').style.display = "none";
    document.getElementById("reset").style.display = "block";
}
function scissor() {
    document.getElementById('rock').style.display = "none";
    document.getElementById('paper').style.display = "none";
    document.getElementById("reset").style.display = "block";

}
function reset() {
    document.getElementById('rock').style.display = "block";
    document.getElementById('paper').style.display = "block";
    document.getElementById('scissor').style.display = "block";
    document.getElementById('reset').style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("comp").innerHTML= "☢️";
}
function random() {
    return Math.floor(Math.random(0, 3) * (3));
}

let rockval = document.getElementById("rock");
rockval.onclick = () => {
    rock();
    var computerChoice = random();
    document.getElementById("result").style.display = "block";

    if (computerChoice == 0) {
        document.getElementById("result").innerHTML = "Tie Kid!";
        document.getElementById("comp").innerHTML= "✊";
    }
    if (computerChoice == 1) {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("comp").innerHTML= "🤚";
    }
    if (computerChoice == 2) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("comp").innerHTML= "✂️";
    }
}

let paperval = document.getElementById("paper");
paperval.onclick = () => {
    paper();
    document.getElementById("result").style.display = "block";

    var computerChoice = random();
    if (computerChoice == 0) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("comp").innerHTML= "✊";
    }
    if (computerChoice == 1) {
        document.getElementById("result").innerHTML = "Tie Kid!";
        document.getElementById("comp").innerHTML= "🤚";
    }
    if (computerChoice == 2) {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("comp").innerHTML= "✂️";
    }
}

let scissorval = document.getElementById("scissor");
scissorval.onclick = () => {
    scissor();
    document.getElementById("result").style.display = "block";

    var computerChoice = random();
    if (computerChoice == 0) {
        document.getElementById("result").innerHTML = "You Lose!";
        document.getElementById("comp").innerHTML= "✊";
    }
    if (computerChoice == 1) {
        document.getElementById("result").innerHTML = "You Win!";
        document.getElementById("comp").innerHTML= "🤚";
    }
    if (computerChoice == 2) {
        document.getElementById("result").innerHTML = "Tie Kid!";
        document.getElementById("comp").innerHTML= "✂️";
    }
}
