class Notes {
    constructor() {
        this.loadNotes()
    }
    createNote(NotesOptions) {
        //#region Date
        var hour = new Date().getHours()
        if (hour < 10) hour = '0' + hour
        var minute = new Date().getMinutes()
        if (minute < 10) minute = '0' + minute
        var second = new Date().getSeconds()
        if (second < 10) second = '0' + second
        var day = new Date().getDate()
        if (day < 10) day = '0' + day
        var month = new Date().getMonth() + 1
        if (month < 10) month = '0' + month
        var year = new Date().getFullYear()
        let create_date = '' + day + '.' + month + '.' + year + ' ' + ' Godzina' + ' ' + hour + ':' + minute + ':' + second
        //#endregion
        let SingleNoteDefinition = NotesOptions || {
            title: '',
            body: '',
            id: "note_id_" + new Date().getTime(),
            DDY: create_date,
            // '' + new Date().getDate() + '.' + new Date().getMonth() + 1 + '.' + new Date().getFullYear() + ' ' + "Godzina" + ' ' + new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
            color_note: '',
            color_bar: '',
            pined: false,
            Tag: ''
        };
        let note = Createon.CreateDiv()
        switch (SingleNoteDefinition.pined) {
            case true:
                document.getElementById('Pin').insertBefore(note, document.getElementById('Pin').firstChild)
                break
            case false:
                document.getElementById('Not-Pin').insertBefore(note, document.getElementById('Not-Pin').firstChild)
                break
            default:
                document.getElementById('Pin').insertBefore(note, document.getElementById('Pin').firstChild)
        }
        let bar = Createon.CreateBar();
        let title_text = Createon.CreateTitle()
        let body_text = Createon.CreateBody()
        let footer = Createon.CreateFooter()
        let Tag_Text = Createon.CreateDivTag()
        let date = Createon.createDate(note)
        let colorBtnEl = Createon.CreateColor(note)
        let colorBarBtnEl = Createon.CreateColorBar(bar)
        //#region Menu
        // let Menu = Createon.CreateMenu()
        // let Menu_Title = Createon.CreateMenu_Title()
        // let Menu_Title_Size = Createon.CreateMenu_Title_Size()
        // let Menu_Title_Color = Createon.CreateMenu_Title_Color()
        // let Menu_Title_Font = Createon.CreateMenu_Title_Font()
        // let Menu_Body = Createon.CreateMenu_Body()
        // let Menu_Body_Size = Createon.CreateMenu_Body_Size()
        // let Menu_Body_Color = Createon.CreateMenu_Body_Color()
        // let Menu_Body_Font = Createon.CreateMenu_Body_Font()

        // let Menu_Title_Span = Createon.CreateMenu_Title_Span()
        // let Menu_Title_Size_Spam = Createon.CreateMenu_Title_Size_Spam()
        // let Menu_Title_Color_Span = Createon.CreateMenu_Title_Color_Span()
        // let Menu_Title_Font_Span = Createon.CreateMenu_Title_Font_Span()
        // let Menu_Body_Span = Createon.CreateMenu_Body_Span()
        // let Menu_Body_Size_Span = Createon.CreateMenu_Body_Size_Span()
        // let Menu_Body_Color_Span = Createon.CreateMenu_Body_Color_Span()
        // let Menu_Body_Font_Span = Createon.CreateMenu_Body_Font_Span()
        //#endregion
        let table = {
            date,
            note,
            body_text,
            title_text,
            colorBtnEl,
            colorBarBtnEl,
            Tag_Text
        }
        let saveBtnEl = Createon.CreateSave(table)
        let deleteBtnEl = Createon.CreateDelete(table)
        let pinBtnEl = Createon.CreatePin(note)
        note.appendChild(bar);
        note.appendChild(title_text);
        note.appendChild(body_text);
        note.appendChild(footer);
        footer.appendChild(date)
        bar.appendChild(Tag_Text)
        bar.appendChild(saveBtnEl);
        bar.appendChild(pinBtnEl)
        bar.appendChild(deleteBtnEl);
        bar.appendChild(colorBarBtnEl)
        bar.appendChild(colorBtnEl)
        //#region Menu
        // note.appendChild(Menu)
        // Menu.appendChild(Menu_Title)
        // Menu_Title.appendChild(Menu_Title_Span)
        // Menu.appendChild(Menu_Title_Size)
        // Menu_Title_Size.appendChild(Menu_Title_Size_Spam)
        // Menu.appendChild(Menu_Title_Color)
        // Menu_Title_Color.appendChild(Menu_Title_Color_Span)
        // Menu.appendChild(Menu_Title_Font)
        // Menu_Title_Font.appendChild(Menu_Title_Font_Span)
        // Menu.appendChild(Menu_Body)
        // Menu_Body.appendChild(Menu_Body_Span)
        // Menu.appendChild(Menu_Body_Size)
        // Menu_Body_Size.appendChild(Menu_Body_Size_Span)
        // Menu.appendChild(Menu_Body_Color)
        // Menu_Body_Color.appendChild(Menu_Body_Color_Span)
        // Menu.appendChild(Menu_Body_Font)
        // Menu_Body_Font.appendChild(Menu_Body_Font_Span)
        //#endregion
        note.id = SingleNoteDefinition.id;
        note.style.backgroundColor = SingleNoteDefinition.color_note
        body_text.textContent = SingleNoteDefinition.body;
        title_text.textContent = SingleNoteDefinition.title;
        date.innerHTML = SingleNoteDefinition.DDY;
        note.pined = SingleNoteDefinition.pined
        bar.style.backgroundColor = SingleNoteDefinition.color_bar
        Tag_Text.value = SingleNoteDefinition.Tag
    }
    static onChange(note, colorBtnEl) {
        note.style.backgroundColor = colorBtnEl.value;
    }
    static onChangeBar(bar, colorBarBtnEl) {
        bar.style.backgroundColor = colorBarBtnEl.value;
    }
    static goPin(note) {
        if (note.pined == false) {
            note.pined = true
            document.getElementById('Pin').insertBefore(note, document.getElementById('Pin').firstChild)
        } else {
            note.pined = false
            document.getElementById('Not-Pin').insertBefore(note, document.getElementById('Not-Pin').firstChild)
        }
    }
    static getNoteObject(table) {
        return {
            id: table.note.id,
            title: table.title_text.textContent,
            body: table.body_text.textContent,
            DDY: table.date.innerHTML,
            color_note: table.colorBtnEl.value,
            color_bar: table.colorBarBtnEl.value,
            pined: table.note.pined,
            Tag: table.Tag_Text.value
        }
    }
    static onSave(table) {
        this.saveNote(this.getNoteObject(table));
    }
    static saveNote(note) {

        localStorage.setItem(note.id, JSON.stringify(note))

    }
    static deleteNote(note) {
        localStorage.removeItem(note.id)
    }
    static onDelete(table) {
        this.deleteNote(this.getNoteObject(table));
        table.note.parentNode.removeChild(table.note)
    }
    loadNotes() {
        for (var i = 0; i < localStorage.length; i++) {
            var NotesOptions = JSON.parse(localStorage.getItem(localStorage.key(i)))
            this.createNote(NotesOptions);
        }
    }

}