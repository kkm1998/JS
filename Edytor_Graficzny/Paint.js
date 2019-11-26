class Paint {
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.płótno = this.canvas.getContext('2d')
        this.rysuj = false
        this.płótno.lineWidth = 10;
        this.płótno.strokeStyle ='#ff33ff'
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
        if (this.rysuj == true) {
            this.płótno.lineTo(PozycjaX, PozycjaY)
            this.płótno.stroke()
        }
    }
    WybierzKolor() {
        this.płótno.strokeStyle = document.getElementById("kolory").value;
    }
    WybierzRozmiar() {
        this.płótno.lineWidth = document.getElementById("rozmiar").value;

    }
    WybierzPędzel(kształtPędzla) {
        this.płótno.lineCap = kształtPędzla
    }
    Czyszczenie() {
        this.płótno.clearRect(0, 0, canvas.width, canvas.height)
    }
}








