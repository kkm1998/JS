let ball = document.createElement('ball'),
    board = document.getElementsByClassName("board")[0],
    hole = document.createElement('div'),
    game = true,
    h1 = document.getElementsByTagName('h1')[0],
    seconds = minutes = hours = 0,
    diameterBall = 50,
    diameterHole = 100,
    vectorX = 0,
    vectorY = 0,
    speed = 40,
    posX = Math.floor(Math.random() * 750),
    posY = Math.floor(Math.random() * 750)
function start() {
    CreateHoles()
    BallMoving()
    CreateBall()
    timer()
}
window.addEventListener('deviceorientation', ChangeVector)
window.addEventListener('DOMContentLoaded', start())
function ChangeVector(event) {
    vectorX = event.gamma / speed
    vectorY = event.beta / speed
}
function BallMoving() {
    let BallCenter = [
        y = ball.offsetTop + diameterBall / 2,
        x = ball.offsetLeft + diameterBall / 2
    ]
    let HoleCenter = [
        y = hole.offsetTop + diameterHole / 2,
        x = hole.offsetLeft + diameterHole / 2,
    ]
    let xDistance_Ball_Hole = Math.pow(BallCenter[0] - HoleCenter[0], 2)
    let yDistance_Ball_Hole = Math.pow(BallCenter[1] - HoleCenter[1], 2)
    if (posX + vectorX < board.clientWidth - diameterBall && posX + vectorX > 0 && posY + vectorY < board.clientHeight - diameterBall && posY + vectorY > 0) {
        posX += vectorX
        posY += vectorY
        ball.style.left = posX + 'px'
        ball.style.top = posY + 'px'
    }
    if (Math.sqrt(xDistance_Ball_Hole + yDistance_Ball_Hole) < diameterHole / 2) {
        game = false
        clearTimeout(t);
        h1.appendChild(document.createTextNode(" - Brawo wygrana"))
    }
    if (game == true) {
        window.requestAnimationFrame(BallMoving)
    }

}
function CreateHoles() {
    hole.classList.add("hole")
    hole.style.height = diameterHole + 'px';
    hole.style.width = diameterHole + 'px';
    hole.style.left = Math.floor(Math.random() * (board.clientWidth - diameterHole)) + 'px'
    hole.style.top = Math.floor(Math.random() * (board.clientHeight - diameterHole)) + 'px'
    board.appendChild(hole);

}
function CreateBall() {
    ball.classList.add("ball")
    ball.style.height = diameterBall + 'px';
    ball.style.width = diameterBall + 'px';
    board.appendChild(ball);
}
function time() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    h1.textContent = "Twoj czas: " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer() {
    t = setTimeout(time, 1000);
}
