class Paint {
    constructor() {
        canvas.width = 950
        canvas.height = 800
        this.canvas = document.querySelector('canvas')
        this.płótno = this.canvas.getContext('2d')
        this.rysuj = false
        this.płótno.lineWidth = 10;
        this.płótno.strokeStyle = '#ff33ff'
    }
    KoniecRysowania() {
        this.rysuj = false
    }
    PoczątekRysowania() {
        this.płótno.beginPath()
        this.rysuj = true
        this.Rysuj()
        
    }
    Rysuj() {
        let PozycjaX = event.clientX - canvas.offsetLeft
        let PozycjaY = event.clientY - canvas.offsetTop
        // let PozycjaX = event.touches[0].clientX - canvas.offsetLeft
        // let PozycjaY = event.touches[0].clientY - canvas.offsetTop
        if (this.rysuj == true) {
            this.płótno.lineTo(PozycjaX, PozycjaY)
            this.płótno.stroke()
        }
    }
    Fill() {
        this.płótno.fillStyle = document.getElementById("kolory").value
        this.płótno.fillRect(0, 0, 950, 800)
    }
    ZaDalekoKolegoLubKoleżanko() {
        this.rysuj = false
    }
    WybierzKolor() {
        this.płótno.strokeStyle = document.getElementById("kolory").value;
    }
    WybierzRozmiar() {
        this.płótno.lineWidth = document.getElementById("rozmiar").value;
        document.getElementById("RozmiarPędzla").innerHTML = document.getElementById("rozmiar").value;
    }
    WybierzPędzel(kształtPędzla) {
        this.płótno.lineCap = kształtPędzla
    }
    Czyszczenie() {
        this.płótno.clearRect(0, 0, canvas.width, canvas.height)
    }
    Rozmiar() {
        let Y = document.getElementById("wymiarY").value
        let X = document.getElementById("wymiarX").value
        canvas.width = parseInt(X, 10);
        canvas.height = parseInt(Y, 10);
        document.getElementById("RozmiarX").innerHTML = X;
        document.getElementById("RozmiarY").innerHTML = Y;
    }
}








