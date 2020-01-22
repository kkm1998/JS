class Notes {
    constructor() {
        this.loadNotes()
        
        
    }
    createNote(NotesOptions) {

        let SingleNoteDefinition = NotesOptions || {
            title: '',
            body: '',
            id: "note_id_" + new Date().getTime(),
            //transformCSSValue: "translateX(" + Math.random() * 400 + "px)translateY(" + Math.random() * 400 + "px)",
            DDY: '' + new Date().getDate() + '.' + new Date().getMonth() + 1 + '.' + new Date().getFullYear() + ' ' + "Godzina" + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
            color: '',
            color2:'',
            pined: false
        };
        let note = this.CreateDiv();
        switch (SingleNoteDefinition.pined) {
            case true:
                document.getElementById('Pin').appendChild(note)

                break
            case false:
                document.getElementById('Not-Pin').appendChild(note)
                break
            default:
                document.getElementById('Not-Pin').appendChild(note)
        }
        let bar = this.CreateBar();
        // bar.addEventListener('mousedown', () => this.onDragStart(note,bar), false);
        // bar.addEventListener('mousemove', () => this.onDrag(), false);
        // bar.addEventListener('mouseup', () => this.onDragEnd(), false);
        note.appendChild(bar);
        let title_text = this.CreateTitle()
        note.appendChild(title_text);
        let body_text = this.CreateBody()
        note.appendChild(body_text);
        let footer = this.CreateFooter()
        note.appendChild(footer);
        let date = this.createDate(note)
        footer.appendChild(date)
        let colorBtnEl = this.CreateColor(note)
        let colorBarBtnEl = this.CreateColorBar(bar)
        let saveBtnEl = this.CreateSave(note, body_text, title_text, colorBtnEl,colorBarBtnEl)
        let deleteBtnEl = this.CreateDelete(note, body_text, title_text, colorBtnEl,colorBarBtnEl)
        let pinBtnEl = this.CreatePin(note)
        bar.appendChild(saveBtnEl);
        bar.appendChild(pinBtnEl)
        bar.appendChild(deleteBtnEl);
        bar.appendChild(colorBarBtnEl)
        bar.appendChild(colorBtnEl)


        note.id = SingleNoteDefinition.id;
        note.style.backgroundColor = SingleNoteDefinition.color
        note.style.transform = SingleNoteDefinition.transformCSSValue;
        body_text.value = SingleNoteDefinition.body;
        title_text.value = SingleNoteDefinition.title;
        date.innerHTML = SingleNoteDefinition.DDY;
        note.pined = SingleNoteDefinition.pined
        bar.style.backgroundColor=SingleNoteDefinition.color2
    }

    CreateDiv() {
        let note = document.createElement('div')
        note.classList.add('Note');
        return note
    }
    CreateBar() {
        let bar = document.createElement('div')
        bar.classList.add('Bar');
        return bar
    }
    CreateSave(note, body_text, title_text, colorBtnEl,colorBarBtnEl) {
        let saveBtnEl = document.createElement('button')
        saveBtnEl.classList.add('saveButton');
        saveBtnEl.setAttribute('title', 'Save Note')
        saveBtnEl.addEventListener('click', () => this.onSave(note, body_text, title_text, colorBtnEl,colorBarBtnEl), false)
        return saveBtnEl
    }
    CreateDelete(note, body_text, title_text, colorBtnEl,colorBarBtnEl) {
        let deleteBtnEl = document.createElement('button')
        deleteBtnEl.classList.add('deleteButton');
        deleteBtnEl.setAttribute('title', 'Delete Note')

        deleteBtnEl.addEventListener('click', () => this.onDelete(note, body_text, title_text, colorBtnEl,colorBarBtnEl), false)
        return deleteBtnEl
    }
    CreateColor(note) {
        let colorBtnEl = document.createElement('input')
        colorBtnEl.classList.add('colorButton');
        colorBtnEl.setAttribute('type', 'color')
        colorBtnEl.setAttribute('title', 'Change Note Color')
        colorBtnEl.setAttribute('value', '#ffffff')
        colorBtnEl.addEventListener('change', () => this.onChange(note, colorBtnEl), false)
        return colorBtnEl
    }
    CreateColorBar(bar) {
        let colorBarBtnEl = document.createElement('input')
        colorBarBtnEl.classList.add('colorBarButton');
        colorBarBtnEl.setAttribute('type', 'color')
        colorBarBtnEl.setAttribute('title', 'Change Bar Color')
        colorBarBtnEl.setAttribute('value', '#34b339')
        colorBarBtnEl.addEventListener('change', () => this.onChangeBar(bar, colorBarBtnEl), false)
        return colorBarBtnEl
    }
    CreateTitle() {
        let title_text = document.createElement('textarea')
        title_text.classList.add('Title')
        title_text.setAttribute('maxlength', '15')
        title_text.setAttribute('placeholder', 'Title')
        return title_text
    }
    CreateBody() {
        let body_text = document.createElement('textarea')
        body_text.classList.add('Text')
        body_text.setAttribute('maxlength', '280')
        body_text.setAttribute('placeholder', 'Text')
        return body_text
    }
    CreateFooter() {
        let footer = document.createElement('div')
        footer.classList.add('Footer')
        return footer
    }
    createDate() {
        let date = document.createElement('span')
        date.setAttribute('id', 'Date')
        return date
    }
    CreatePin(note) {
        let pinBtnEl = document.createElement('div')
        pinBtnEl.classList.add('pinButton')
        pinBtnEl.setAttribute('title', 'Pin Note')
        pinBtnEl.addEventListener('click', () => this.goPin(note), false)
        return pinBtnEl
    }
    //#region Gdybym chciał robić jeszcze ruchomowe
    // onDragStart(note) {
    //     this.draggedEl = note;
    //     let boundClientRect = this.draggedEl.getBoundingClientRect();
    //     this.grabPointX = boundClientRect.left - event.clientX;
    //     this.grabPointY = boundClientRect.top - event.clientY;
    // };
    // onDrag() {
    //     if (!this.draggedEl) {
    //         return;
    //     }
    //     var posX = event.clientX + this.grabPointX;
    //     var posY = event.clientY + this.grabPointY;
    //     if (posX < 0) {
    //         posX = 0;
    //     }
    //     if (posY < 0) {
    //         posY = 0;
    //     }
    //     this.draggedEl.style.transform = "translateX(" + posX + "px) translateY(" + posY + "px)";
    // };
    // onDragEnd() {

    //     this.draggedEl = null;
    //     this.grabPointX = null;
    //     this.grabPointY = null;
    // }
    //#endregion
    getNoteObject(note, body_text, title_text, colorBtnEl,colorBarBtnEl) {

        let date = ' ' + new Date().getDate() + '.' + new Date().getMonth() + 1 + '.' + new Date().getFullYear() + ' ' + "Godzina" + ' '
            + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
        var titleTextarea = title_text.value;
        var bodyTextarea = body_text.value;
        var color = colorBtnEl.value
        var color2 = colorBarBtnEl.value
        return {
            id: note.id,
            title: titleTextarea,
            body: bodyTextarea,
            //  transformCSSValue: note.style.transform,
            DDY: date,
            color: color,
            color2:color2,
            pined: note.pined
        }
    }
    onSave(note, title_text, body_text, colorBtnEl,colorBarBtnEl) {
        this.saveNote(this.getNoteObject(note, title_text, body_text, colorBtnEl,colorBarBtnEl));
    }
    saveNote(note) {
        localStorage.setItem(note.id, JSON.stringify(note))
    }
    onChange(note, colorBtnEl) {
        note.style.backgroundColor = colorBtnEl.value;
    }
    onChangeBar(bar, colorBarBtnEl) {
        bar.style.backgroundColor = colorBarBtnEl.value;
    }
    deleteNote(note) {
        localStorage.removeItem(note.id)
    }
    onDelete(note, body_text, title_text, colorBtnEl,colorBarBtnEl) {
        this.deleteNote(this.getNoteObject(note, body_text, title_text, colorBtnEl,colorBarBtnEl));       
        note.parentNode.removeChild(note)
    }
    goPin(note) {
        if (note.pined == false) {
            note.pined = true
            document.getElementById('Pin').appendChild(note)


        } else {
            note.pined = false
            document.getElementById('Not-Pin').appendChild(note)

        }
    }
    loadNotes() {
        for (var i = 0; i < localStorage.length; i++) {
            var NotesOptions = JSON.parse(localStorage.getItem(localStorage.key(i)))
            this.createNote(NotesOptions);
        }
    }
}