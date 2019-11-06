document.addEventListener('DOMContentLoaded', appStart)
let canvas
let ctx

function appStart(params) {
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#btnDarken')
        .addEventListener('click', () => darkenFilter())
    document
        .querySelector('#btnContrast')
        .addEventListener('click', () => contrastFilter())
    ctx = canvas.getContext('2d')
    const srcImage = new Image()
    srcImage.src = 'wis.jpg'
    srcImage.addEventListener('load', () => {
        drawImage(srcImage, 0, 0)
        drawRec(100, 100, 200, 200)
        drawCircle(400, 400, 100)
    })
}

function darkenFilter(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 800, 600)
    for (let i = 0; i < canvasData.data.length; i++) {
        //R
        canvasData.data[i] -= amount
        //G
        canvasData.data[i + 1] -= amount
        //B
        canvasData.data[i + 2] -= amount
    }
    ctx.putImageData(canvasData, 0, 0)
    console.log(canvasData.data)
}

function contrastFilter(amount = 30) {
    const canvasData = ctx.getImageData(0, 0, 800, 600)
    for (let i = 0; i < canvasData.data.length; i++) {
        const r = canvasData.data[i]
        const g = canvasData.data[i + 1]
        const b = canvasData.data[i + 2]

        const avg = (r + g + b) / 3
        if (avg <= 127) {
            amount = -amount
        } 
        canvasData.data[i] += amount
        canvasData.data[i + 1] += amount
        canvasData.data[i + 2] += amount
    }
    ctx.putImageData(canvasData, 0, 0)
    console.log(canvasData.data)
}

function drawImage(img, x, y) {
    ctx.drawImage(img, x, y)
}

function drawRec(x, y, width, height) {
    ctx.rect(x, y, width, height)
    ctx.fill()
}

function drawCircle(x, y, radius) {
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fill()
}