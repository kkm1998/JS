class Photoshop {
    constructor(elementId) {
        
        this.canvas = document.querySelector('#' + elementId)
        var płótno = canvas.getContext('2d')
        płótno.lineWidth = 5
        var rysuj = false

        this.canvas.addEventListener('mousemove', Rysowanie)

        function Rysowanie(e) {
            const PozycjaX = e.clientX - canvas.offsetLeft
            const PozycjaY = e.clientY - canvas.offsetTop
            if (rysuj == true) {
                płótno.lineTo(PozycjaX, PozycjaY)
                płótno.stroke()
            }
        }
        canvas.addEventListener('mousedown', function () {
            rysuj = true
            płótno.beginPath()
            canvas.addEventListener('mousemove', Rysowanie)
        })
        canvas.addEventListener('mouseup', function () {
            rysuj = false
        })
        document.getElementById('kolory').addEventListener('change', function () {
            płótno.strokeStyle = this.value           
        })

        document.getElementById('rozmiar').addEventListener('change', function () {
            płótno.lineWidth = this.value
        })

        document.getElementById('kontrast').addEventListener('change', () =>
            document.getElementById('canvas').style["filter"] = "contrast(" + document.getElementById("kontrast").value + "%)")

        document.getElementById('nasycenie').addEventListener('change', () =>
            document.getElementById('canvas').style["filter"] = "saturate(" + document.getElementById("nasycenie").value + "%)")

        document.getElementById('jasność').addEventListener('change', () =>
            document.getElementById('canvas').style["filter"] = "brightness(" + document.getElementById("jasność").value + "%)")


        document.getElementById('otworzPlik').addEventListener("click", () =>
            document.getElementById('plik').click())

        document.getElementById('Wyczyść').addEventListener("click", () =>
            płótno.clearRect(0, 0, canvas.width, canvas.height))

        document.getElementById('butt').addEventListener("click", () =>
            płótno.lineCap = "butt")

        document.getElementById('square').addEventListener("click", () =>
            płótno.lineCap = "square")

        document.getElementById('round').addEventListener("click", () =>
            płótno.lineCap = "round")

        document.getElementById('plik').addEventListener('change', function (e) {

            var x = URL.createObjectURL(e.target.files[0])
            var zdj = new Image()
            zdj.src = x
            zdj.addEventListener('load', function () {
                płótno.drawImage(zdj, 0, 0, 800, 600)
            })
        })


    }
}
