class Photoshop {
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.płótno = this.canvas.getContext('2d')
        this.zdj = new Image()
        //   document.getElementById('nasycenie').addEventListener('change', () =>
        //    document.getElementById('canvas').style["filter"] = "saturate(" + document.getElementById("nasycenie").value + "%)")
        // document.getElementById('jasność').addEventListener('change', () =>
        //     document.getElementById('canvas').style["filter"] = "brightness(" + document.getElementById("jasność").value + "%)")
        // document.getElementById('kontrast').addEventListener('change', () =>
        //     document.getElementById('canvas').style["filter"] = "contrast(" + document.getElementById("kontrast").value + "%)")
    }
    WstawZdjęcie() {
        var x = URL.createObjectURL(event.target.files[0])
        this.zdj.src = x
        this.zdj.addEventListener('load', () => {
            this.płótno.drawImage(this.zdj, 0, 0, 800, 600)
        })
    }
    wstawPonownieZdjęcie() {
        this.płótno.drawImage(this.zdj, 0, 0, 800, 600);
    }
    Filtr() {
        this.wstawPonownieZdjęcie();
        var imageData = this.płótno.getImageData(0, 0, canvas.width, canvas.height);

        document.getElementById("RozmiarNasycenia").innerHTML = document.getElementById("przyciskNasycenie").value
        this.Nasycenie(
            imageData.data,
        );
        this.płótno.putImageData(imageData, 0, 0);

        document.getElementById("RozmiarKontrastu").innerHTML = document.getElementById("przyciskKontrast").value
        this.Kontrast(
            imageData.data,
        );
        this.płótno.putImageData(imageData, 0, 0);

        document.getElementById("RozmiarJasności").innerHTML = document.getElementById("przyciskJasność").value
        this.Jasność(
            imageData.data,
        );
        this.płótno.putImageData(imageData, 0, 0);
    }
    Nasycenie(data, wartośćSlideraNasycenie = parseInt(document.getElementById('przyciskNasycenie').value, 10)) {
        for (var i = 0; i < data.length; i += 4) {
            var r = data[i];
            var g = data[i + 1];
            var b = data[i + 2];
            var formułaNasycenie = 0.2989 * r + 0.5870 * g + 0.1140 * b;
            data[i] = formułaNasycenie * wartośćSlideraNasycenie + data[i] * (1 - wartośćSlideraNasycenie);
            data[i + 1] = formułaNasycenie * wartośćSlideraNasycenie + data[i + 1] * (1 - wartośćSlideraNasycenie);
            data[i + 2] = formułaNasycenie * wartośćSlideraNasycenie + data[i + 2] * (1 - wartośćSlideraNasycenie);
        }
    }
    Jasność(data, wartośćSlideraJasności = parseInt(document.getElementById('przyciskJasność').value, 10)) {
        for (var i = 0; i < data.length; i += 4) {
            data[i] += 255 * (wartośćSlideraJasności / 100);
            data[i + 1] += 255 * (wartośćSlideraJasności / 100);
            data[i + 2] += 255 * (wartośćSlideraJasności / 100);
        }
    }
    Kontrast(data, wartośćSlideraKontrastu = parseInt(document.getElementById('przyciskKontrast').value, 10)) {
        for (var i = 0; i < data.length; i += 4) {
            var formułaKontrast = (259.0 * (wartośćSlideraKontrastu + 255.0)) / (255.0 * (259.0 - wartośćSlideraKontrastu));
            data[i] = formułaKontrast * (data[i] - 128.0) + 128.0;
            data[i + 1] = formułaKontrast * (data[i + 1] - 128.0) + 128.0;
            data[i + 2] = formułaKontrast * (data[i + 2] - 128.0) + 128.0;
        }
    }
    

    // Jasność() {
    //     this.wstawPonownieZdjęcie()
    //     var imageData = this.płótno.getImageData(0, 0, canvas.width, canvas.height);
    //     this.Jasność(
    //         imageData.data,
    //     );
    //     this.płótno.putImageData(imageData, 0, 0);
    // }

    // Nasycenie() {
    //     this.wstawPonownieZdjęcie()
    //     var imageData = this.płótno.getImageData(0, 0, canvas.width, canvas.height);
    //     this.Nasycenie(
    //         imageData.data,
    //     );
    //     this.płótno.putImageData(imageData, 0, 0);
    // }

}





