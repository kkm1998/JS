document.addEventListener('DOMContentLoaded', Start)

let paint
let photoshop
function Start() {
    paint = new Paint()
    photoshop = new Photoshop()
    // document.querySelector('canvas').addEventListener('touchstart', () => paint.PoczątekRysowania())
    // document.querySelector('canvas').addEventListener('touchend', () => paint.KoniecRysowania())
    // document.querySelector('canvas').addEventListener('touchmove', () => paint.Rysuj())
    document.querySelector('canvas').addEventListener('mousedown', () => paint.PoczątekRysowania())
    document.querySelector('canvas').addEventListener('mouseup', () => paint.KoniecRysowania())
    document.querySelector('canvas').addEventListener('mousemove', () => paint.Rysuj())
    document.querySelector('canvas').addEventListener('mouseout', () => paint.ZaDalekoKolegoLubKoleżanko())
    document.getElementById('kolory').addEventListener('change', () => paint.WybierzKolor())
    document.getElementById('rozmiar').addEventListener('change', () => paint.WybierzRozmiar())
    document.getElementById('Wyczyść').addEventListener("click", () => paint.Czyszczenie())
    document.getElementById('Wypełnij').addEventListener('click', () => paint.Fill())
    document.getElementById('butt').addEventListener("click", () => paint.WybierzPędzel('butt'))
    document.getElementById('round').addEventListener("click", () => paint.WybierzPędzel('round'))
    document.getElementById('square').addEventListener('click', () => paint.WybierzPędzel('square'))
    document.getElementById('przyciskJasność').addEventListener('change', () => photoshop.Filtr())
    document.getElementById('przyciskKontrast').addEventListener('change', () => photoshop.Filtr())
    document.getElementById('przyciskNasycenie').addEventListener('change', () => photoshop.Filtr())
    document.getElementById('otworzPlik').addEventListener("click", () => document.getElementById('plik').click())
    document.getElementById('plik').addEventListener('change', () => photoshop.WstawZdjęcie())
    document.getElementById('wymiarX').addEventListener('change', () => paint.Rozmiar())
    document.getElementById('wymiarY').addEventListener('change', () => paint.Rozmiar())
    




}