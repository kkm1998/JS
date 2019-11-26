document.addEventListener('DOMContentLoaded', Start)

let paint
let photoshop
function Start() {
    paint = new Paint()
    photoshop = new Photoshop()

    document.querySelector('canvas').addEventListener('mousedown', () => paint.PoczątekRysowania())
    document.querySelector('canvas').addEventListener('mouseup', () => paint.KoniecRysowania())
    document.querySelector('canvas').addEventListener('mousemove', () => paint.Rysuj())
    document.getElementById('kolory').addEventListener('change', () => paint.WybierzKolor())
    document.getElementById('rozmiar').addEventListener('change', () => paint.WybierzRozmiar())
    document.getElementById('Wyczyść').addEventListener("click", () => paint.Czyszczenie())
    document.getElementById('butt').addEventListener("click", () => paint.WybierzPędzel('butt'))
    document.getElementById('round').addEventListener("click", () => paint.WybierzPędzel('round'))
    document.getElementById('square').addEventListener('click', () => paint.WybierzPędzel('square'))
    document.getElementById('przyciskJasność').addEventListener('change', () => photoshop.Filtr())
    document.getElementById('przyciskKontrast').addEventListener('change', () => photoshop.Filtr())
    document.getElementById('przyciskNasycenie').addEventListener('change', () => photoshop.Filtr())
    document.getElementById('otworzPlik').addEventListener("click", () => document.getElementById('plik').click())
    document.getElementById('plik').addEventListener('change', () => photoshop.WstawZdjęcie())



}