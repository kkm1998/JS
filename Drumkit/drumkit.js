document.body.addEventListener('keypress', onKeyPress)

document.querySelector('#channel1Rec')
    .addEventListener('click', recChannel)
document.querySelector('#channel2Rec')
    .addEventListener('click', recChannel)
document.querySelector('#channel3Rec')
    .addEventListener('click', recChannel)
document.querySelector('#channel4Rec')
    .addEventListener('click', recChannel)


document.querySelector("#channel1Play")
    .addEventListener("click", playChannel1)
document.querySelector("#channel2Play")
    .addEventListener("click", playChannel2)
document.querySelector("#channel3Play")
    .addEventListener("click", playChannel3)
document.querySelector("#channel4Play")
    .addEventListener("click", playChannel4)

document.querySelector('#channel1Rec')
    .addEventListener('click', check1)
document.querySelector('#channel2Rec')
    .addEventListener('click', check2)
document.querySelector('#channel3Rec')
    .addEventListener('click', check3)
document.querySelector('#channel4Rec')
    .addEventListener('click', check4)

document.querySelector('#channel1Del')
    .addEventListener('click', del1)
document.querySelector('#channel2Del')
    .addEventListener('click', del2)
document.querySelector('#channel3Del')
    .addEventListener('click', del3)
document.querySelector('#channel4Del')
    .addEventListener('click', del4)  

function del1(){
    channel.length=0;
}
function del2(){
    channel2.length=0;
}
function del3(){
    channel3.length=0;
}
function del4(){
    channel4.length=0;
}

function playAudio(url) {
    var a = new Audio(url);
    a.play();
}

function check1() {
    suma = 1;
}
function check2() {
    suma = 2;
}
function check3() {
    suma = 3;
}
function check4() {
    suma = 4;
}

let suma = 0;
let channelStart = 0;

const channel = []
const channel2 = []
const channel3 = []
const channel4 = []

const sounds = {
    KeyQ: '#boom',
    KeyW: '#clap',
    KeyE: '#hihat',
    KeyR: '#kick',
    KeyT: '#openhat',
    KeyY: '#ride',
    KeyU: '#snare',
    KeyI: '#tink',
    KeyO: '#tom'
}

function playChannel1() {
    channel.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}
function playChannel2() {

    channel2.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })

}
function playChannel3() {
    channel3.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })
}
function playChannel4() {

    channel4.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
    })

}

function onKeyPress(e) {
    playSound(sounds[e.code]);
    const time = Date.now() - channelStart;
    const sound = {
        sound: e.code,
        time: time
    }
    if (suma == 1) {
        channel.push(sound)
    } else if (suma == 2) {
        channel2.push(sound)
    } else if (suma == 3) {
        channel3.push(sound)
    } else {
        channel4.push(sound)
    }
}

function playSound(id) {
    const audioTag = document.querySelector(id)
    audioTag.currentTime = 0
    audioTag.play()
}
function recChannel() {
    channelStart = Date.now()
}

