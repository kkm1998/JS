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
    .addEventListener('click', () => {
        suma = 1
    })
document.querySelector('#channel2Rec')
    .addEventListener('click', () => {
        suma = 2
    })
document.querySelector('#channel3Rec')
    .addEventListener('click', () => {
        suma = 3
    })
document.querySelector('#channel4Rec')
    .addEventListener('click', () => {
        suma = 4
    })

document.querySelector('#channel1Del')
    .addEventListener('click', () => {
        channel.length = 0;
    })
document.querySelector('#channel2Del')
    .addEventListener('click', () => {
        channel2.length = 0;
    })
document.querySelector('#channel3Del')
    .addEventListener('click', () => {
        channel3.length = 0;
    })
document.querySelector('#channel4Del')
    .addEventListener('click', () => {
        channel4.length = 0;
    })


function playAudio(url) {
    var a = new Audio(url);
    a.play();
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
        console.log(channel)
    })
}

function playChannel2() {

    channel2.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
        console.log(channel2)
    })

}

function playChannel3() {
    channel3.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
        console.log(channel3)
    })
}

function playChannel4() {

    channel4.forEach((el) => {
        setTimeout(() => {
            playSound(sounds[el.sound])
        }, el.time);
        console.log(channel4)
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